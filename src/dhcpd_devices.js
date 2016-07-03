function createContext(interfaces) {
  return {
    dhcpd_devices: interfaces.map(interface => interface.name).join(' ')
  }
}

module.exports = createContext
