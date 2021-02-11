import * as express from "express";
import * as cors from "cors";

import {PORT} from "./constants";

const app = express();

app.use(cors());

app.get("/", async (_req: express.Request, res: express.Response) => res.send("Hello Coderio!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
