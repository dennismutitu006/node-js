const birds = require('./birds')

app.use('/birds', birds)
// the app will now be able to handle requests to /birds and /birds/about
//as well as call the timeLog middleware func that is specific to the route
