//https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2
//https://www.npmjs.com/package/cross-fetch


const fetch = require('cross-fetch');



getPokemon = async (req,res) => {

    const id = req.params.id;
    
    let apiRes;
    
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      
        apiRes = await res.json();

        res.status(200).send({
            pokemon:{name : apiRes.data.name,
                height: apiRes.data.height,
                weight: apiRes.data.weight

            }
        })


    } catch (err) {
        res.status(err.apiRes.status).json({
            status: "Error",
            message:err.message
        });
    }
  }


  module.exports = getPokemon;