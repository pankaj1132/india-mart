

const mongoose = require("mongoose");

const bulbSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: false },
    desc_2: { type: String, required: false },
    Wattage: { type: String, required: false },
    Brand: { type: String, required: false },
    Lighting_Color: { type: String, required: false },
    application: { type: String, required: false },
    desc_3: { type: String, required: false },
    desc_4: { type: String, required: false },
    desc_5: { type: String, required: false },
    desc_6: { type: String, required: false },
    desc_7: { type: String, required: false },
    desc_8: { type: String, required: false },
    supplier: { type: String, required: false },
    supplier_Addres: { type: String, required: false },
    cl: { type: String, required: false },
    mob: { type: String, required: false },
    contact: { type: String, required: false },
    img1: { type: String, required: false },
    img2: { type: String },
    userID: { type: String },
  },
  {
    versionKey: false,
  }
);

const BulbModel = mongoose.model("bulb", bulbSchema);

module.exports = BulbModel;
