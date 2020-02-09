class Vehicle {
     constructor(color, direction, currentSpeed, topSpeed, engineStarted) {
        this._color = color;
        this._direction = direction;
        this._currentSpeed = currentSpeed;
        this._topSpeed = topSpeed;
        this._engineStarted = true;
    }
            
            turnOn() { 
            this._engineStarted = true;
            let turnOn = console.log(`STATUS: ON`);
            return turnOn;
    }
            turnOff() {
            if(this._currentSpeed > 0) {
                                        let turnOff = console.log(`Your speed is ${this._currentSpeed} miles per hour. You cannot turn off your vehicle.`);
                                        return turnOff;
                                    }
                else {
                        this._engineStarted = false;
                        let turnOff = console.log(`STATUS: OFF`);
                        return turnOff;
                }
        }
            

            accelerate() {    
            if (this._engineStarted) {
                                        if (this._currentSpeed < this._topSpeed) {
                                        this._currentSpeed += 10;
                                        let accelerate = console.log(`SPEED: ${this._currentSpeed}`);
                                        return accelerate;
                                        }
            
                
                                        if(this._currentSpeed = this._topSpeed) {
                                        this._currentSpeed += 0;
                                        let max = console.log(`MAX SPEED REACHED`);
                                        return max;
                                        }
        }
            }

            brake() {
                        if (this._currentSpeed > 0) {
                        this._currentSpeed -= 10;
                        let brake = console.log(`SPEED: ${this._currentSpeed}`);
                        return brake;
                        }           
    }

            turnLeft() {
            if (this._engineStarted) {
                            if (this._direction >=15 && this._direction <= 345) {
                            this._direction -= 15;
                            let turnLeft = console.log(`BEARING: ${this._direction} degrees`);
                            return turnLeft;
                        }
                        
                            if (this._direction = 359) {
                            this._direction -= 14;
                            let turnLeft = console.log(`BEARING: ${this._direction} degrees`);
                            return turnLeft;
                        } 
        }
    }

            turnRight () {
                            if (this._engineStarted) {
                                if (this._direction >= 0 && this._direction < 345) {
                                                            this._direction += 15;
                                                            let turnRight = console.log(`BEARING: ${this._direction}`);
                                                            return turnRight;
                                                }

                                                if (this._direction = 345) {
                                                                this._direction += 14;
                                                                let turnRight = console.log(`BEARING: ${this._direction}`);
                                                                return turnRight;
                                                }

                                                if (this._direction = 359) {

                                                                this._direction += 0;
                                                                let turnRight = console.log(`BEARING: ${this._direction}`);
                                                                return turnRight;
                                                                }
                                }
            }
}

class bus extends Vehicle {
    constructor(color, direction, currentSpeed, topSpeed, engineStarted, numberofSeats) {
    super(color, direction, currentSpeed, topSpeed, engineStarted);
        this._numberofSeats = numberofSeats;
    }
    
    info() {
                let info = console.log(`${this._color} bus w/capacity of ${this._numberofSeats}`);
                return info;
    }
    turnOn() { 
            this._engineStarted = true;
            let turnOn = console.log(`STATUS: ON`);
            return turnOn;
    }
    
    turnOff() {
                if(this._currentSpeed > 0) {
                    let turnOff = console.log(`Your speed is ${this._currentSpeed} miles per hour. You cannot turn off your vehicle.`);
                    return turnOff;
                }
                else {
                this._engineStarted = false;
                let turnOff = console.log(`STATUS: OFF`);
                return turnOff;
            }
    }
    

    accelerate() {
                if(this._engineStarted) {       
                if (this._currentSpeed < this._topSpeed) {
                this._currentSpeed += 10;
                let accelerate = console.log(`SPEED: ${this._currentSpeed}`);
                return accelerate;
                }
            
            if(this._currentSpeed = this._topSpeed) {
            this._currentSpeed += 0;
            let max = console.log(`MAX SPEED REACHED`);
            return max;
            }
                }
    }
    
    
    brake() {
        if (this._currentSpeed > 0) {
            this._currentSpeed -= 10;
            let brake = console.log(`SPEED: ${this._currentSpeed}`);
            return brake;
        }
    }

