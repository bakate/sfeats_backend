const axios = require('axios');

module.exports = async address => {
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=AIzaSyDRUihPvIywfsjtQuuRTdwYzcqRXMzEMqI`
  );
  console.log(data);
  if (!data || data.status === 'ZERO_RESULTS') {
    throw "Could not find any location for the indicated address"
  }
  const coordinates = data.results[0].geometry.location;
  return coordinates;
};
