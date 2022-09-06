const { Schema } = require('mongoose')

const playerSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    team: [{ type: Schema.Types.ObjectId, ref: 'Team' }]
  },
  { timestamps: true }
)

module.exports = playerSchema
