interface TakePhoto {
  cameraMode: string // cameraMode attribute to indicate the mode of the camera
  filter: string // filter attribute to apply a filter effect on the photo
  burst: number // burst attribute to indicate the number of photos taken at once
}

interface Story {
  createStory(): void // createStory method with no return (void)
}

// The class has to have all the attributes defined in the interface.
class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

// The class has to have all the attributes and methods defined in both interfaces.
class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public shorts: boolean // additional attribute shorts, this attribute isn't part of any interface
  ) {}

  createStory(): void {
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
