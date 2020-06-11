import Server from "./classes/server";
import ROUTER from "./routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const SERVER = Server.instance;

// Body Parser
SERVER.app.use(bodyParser.urlencoded({extended: true}));
SERVER.app.use(bodyParser.json());

// CORS
SERVER.app.use(cors({origin: true, credentials: true}))

// Rutas de servicios
SERVER.app.use('/', ROUTER)

SERVER.start(() => {
    console.log(`Servidor corriendo en el puerto ${SERVER.port}`)
});