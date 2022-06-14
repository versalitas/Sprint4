//https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
//https://www.npmjs.com/package/cross-fetch
//https://pokeapi.co/docs/v2


const fetch = require('cross-fetch');

const getPokemon = async (req,res) => {

    try {

      const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${req.params.id}/`);
      if (api.status >= 400) {
        throw new Error("Bad response from server");
      }  
        const poke = await api.json();


        res.status(200).send({
            pokemon: {name : poke.name,
                height: poke.height,
                weight: poke.weight

            }
        })


    } catch (err) {
        res.status(err.api.status).json({
            status: "Error",
            message: err.message
        });
    }
  }


  module.exports = getPokemon;