const { Schema } = require('mongoose')

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = teamSchema
