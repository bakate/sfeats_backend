'use strict';
const getCoordsForAddress = require('../../server/utils');

module.exports = function(Restaurant) {
 Restaurant.beforeRemote('create',   async function(context, instance, next) {
   let coordinates
  try {
      coordinates = await getCoordsForAddress(context.req.body.address);
   } catch (err) {
     console.log(err)
   }
    context.args.data.location = coordinates;

      //  context.args.data.address = await formatted_address
      next();
    }
   );



};
