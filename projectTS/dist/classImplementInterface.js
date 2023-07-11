"use strict";
// The class has to have all the attributes defined in the interface.
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// The class has to have all the attributes and methods defined in both interfaces.
class Youtube {
    constructor(cameraMode, filter, burst, shorts // additional attribute shorts, this attribute isn't part of any interface
    ) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shorts = shorts;
    }
    createStory() {
        console.log('Creating story');
    }
}
let myInstagram = new Instagram("Portrait", "Monochrome", 3);
// Prints: Instagram { cameraMode: 'Portrait', filter: 'Monochrome', burst: 3 }
console.log(myInstagram);
let myYoutube = new Youtube("Landscape", "Vivid", 5, true);
// Prints: Youtube { cameraMode: 'Landscape', filter: 'Vivid', burst: 5, shorts: true }
console.log(myYoutube);
myYoutube.createStory(); // Prints: Creating story
