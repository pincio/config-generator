const { INTERFACE } = require('./interfaces')

function createContext(mac, passphrase, profiles) {
  const basicServiceSets = profiles.map((profile, i) => {
    return {
      bss: `${INTERFACE}_${i}`,
      ssid: `mudl - ${profile.name}`
    }
  })

  return {
    mac,
    passphrase,
    basic_service_sets: basicServiceSets
  }
}

module.exports = createContext
