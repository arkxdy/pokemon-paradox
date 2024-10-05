import { Application, Request, Response } from "express"
import { compression, cookieParser, cors, express } from "./core/modules";

const authRoute = require('./application/routes/AuthRoute');

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
app.use('/auth', authRoute);
module.exports = app;