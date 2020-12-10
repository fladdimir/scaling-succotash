
import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class RgbColor {

    @PrimaryColumn()
    id: number; // java long -> int8 in postgres -> will return as string

    @Column()
    r: number;

    @Column()
    g: number;

    @Column()
    b: number;

    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Column()
    max: number = 255;
}

export const rgbColorSchema = {
    id: { type: "number", required: true, example: 1 },
    r: { type: "number", required: true, example: 0 },
    g: { type: "number", required: true, example: 0 },
    b: { type: "number", required: true, example: 0 },
    max: { type: "number", required: true, example: 255 },
};