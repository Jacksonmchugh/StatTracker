const { Schema } = require('mongoose')

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = teamSchema
