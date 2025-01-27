import { Frame } from "./Frame";
import { Image } from "./Image";

export class Icon implements Image {
    public content: string = ''
    loading = false

    constructor(readonly url: string) {}

    async load() {
        this.loading = true
        return new Promise(((resolve) => {
            setTimeout(() => {
                this.loading = false
                this.content = 'loaded image content'
                resolve(true)
            }, 2000)
        }))
    }

    paint(frame: Frame) {
        frame.paint({content: this.content} as Image)
    }
}
