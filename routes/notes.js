const express = require('express');
const router = express.Router();

let notes =[];
let idCounter=1;

router.get('/', (req,res)=>
{
     res.json(notes);
});

router.get('/:id',(req,res)=>
{
     const id = pareseInt(req.params.id);
     const note = notes.find(n=>n.id===id);
     if(!note) return res.status(404).json({message:'note not found'});
     res.json(note);
});

router.post('/',(req,res)=>{
     const{title, content}=req.body;
     if(!title || !content){
          return res.status(400).json({ message: 'Title and content are required'});
     }

     const newNote ={id:idCounter++, title, content};
     notes.push(newNote);
     res.status(201).json({message: 'note added successfully', note:newNote});
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = notes.findIndex(n => n.id === id);
  if (index === -1) return res.status(404).json({ message: 'Note not found' });

  const deleted = notes.splice(index, 1);
  res.json({ message: 'Note deleted successfully', note: deleted[0] });
});

router.put('/:id',(req,res)=>{
     const id= parseInt(req.params.id);
     const{title,content}= req.body;

     const note = notes.find(n => n.id === id);
  if (!note) return res.status(404).json({ message: 'Note not found' });

  note.title = title || note.title;
  note.content = content || note.content;

  res.json({ message: 'Note updated successfully', note }); 

});

module.exports=router;
