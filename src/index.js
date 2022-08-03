const { app } = require('./server')

// init server
app.listen(app.get('port'), () => console.log(`Server running on port http://localhost:${app.get('port')}`))
