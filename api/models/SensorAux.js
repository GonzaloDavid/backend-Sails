module.exports = {
  
  datastore: 'mysql',

  attributes: {
    zone: {type: 'string', required: true},
    camera: {type: 'string', required: true},
    sensor: {type: 'string', required: true},
    value : {type: 'string', required: true},
    date : {type: 'string', required: true}
  },
};