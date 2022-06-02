const userRoutes = (app, fs) => {
	// variables
	const dataPath = './data/users.json';
  
	//  defining an endpoint returning my name and 
    // the url from which the query is made
	app.get('/users', (req, res) => {
	  fs.readFile(dataPath, 'utf8', (err, data) => {
		if (err) {
		  throw err;
		}
       res.send(JSON.parse(data));
	  });
	});
  };

  
  module.exports = userRoutes;