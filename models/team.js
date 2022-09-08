const { Schema } = require('mongoose')

const teamSchema = new Schema(
  {
    name: { type: String, required: false },
    location: { type: String, required: false },
    picture: { type: String, required: false },
    description: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = teamSchema
