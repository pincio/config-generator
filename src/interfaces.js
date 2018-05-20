const ADDRESS = [192, 168, 60, 1]
const NETMASK = [255, 255, 255, 0]

function createContext(mac, profiles, interface) {
  let interfaces = profiles.map((_, i) => {
    let address = ADDRESS.slice()
    address[2] += (i + 1) // e.g. 192.168.61.1

    return {
      name: `${interface}_${i}`, // e.g. wlan0_0
      address,
      netmask: NETMASK
    }
  })

  interfaces.unshift({
    name: interface,
    address: ADDRESS,
    netmask: NETMASK,
    has_command: true,
    command: `pre-up ifconfig ${interface} hw ether ${mac}`
  })

  return interfaces
}

module.exports = createContext
