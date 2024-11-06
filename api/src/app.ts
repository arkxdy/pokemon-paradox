import { Application, Request, Response } from "express"
import { compression, cookieParser, cors, express } from "./core/modules";
import apiVersionRouting from "./application/routes/APIVersionRouting";

const errorHandler = require('./application/middleware/errorHandler')

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
app.use('/api/v1', apiVersionRouting)

app.use(errorHandler.notFound)
module.exports = app;