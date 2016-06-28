function createContext(interfaces) {
  // FIXME: `slice(1)` indicates a binding between this and `createInterfacesContext`.
  const rules = interfaces.slice(1).map((interface, i) => {
    return {
      interface: interface.name,
      mark: `0x${i + 1}`
    }
  })

  return {
    rules
  }
}

module.exports = createContext
