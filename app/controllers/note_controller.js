import Note from '../models/note_model';


export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  console.log(`controller deleted ${id}`);
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
  return Note.find({ id }).remove();
};

export const createNote = (fields) => {
  // you know the drill. create a new Note mongoose object
  const n = new Note();
  n.title = fields.title;
  n.x = fields.x;
  n.y = fields.y;
  n.zIndex = fields.zIndex;
  n.text = fields.text;
  n.id = fields.id;
  console.log('controller created a note');
  console.log(n);
  return n.save();
};

export const updateNote = (id, fields) => {
  return Note.findOne({ id })
  .then((note) => {
    // check out this classy way of updating only the fields necessary
    Object.keys(fields).forEach((k) => {
      note[k] = fields[k];
    });
    return note.save();
  });
};
