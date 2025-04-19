const mongoose = require("mongoose");

const plywoodProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quan: { type: String, required: false },
    size: { type: String, required: false },
    Color: { type: String, required: false },
    Wood_Type: { type: String },
    UsageApplication: { type: String },
    Thickness: { type: Number },
    Brand: { type: String, required: false },
    supplier: { type: String, required: false },
    supplier_Addres: { type: String, required: false },
    mob: { type: Number },
    contact: { type: String, required: false },
    userID: { type: String },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },
  },
  {
    versionKey: false,
  }
);

const PlywoodProductModel = mongoose.model("plywood", plywoodProductSchema);

module.exports = PlywoodProductModel;

