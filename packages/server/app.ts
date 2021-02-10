import * as express from "express";

import {PORT} from "./constants";

const app = express();

app.get("/", async (_req: express.Request, res: express.Response) => res.send("Hello Coderio!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