    turnLeft() {
                
                    if (this._engineStarted) {
                       
                        if (this._direction >=15 && this._direction <= 345) {
                            this._direction -= 15;
                            let turnLeft = console.log(`BEARING: ${this._direction}`);
                            return turnLeft;
                        }
                        
                        if (this._direction = 359) {
                            this._direction -= 14;
                            let turnLeft = console.log(`BEARING: ${this._direction}`);
                            return turnLeft;
                        } 
    }
    }

turnRight () {
                    if (this._engineStarted) {
                                if (this._direction >= 0 && this._direction < 345 ) {
                                                            this._direction += 15;
                                                            let turnRight = console.log(`BEARING: ${this._direction}`);
                                                            return turnRight;
                                                }

                                                if (this._direction = 345) {
                                                                this._direction += 14;
                                                                let turnRight = console.log(`BEARING: ${this._direction}`);
                                                                return turnRight;

                                                }

                                                if (this._direction = 359) {

                                                                this._direction -= 344;
                                                                let turnRight = console.log(`BEARING: ${this._direction}`);
                                                                return turnRight;
                                                }
                    }
}

set numberofSeats(cap) {
    if(cap < 60) {
        this._numberofSeats = cap;
    }
    else {
        console.log("TOO MANY SEATS ON THE BUS. START KICKING PEOPLE OFF.");
    }
}
}

class ambulance extends Vehicle {
    constructor(color, direction, currentSpeed, topSpeed, engineStarted, sirens) {
        super(color, direction, currentSpeed, topSpeed, engineStarted);
        this._sirens = true;
    }

    sirensOn() {
        if(this._engineStarted) {
            let sirensOn = console.log("THE SIRENS ARE ON.");
            return sirensOn;
        }
    }
    
    sirensOff() {
        this._sirens = false;
        let sirensOff = console.log("THE SIRENS ARE OFF.");
        return sirensOff;
    }
    
    turnOn() { 
            this._engineStarted = true;
            let turnOn = console.log(`STATUS: ON`);
            return turnOn;
    }
    
    turnOff() {
                if(this._currentSpeed > 0) {
                    let turnOff = console.log(`Your speed is ${this._currentSpeed} miles per hour. You cannot turn off your vehicle.`);
                    return turnOff;
                }
                else {
                this._engineStarted = false;
                let turnOff = console.log(`STATUS: OFF`);
                return turnOff;
            }
    }
    

    accelerate() {
                if(this._engineStarted) {       
                if (this._currentSpeed < this._topSpeed) {
                this._currentSpeed += 10;
                let accelerate = console.log(`SPEED: ${this._currentSpeed}`);
                return accelerate;
                }
            
            if(this._currentSpeed = this._topSpeed) {
            this._currentSpeed += 0;
            let max = console.log(`MAX SPEED REACHED`);
            return max;
            }
            
        }
    }
    
    brake() {
        if (this._currentSpeed > 0) {
            this._currentSpeed -= 10;
            let brake = console.log(`SPEED: ${this._currentSpeed}`);
            return brake;
        }
    }

    turnLeft() {
                
                    if (this._engineStarted) {
                       
                        if (this._direction >=15 && this._direction <= 345) {
                            this._direction -= 15;
                            let turnLeft = console.log(`BEARING: ${this._direction}`);
                            return turnLeft;
                        }
                        
                        if (this._direction = 359) {
                            this._direction -= 14;
                            let turnLeft = console.log(`BEARING: ${this._direction}`);
                            return turnLeft;
                        } 
    }
    }

turnRight () {
if (this._engineStarted) {
                                if (this._direction >= 0 && this._direction < 345 ) {
                                                            this._direction += 15;
                                                            let turnRight = console.log(`BEARING: ${this._direction}`);
                                                            return turnRight;
                                                }

                                                if (this._direction = 345) {
                                                                this._direction += 14;
                                                                let turnRight = console.log(`BEARING: ${this._direction}`);
                                                                return turnRight;

                                                }

                                                if (this._direction = 359) {

                                                                this._direction -= 344;
                                                                let turnRight = console.log(`BEARING: ${this._direction}`);
                                                                return turnRight;
                                                }
                    }
}
}