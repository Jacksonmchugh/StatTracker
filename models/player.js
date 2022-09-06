const { Schema } = require('mongoose')

const playerSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = playerSchema
