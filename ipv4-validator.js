function isValidIPv4(ipAddress) {
  const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  return ipv4Regex.test(ipAddress);
}

module.exports = isValidIPv4;
