import { Frame } from "./Frame";

export interface Image {
    content: string;

    paint(frame: Frame): void
}
