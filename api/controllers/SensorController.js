/**
 * PulsacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//var led = require('Led');

module.exports = {

controller: function(req, res) {
  
  var sensorObject=req.body;
    var zone= sensorObject.zone
    var camera =sensorObject.camera;
    var sensor=sensorObject.sensor;
    var value= sensorObject.value;
    var date= sensorObject.date;

  const request = require('request');
  //console.log('sensor',req.body);
       const objetoRequest = {
      url: 'http://localhost:1337/sensorAux',
      form: {
     zone: req.body.zone,
     camera :req.body.camera,
     sensor:req.body.sensor,
     value: req.body.value,
     date :req.body.date
      }
    };
    request.post(objetoRequest)

    
     return res.send(req.body);
  },
  getdata: async function(req, res)
  {
    var parametros=req.allParams();
    console.log('req',req.allParams())
    var data= await SensorAux.find({ zone: parametros.zone,camera:parametros.camera,sensor: parametros.sensor})
    .sort('id DESC')
    .limit(1);
    return res.send(data);
  }
};
