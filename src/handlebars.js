const Handlebars = require('handlebars')

// e.g. {{join address '.'}} (see templates/dhcpd.conf.hbs).
Handlebars.registerHelper('join', function (array, delimiter, options) {
  return array.join(delimiter)
})

module.exports = Handlebars
