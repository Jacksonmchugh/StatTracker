const db = require('../db')
const { Player } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createPlayers = async () => {
  const players = [
    {
      name: 'Jackson McHugh',
      age: '29'
    },
    {
      name: 'Matt',
      age: '30'
    }
  ]
  await Player.insertMany(players)
  console.log('created players')
}
const run = async () => {
  await main()
  db.close()
}

run()
