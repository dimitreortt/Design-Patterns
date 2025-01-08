export class Stereo {
    constructor() { }

    on() {
        console.log("Stereo is on");
    }
    
    off() {
        console.log("Stereo is off");
    }
    
    setCd() {
        console.log("Stereo is set to CD");
    }
    
    setDvd() {
        console.log("Stereo is set to DVD");
    }
    
    setRadio() {
        console.log("Stereo is set to Radio");
    }
    
    setVolume(volume: number) {
        console.log("Stereo is set to volume: " + volume);
    }
}
