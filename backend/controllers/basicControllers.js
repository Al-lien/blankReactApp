const mongoose = require("mongoose");

const Basic = require("../models/basicModel");

// GET ALL data
const getAllData = async (req, res) => {
  const basics = await Basic.find({});

  res.status(200).json(basics);
};

// GET SINGLE data
const getSingleData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such basic" });
  }
  const basic = await Basic.findById(id);

  if (!basic) {
    return res.status(404).json({ error: "No such basic" });
  }

  return res.status(200).json(basic);
};

// CREATE data
const createData = async (req, res) => {
  const { valueOne, valueTwo, valueThree } = req.body;

  try {
    const basic = await Basic.create({ valueOne, valueTwo, valueThree });
    res.status(200).json(basic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE data
const updateData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such basic" });
  }

  const basic = await Basic.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!basic) {
    return res.status(400).json({ error: "No such basic" });
  }

  return res.status(200).json(basic);
};

// DELETE data
const deleteData = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such basic" });
  }

  const basic = await Basic.findOneAndDelete({ _id: id });

  if (!basic) {
    return res.status(404).json({ error: "No such basic" });
  }

  return res.status(200).json(basic);
};

module.exports = {
  getAllData,
  getSingleData,
  createData,
  updateData,
  deleteData,
};
