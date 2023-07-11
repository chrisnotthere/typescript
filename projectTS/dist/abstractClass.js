"use strict";
// Abstract classes cannot be instantiated directly but can serve as base classes.
class testTakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // This method is automatically available in child classes, but can be overridden if needed.
    getReelTime() {
        return 15;
    }
}
// Uncommenting the following line would cause a TypeScript error.
// This is because you can't create an instance of an abstract class.
// const smith = new testTakePhoto('portrait', 'vivid');
class testInstagram extends testTakePhoto {
    constructor(cameraMode, filter, burst // This is an extra property not in the testTakePhoto class
    ) {
        // super() calls the constructor of the parent class, 
        // which in this case is testTakePhoto. It must be called before using 'this'.
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // Implementation of the abstract method createStory in the subclass.
    createStory() {
        console.log('Creating story');
    }
    // Overriding the getReelTime method from the parent class.
    getReelTime() {
        return 30;
    }
}
const smith = new testInstagram('portrait', 'vivid', 3);
console.log(smith.getReelTime()); // Prints: 30
smith.createStory(); // Prints: Creating story
