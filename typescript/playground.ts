interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}
//weill be implemented somewhere
declare function getSmallPet(): Bird | Fish;

let pet = getSmallPet();

//Guard types to Type Narrow in typescript
//in - Checks if the property "swim"  exit in pet
if ("swim" in pet) {
  pet.swim();
} else {
  pet.fly();
}
