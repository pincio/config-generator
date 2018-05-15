function createContext(interfaces) {
  return interfaces.map(interface => interface.name)
}

module.exports = createContext
