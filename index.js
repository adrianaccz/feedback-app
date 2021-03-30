const app = require('./app');
require('./config/db');
// require('./models/User');

app.listen(4000, () => console.log('Servidor Levantado en el puerto 4000'));



