import mongoose from 'mongoose';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

/**
 * POST /api/contact
 * Save a contact form submission and optionally email the sales team.
 */
export const saveContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are required.',
      });
    }

    let savedContact = null;

    // Save to DB only if MongoDB is connected
    if (mongoose.connection.readyState === 1) {
      savedContact = await Contact.create({ name, email, phone, message });
    } else {
      console.log('📨 Contact received (no DB):', { name, email });
    }

    // Optional: send notification email if SMTP configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"Quebeta Website" <${process.env.SMTP_USER}>`,
          to: process.env.SALES_EMAIL || 'sales@quebeta.in',
          replyTo: email,
          subject: `New enquiry from ${name}`,
          html: `
            <div style="font-family:Inter,sans-serif;max-width:600px;margin:auto;padding:20px;background:#f8fcff;border-radius:12px">
              <h2 style="color:#0078BF;margin:0 0 20px">New Enquiry — Quebeta.in</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px;font-weight:600">Name:</td><td style="padding:8px">${name}</td></tr>
                <tr><td style="padding:8px;font-weight:600">Email:</td><td style="padding:8px">${email}</td></tr>
                <tr><td style="padding:8px;font-weight:600">Phone:</td><td style="padding:8px">${phone || '—'}</td></tr>
              </table>
              <div style="margin-top:20px;padding:16px;background:white;border-radius:8px">
                <strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}
              </div>
            </div>
          `,
        });
      } catch (mailErr) {
        console.error('⚠️  Email send failed (non-fatal):', mailErr.message);
      }
    }

    return res.status(201).json({
      success: true,
      message: 'Thanks! We\'ll get back to you within one business day.',
      data: savedContact ? { id: savedContact._id } : null,
    });
  } catch (err) {
    console.error('Contact save failed:', err);
    return res.status(500).json({
      success: false,
      error: err.message || 'Server error while processing your request.',
    });
  }
};

/**
 * GET /api/contact
 * List submissions (protect this with auth in production).
 */
export const listContacts = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ success: false, error: 'DB not connected.' });
    }
    const contacts = await Contact.find().sort({ createdAt: -1 }).limit(100);
    return res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
};
