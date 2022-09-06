const { Schema } = require('mongoose')

const statSchema = new Schema(
  {
    player: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    scores: { type: Number, required: true },
    blocks: { type: Number, required: true },
    drops: { type: Number, required: true }
  },
  { timestamps: true }
)
module.exports = statSchema
