const mongoose = require("mongoose");

const PuanSchema = new mongoose.Schema(
  {
    Activities: [
      {
        type: String,
        required: true,
        puanMiktar: Number,
        gelisTur: String,
        gidisTur: String,
      },
    ],
    User_id: { type: String, required: true },
    Puan: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Puan", PuanSchema);
