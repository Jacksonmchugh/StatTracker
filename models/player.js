const { Schema } = require('mongoose')

const playerSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: true },
    team_id: { type: Schema.Types.ObjectId, ref: 'team_id', required: false }
  },
  { timestamps: true }
)

module.exports = playerSchema
