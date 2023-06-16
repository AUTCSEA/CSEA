import { Schema, model, models } from 'mongoose';

const execsSchema = new Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  linkedinURL: {
    type: String,
  },
  imageURL: {
    type: String,
  },
});

const Execs = models.Execs || model('Execs', execsSchema);

export default Execs;
