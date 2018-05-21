function createContext(profiles, internalInterface, externalInterface) {
  const egressClasses = profiles.map((profile, i) => {
    const { bandwidth, round_trip_time } = profile

    return {
      parent: `1:1`,
      id: `1:${(i + 1) * 10}`, // e.g. 1:10
      bandwidth,

      round_trip_time,
      round_trip_time_correlation: (0.1 * round_trip_time).toFixed(1) // e.g. 5.3
    }
  });
  const egressFilters = egressClasses.map((klass, i) => {
    return {
      fwmark: i + 1,
      classID: `${klass.id}`
    }
  });
  const ingressQdiscs = profiles.map((profile, i) => {
    const bandwidth = profile.bandwidth.download

    return {
      interface: `${internalInterface}_${i}`, // e.g. wlan0_0
      bandwidth,

      // LARTC recommends a burst of 1 kbyte for a 1 mbit/s rate [0]. N.B. that the burst tbf
      // parameter is specified in bytes.
      //
      // [0]: http://lartc.org/howto/lartc.qdisc.classless.html#AEN710
      burst: bandwidth * 1000 // e.g. 5300
    }
  })

  return {
    external_interface: externalInterface,
    egress_classes: egressClasses,
    egress_filters: egressFilters,
    ingress_qdiscs: ingressQdiscs
  }
}

module.exports = createContext
