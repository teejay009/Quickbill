const mongoose = require("mongoose");

const invoiceModel = require("../models/invoiceModel");

const createInvoice = async (req, res) => {
  try {
  const invoice = req.body;

  const newInvoice = new invoiceModel(invoice);

  
    await newInvoice.save();
    res.status(201).json({ message: "Invoice created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {createInvoice};