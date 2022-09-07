const { Schema } = require('mongoose')

const statSchema = new Schema(
  {
    scores: { type: Number, required: true },
    blocks: { type: Number, required: true },
    drops: { type: Number, required: true }
  },
  { timestamps: true }
)
module.exports = statSchema
