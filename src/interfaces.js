const INTERFACE = 'wlan0'
const ADDRESS = [192, 168, 60, 1]
const NETMASK = [255, 255, 255, 0]

function createContext(profiles) {
  let interfaces = profiles.map((_, i) => {
    let address = ADDRESS.slice()
    address[2] += (i + 1) // e.g. 192.168.61.1

    return {
      name: `${INTERFACE}_${i}`, // e.g. wlan0_0
      address,
      netmask: NETMASK
    }
  })

  interfaces.unshift({
    name: INTERFACE,
    address: ADDRESS,
    netmask: NETMASK
  })

  return {
    interfaces
  }
}

module.exports = createContext
module.exports.INTERFACE = INTERFACE
