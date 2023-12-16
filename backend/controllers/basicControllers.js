// GET ALL data
const getData = async (req, res) => {
  res.status(200).json({ message: "GET ALL data" });
};

// GET SINGLE data
const getSingleData = async (req, res) => {
  res.status(200).json({ message: "GET SINGLE data" });
};

// CREATE data
const createData = async (req, res) => {
  res.status(200).json({ message: "CREATE data" });
};

// UPDATE data
const updateData = async (req, res) => {
  res.status(200).json({ message: "UPDATE data" });
};

// DELETE data
const deleteData = async (req, res) => {
  res.status(200).json({ message: "DELETE data" });
};

module.exports = { getData, getSingleData, createData, updateData, deleteData };
