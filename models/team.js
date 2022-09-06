const { Schema } = require('mongoose')

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    picture: { type: String, required: true },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }]
  },
  { timestamps: true }
)

module.exports = teamSchema
