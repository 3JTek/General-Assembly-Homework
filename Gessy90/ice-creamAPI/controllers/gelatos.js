const Gelato = require('../models/gelato')


function indexRoute(req,res){
  Gelato
    .find()
    .then(gelatos => res.json(gelatos))
}

function showRoute(req,res){
  Gelato
    .findById(req.params.id)
    .populate('extras')
    .then(gelato => res.json(gelato))
}



module.exports = {
  index: indexRoute,
  show: showRoute
}
