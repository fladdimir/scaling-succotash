import { Context } from "koa";
import { getManager, Repository } from "typeorm";
import { RgbColor } from "./entities/RgbColor";

export default class RgbColorController {

    public static async getOne(ctx: Context): Promise<void> {
        const repository: Repository<RgbColor> = getManager().getRepository(RgbColor);

        const id: number = +ctx.params.id || 0;
        const color: RgbColor = await repository.findOne(id);

        if (color) {
            ctx.status = 200;
            ctx.body = color;
        } else {
            ctx.status = 400;
            ctx.body = "The color " + id + " doesn't exist in the db";
        }
    }

    public static async put(ctx: Context): Promise<void> {
        const repository: Repository<RgbColor> = getManager().getRepository(RgbColor);

        const id = +ctx.params.id || 0;
        const body: RgbColor = ctx.request.body;

        const toSave: RgbColor = await (repository.findOne(id)) ?? new RgbColor();
        toSave.id = toSave.id !== 0 ? toSave.id : id;
        // (ugly error due to insert instead of update occuring when entity from db has e.g id "1" and saved entity has id 1...)
        toSave.r = body.r;
        toSave.g = body.g;
        toSave.b = body.b;
        toSave.max = body.max;

        const saved = await repository.save(toSave);
        ctx.status = 200;
        ctx.body = saved;
    }
}