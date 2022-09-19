

const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String, required: true },
  label: { type: String, required: true },
  userId: { type: String, required: true }
});

const NotesModel = mongoose.model("note", NotesSchema);

module.exports = NotesModel;