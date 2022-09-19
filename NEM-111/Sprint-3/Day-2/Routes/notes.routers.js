
const express = require("express");

const NotesModel = require("../Model/Notes.model");
const notesRouter = express.Router();

notesRouter.get("/:userId",async (req,res)=>{
    const userId = req.params.userId
    const notes = await NotesModel.find({userId})
    res.send(notes)
})


notesRouter.post("/:userId/create",async(req,res)=>{
    const userId = req.params.userId
    const {title,note,label}=req.body;
    const new_note = new NotesModel({
        title,
        note,
        label,
        userId
    })
    await new_note.send()
    res.send({"message":"new notes succesfuly create",new_note})
})

notesRouter.patch("/:userId/edit/:noteId", async (req, res) => {
  const userId = req.params.userId;
  const notes_Id = req.params.noteId
const note = await NotesModel.findOne({_id:notes_Id})
  if(note.userId !== userId){
    return res.send("you are not authorised")
  }
  const new_note = await NotesModel.findByIdAndUpdate(notes_Id,req.body)
  return res.send("UPDATE")
});


notesRouter.delete("/:userId/delete/:noteId", async (req, res) => {
  const userId = req.params.userId;
  const notes_Id = req.params.noteId;
  const note = await NotesModel.findOne({ _id: notes_Id });
  if (note.userId !== userId) {
    return res.send("you are not authorised");
  }
  const new_note = await NotesModel.findByIdAndUpdate(notes_Id);
  return res.send("DELETE");
});

module.exports = notesRouter



