function createAddress(routerAddress) {
  let result = routerAddress.slice()
  result[3] = 0 // e.g. 192.168.60.0

  return result
}

function createRange(routerAddress) {
  let start = routerAddress.slice()
  start[3] = 10 // e.g. 192.168.60.10

  let end = routerAddress.slice()
  end[3] = 60 // e.g. 192.168.60.60

  return {
    start,
    end
  }
}

function createBroadcastAddress(routerAddress) {
  let result = routerAddress.slice()
  result[3] = 255 // e.g. 192.168.60.255

  return result
}

function createSubnet(interface) {
  const routerAddress = interface.address
  const { netmask } = interface

  return {
    address: createAddress(routerAddress),
    netmask,
    range: createRange(routerAddress),
    broadcast_address: createBroadcastAddress(routerAddress),
    router_address: routerAddress
  }
}

function createContext(interfaces) {
  return interfaces.map(createSubnet)
}

module.exports = createContext
