//intoducing the SportCar parent class
class SportCar{
    constructor(make, model, topSpeed){
        this.make = make;
        this.model = model;
        this.topSpeed = topSpeed;
    }

    //how these properties would be displayed
    displayDetails() {
        console.log(`SportsCar: ${this.make} ${this.model}, Top Speed: ${this.topSpeed} km/h`);
    }


    //the method use to calculate speed of car
    timeToTopSpeed(acceleration){
        return this.topSpeed / acceleration;
    }

    //the conversion to two decimal place
    convertToDecimal(speed){
        return speed .toFixed(2);
    }

}

//introducing our Child class
class LuxuryCar extends SportCar{
    constructor(make, model, topSpeed, color, luxuryFeatures){
        super(make, model, topSpeed, color, luxuryFeatures) 
            this.luxuryFeatures = luxuryFeatures;   
            this.color = color;
    }

    //the properties to display

    displayDetails() {
        console.log(`LuxuryCar: ${this.make} ${this.model}, Top Speed: ${this.topSpeed} km/h`);
        console.log(`Luxury Features: ${this.luxuryFeatures.join(', ')}, Color: ${this.color}`);
    }

    playAmbientLighting() {
        console.log(`${this.make} ${this.model} is playing ambient lighting to set the mood.`);
    }
}

//getting the new sportcar
const ferrari = new SportCar("Ferrari", "488 Spider", 330);
ferrari.displayDetails();
console.log(`Time to top speed: ${ferrari.convertToDecimal(ferrari.timeToTopSpeed(50))} seconds`);

//display the new sportcar
const rollsRoyce = new LuxuryCar("Rolls Royce", "Phantom", 250, "red", ["Massage Seats", "Rear Entertainment", "Ambient Lighting."]);
rollsRoyce.displayDetails();
console.log(`Time to top speed: ${rollsRoyce.convertToDecimal(rollsRoyce.timeToTopSpeed(30))} seconds`);
rollsRoyce.playAmbientLighting();