const ADDRESS = [192, 168, 60, 1]
const NETMASK = [255, 255, 255, 0]

function createContext(mac, profiles, internalInterface, externalInterface) {
  let interfaces = profiles.map((_, i) => {
    let address = ADDRESS.slice()
    address[2] += (i + 1) // e.g. 192.168.61.1

    return {
      name: `${internalInterface}_${i}`, // e.g. wlan0_0
      address,
      netmask: NETMASK
    }
  })

  interfaces.unshift({
    name: internalInterface,
    address: ADDRESS,
    netmask: NETMASK,
    has_command: true,
    command: `pre-up ifconfig ${internalInterface} hw ether ${mac}`
  })

  return {
    interfaces,
    external_interface: externalInterface
  }
}

module.exports = createContext
