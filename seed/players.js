const db = require('../db')
const { Player, Team } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const rushHour = await Team.findOne({ name: 'Rush Hour' })
  const chainLightning = await Team.findOne({ name: 'Chain Lightning' })
  const players = [
    {
      name: 'Jackson McHugh',
      age: '29',
      team_id: rushHour._id
    },
    {
      name: 'Zaki Durry',
      age: '30',
      team_id: rushHour._id
    },
    {
      name: 'Matt Smith',
      age: '33',
      team_id: chainLightning._id
    }
  ]
  await Player.insertMany(players)
  console.log('created players with teams')
}
const run = async () => {
  await main()
  db.close()
}

run()
