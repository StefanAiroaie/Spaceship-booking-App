import mongoose, { Schema } from "mongoose";

const shipSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  baujahr: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  shipType: {
    type: String,
    required: true,
  },
});

export const Ship = mongoose.model("Ship", shipSchema, "ships");
