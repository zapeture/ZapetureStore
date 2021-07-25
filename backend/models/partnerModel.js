import mongoose from 'mongoose';

const partnerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
});

const Partner = mongoose.model('Partner', partnerSchema);

export default Partner;
