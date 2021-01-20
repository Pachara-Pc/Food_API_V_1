const recommend = require('../node_modules/collaborative-filter/lib/cf_api.js')


  
  const result = (rating,x) => recommend.cFilter(rating, x) ;

  module.exports ={
    result
  };
