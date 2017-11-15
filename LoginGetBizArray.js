var Yelp = require('yelpv3');

var yelp = new Yelp({
  app_id: 'fUzxW_17GY1tDUv-y4KkeQ',
  app_secret: 's0oShPo6wnabFlaBAGgJ36tK3Wg5IIXI9GNImwhnSCAIkyDqauvU7s5f78AIrEPd'
});

// https://www.yelp.com/developers/documentation/v3/business_search_phone
yelp.phoneSearch({phone: '+14159083801'})
.then(function (data) { console.log(data); })
.catch(function (err) { console.error(err);});