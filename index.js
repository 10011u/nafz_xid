const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('vMqh2PQuP9', uuidlib.v4());
	}

module.exports = generateId
