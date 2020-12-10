import { Repository, getManager } from "typeorm";
import { RgbColor } from "./entities/RgbColor";

export async function onStartup(): Promise<void> {
    const repository: Repository<RgbColor> = getManager().getRepository(RgbColor);

    if (!await repository.findOne(1)) {
        const color = new RgbColor();
        color.id = 1;
        color.r = 0;
        color.g = 255;
        color.b = 0;
        color.max = 255;
        repository.save(color);
        console.info("created DB entry for color " + color.id);
    } else {
        console.info("color 1 already present in DB");
    }
}
