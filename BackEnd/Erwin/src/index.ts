import { AppDataSource } from "./data-source"
import * as express from 'express';
import router from "./routes";

AppDataSource.initialize().then(async () => {
    const app = express();
    const port = 5000;

    app.use(express.json());
    app.use("/api", router)

    app.listen(port, () => {
        console.log(`server running on http://localhost:${port}`);
    })

}).catch(error => console.log(error))
