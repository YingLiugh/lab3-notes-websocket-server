import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
  id: Number,
}, {
  toJSON: {
    virtuals: true,
  },
});
// create PostModel class from schema
const NoteModel = mongoose.model('Note', NoteSchema);
export default NoteModel;
