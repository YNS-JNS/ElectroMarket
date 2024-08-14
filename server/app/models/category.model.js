import mongoose from 'mongoose';


const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// categorySchema.method("toJSON", function () {
  
//   const { __v, _id, ...object } = this.toObject();
//   object.id = _id;
//   return object;
// })

const Category = mongoose.model('Category', categorySchema);

export default Category;
