var configValues = require('./config');

//imported uname and pwd from config to be used to get our mongodb connection
//normally we would have encrypted this info,
module.exports = {
  getDbConnectionString: function () {
    return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds125113.mlab.com:25113/nodetodosample';
  },
};
