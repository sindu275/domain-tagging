const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DomainDataSchema = new Schema(
  {
    description: String,
    isValid: Boolean,
    name: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("DomainData", DomainDataSchema);