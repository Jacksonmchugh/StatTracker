const db = require('../db')
const { Team } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const teams = [
    {
      name: 'Rush Hour',
      location: 'Atlanta',
      picture:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.hgmsites.net%2Flrg%2Fatlanta-georgia-during-rush-hour-via-wikimedia_100414585_l.jpg&f=1&nofb=1'
    },
    {
      name: 'Chain Lightning',
      location: 'Atlanta',
      picture:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusaultimate.org%2Fwp-content%2Fuploads%2F2020%2F11%2FChainLightning_Logo.jpg&f=1&nofb=1'
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
