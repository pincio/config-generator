function createContext(mac, passphrase, profiles, internalInterface) {
  const basicServiceSets = profiles.map((profile, i) => {
    return {
      bss: `${internalInterface}_${i}`,
      ssid: `PiNC - ${profile.name}`
    }
  })

  return {
    mac,
    passphrase,
    basic_service_sets: basicServiceSets,
    internal_interface: internalInterface
  }
}

module.exports = createContext
