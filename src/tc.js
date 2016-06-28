function createContext(profiles) {
  const classes = profiles.map((profile, i) => {
    const { bandwidth, round_trip_time } = profile

    return {
      parent: `1:1`,
      id: `1:${(i + 1) * 10}`, // e.g. 1:10
      bandwidth,

      round_trip_time,
      round_trip_time_correlation: (0.1 * round_trip_time).toFixed(1) // e.g. 5.3
    }
  });
  const filters = classes.map((klass, i) => {
    return {
      fwmark: i + 1,
      classID: `${klass.id}`
    }
  });

  return {
    interfaces: {
      egress: 'eth0',
      ingress: 'wlan0'
    },
    classes,
    filters
  }
}

module.exports = createContext
