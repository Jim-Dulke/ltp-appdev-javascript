var player = function (name, livesLeft, score, speed, gridLocationX, gridLocationY) {
                
                this.name = name;
                this.livesLeft = 3;
                this.score = 0; 
                this.speed = 0;
                this.gridLocationX = 0;
                this.gridLocationY = 0;
}

player.prototype.moveUp = function () { 
    if (gridLocationY > 9) {
console.log("You have died. Lives Left: " + (this.livesLeft - 1));
}
else { 
    console.log("Your current position is " + this.gridLocationX + ", " + (this.gridLocationY + 1));          
        }
    },               
    
    player.prototype.moveDown = function () {
    if (gridLocationY < 0) {
        console.log("You have died. Lives Left: " + this.livesLeft - 1);
    }
    else {
        console.log("Your current position is " + this.gridLocationX + ", " + (this.gridLocationY - 1));
}
    },

player.prototype.moveLeft = function () {
    if(gridLocationX < 0) {
        console.log("You have died. Lives Left: " + (this.livesLeft - 1));
    }
        else {
            console.log("Your current position is " + (this.gridLocationX -1) + ", " + this.gridLocationY);
        }
},

player.prototype.moveRight = function () {
    if (gridLocationX > 9) {
        console.log("You have died. Lives Left: " + (this.livesLeft - 1));
    }
        else {
        console.log("Your current position is " + gridLocationX + ", " + gridLocationY);
    }
},

player.prototype.die = function () {
    console.log("You have died. Lives Left: " + (this.livesLeft - 1));
    if (livesLeft = 0) {
        alert("GAME OVER!");
    }
}