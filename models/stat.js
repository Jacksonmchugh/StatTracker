const { Schema } = require('mongoose')

const statSchema = new Schema(
  {
    scores: { type: Number, required: false },
    blocks: { type: Number, required: false },
    drops: { type: Number, required: false }
  },
  { timestamps: true }
)
module.exports = statSchema
