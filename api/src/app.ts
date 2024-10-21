import { Application, Request, Response } from "express"
import { compression, cookieParser, cors, express } from "./core/modules";
import { authToken } from "./application/middleware/authMiddleware";
import { CustomRequest } from "./core/types";

const authRoute = require('./application/routes/AuthRoute');
const playerRoute = require('./application/routes/PlayerRoute');

const app: Application = express();
app.use(
    cors({
        origin: true,
        credentials: true
    })
)

app.get('/', (_req: Request, res: Response): Response => {
    return res.status(200).json("Server is running")
})
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(compression())
//add routes
app.use('/api/v1', authRoute);
app.use('/api/v1', authToken);
app.use('/api/v1', playerRoute)
app.get('/api/v1/d', (req:CustomRequest, res: Response): Response => {
    console.log(req.username); 
    return res.status(200).json("Success")
})
module.exports = app;