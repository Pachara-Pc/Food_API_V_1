const recommend = require('../node_modules/collaborative-filter/lib/cf_api.js')

const ratings = [
    [1, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 1],
  ];
  
  
  const result = recommend.cFilter(ratings, 2);
  console.log(result);