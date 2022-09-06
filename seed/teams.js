const db = require('../db')
const { Team } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const teams = [
    {
      name: 'Rush Hour',
      location: 'Atlanta'
    },
    {
      name: 'Chain Lightning',
      location: 'Atlanta'
    }
  ]
  await Team.insertMany(teams)
  console.log('created teams')
}
const run = async () => {
  await main()
  db.close()
}

run()
