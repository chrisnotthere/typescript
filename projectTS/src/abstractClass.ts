// Abstract classes cannot be instantiated directly but can serve as base classes.
abstract class testTakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  // When a class includes an abstract method, it must be implemented in any non-abstract child class.
  abstract createStory(): void;

  // This method is automatically available in child classes, but can be overridden if needed.
  getReelTime(): number {
    return 15;
  }
}

// Uncommenting the following line would cause a TypeScript error.
// This is because you can't create an instance of an abstract class.
// const smith = new testTakePhoto('portrait', 'vivid');

class testInstagram extends testTakePhoto {
  constructor(
    public cameraMode: string, 
    public filter: string,
    public burst: number // This is an extra property not in the testTakePhoto class
  ) {
    // super() calls the constructor of the parent class, 
    // which in this case is testTakePhoto. It must be called before using 'this'.
    super(cameraMode, filter);
  }

  // Implementation of the abstract method createStory in the subclass.
  createStory(): void {
    console.log('Creating story');
  }

  // Overriding the getReelTime method from the parent class.
  getReelTime(): number {
    return 30;
  }
}

const smith = new testInstagram('portrait', 'vivid', 3);
console.log(smith.getReelTime()); // Prints: 30

smith.createStory(); // Prints: Creating story
