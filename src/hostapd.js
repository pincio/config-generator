function createContext(mac, passphrase, profiles, interface) {
  const basicServiceSets = profiles.map((profile, i) => {
    return {
      bss: `${interface}_${i}`,
      ssid: `PiNC - ${profile.name}`
    }
  })

  return {
    mac,
    passphrase,
    basic_service_sets: basicServiceSets
  }
}

module.exports = createContext
