import cors from "@koa/cors";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import Router from "koa-router";
import { createConnection } from "typeorm";
import { onStartup } from "./onStartup";
import RgbColorController from "./RgbColorController";

const isDevMode = process.env.NODE_ENV == "development";
console.log("dev-mode: " + isDevMode);

const app = new Koa();
const router = new Router();

router.get("/hola", async (ctx) => {
    ctx.body = { msg: "Hello World!" };
});

router.get("/rgbColors/:id", RgbColorController.getOne);
router.put("/rgbColors/:id", RgbColorController.put);

app.use(cors());
app.use(logger());
app.use(bodyParser());

app.use(router.routes());

app.listen(8080);
console.log("Server running on 8080");


createConnection({
    type: "postgres",
    url: "postgres://postgres:postgres@localhost:5432/postgres",
    synchronize: true, // auto-create schema on startup, 'true' causes crash on existing table...
    logging: true,
    entities: [
        ...isDevMode ? ["src/entities/**/*.ts"] : ["dist/entities/**/*.js"],
    ],
}).then(() => {
    console.info("typeorm connected");
    onStartup();
});
