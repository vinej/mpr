const axios = require('axios')
const root = "http://localhost:8000/api"
var count = 0;

module.exports = {
  get: function(obj, state) {
    axios.get(`${root}/${obj}`)
    .then(response => state.companies = response.data)
    .catch(error => {
      console.log(error);
    });
  },
  put: function(obj, state) {
    count = count + 1;
    state.companies  = [ { code:`${count}snc`} , { code:"cgi"}];
  }
}
