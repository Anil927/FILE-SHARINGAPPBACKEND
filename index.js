import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import DBconnection from "./database/db.js";

import { config } from 'dotenv';

// Load the environment variables from the .env file
config();

const app = express();

app.use(cors());
app.use("/",router);

DBconnection();

app.listen(process.env.PORT || 8000, () => console.log("server is running at port 8000"));