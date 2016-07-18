module.exports = function(express){
  var pokeRoute = express.Router();
  pokeRoute.route('/pokemon')
  .get(function(req, res));
}
