import { Image } from "./Image";

export class Frame {
    constructor() { }

    paint(image: Image) {
        console.log('Frame drawing image: ', image.content)
    }
}
