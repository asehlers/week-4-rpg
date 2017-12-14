var gameStarted=false;
var defender = false;
var attacker = "";
var characters = [];
var chosenDefender;
var chosenCharacter;
window.onload = function() {

  //  Click events are done for us:
  $("#pink").click(pinkSlime.slimeClicked);
  $("#puddle").click(puddleSlime.slimeClicked);
  $("#rad").click(radSlime.slimeClicked);
  $("#boom").click(boomSlime.slimeClicked);
};

function Slime(nameInput, healthInput, attackInput, counterAttackInput, imageInput){
	this.health = healthInput;
	this.attack = attackInput;
	this.counterAttack = counterAttackInput;
	this.totalAttack = 0;
	this.image = imageInput;
	this.name = nameInput;
	var self = this;

	this.initializeSlime = function(){
		console.log("initialize slime");
		var slimeImage = $("<img>");
		slimeImage.attr("src", self.image);
		slimeImage.attr("id", self.name);
		$("#availableCharacters").append(slimeImage);
	};

	this.slimeClicked = function(){
		if(!gameStarted){
			console.log("slimeclicked before game start");
			$("#yourCharacter").append($("#" + self.name));
			// $("#enemyCharacters").append($("#puddle"));
			gameStarted = true;
			console.log(characters.indexOf(self));
			characters.splice(characters.indexOf(self), 1);
			chosenCharacter = self;
			for(var i = 0; i < characters.length; i++){
				console.log("enemy" + characters[i].name);
				characters[i].makeEnemy();
			}
		}
		else if(!defender){
				console.log("slime clicked to select enemy");
				$("#currentDefender").append($("#" + self.name));
				defender = true;
				chosenDefender = self;
		}
	};

	this.makeEnemy = function(){
		// console.log("enemy make");
		$("#enemyCharacters").append($("#" + self.name));
	};

	this.attackEnemy = function(enemySlime){
		self.totalAttack += self.attack;
		enemySlime.health -= self.totalAttack;
		self.health -= enemySlime.counterAttack;
		console.log("health: " + self.health + "   attack: " + self.totalAttack);
		console.log("enemy health: "  + enemySlime.health);
		if(enemySlime.health <= 0){
			defender = false;
			$("#"+enemySlime.name).remove();
		}
		if(self.health <= 0){
			console.log("you lost");
		}
	};
}

// var pinkSlime = {
// 	health: 200,
// 	attack: 5,
// 	counterAttack: 10,
// 	totalAttack: 0,
// 	image: "assets/images/pinkSlime.jpg",

// 	initializeSlime: function(){
// 		console.log("initialize pink");
// 		var pinkImage = $("<img>");
// 		pinkImage.attr("src", pinkSlime.image);
// 		pinkImage.attr("id", "pink");
// 		$("#availableCharacters").append(pinkImage);
// 	},

// 	slimeClicked: function(){
// 		if(!gameStarted){
// 			console.log("slimeclicked before game start");
// 			$("#yourCharacter").append($("#pink"));
// 			$("#enemyCharacters").append($("#puddle"));
// 			gameStarted = true;
// 			attacker = "pink";
// 		}
// 		else if(!defender){
// 				console.log("slime clicked to select enemy");
// 				$("#currentDefender").append($("#pink"));
// 				defender = "pink";
// 		}
// 	},



// }

// var puddleSlime = {
// 	health: 180,
// 	attack: 7,
// 	counterAttack: 15,
// 	totalAttack: 0,
// 	image: "assets/images/puddleSlime.jpg",

// 	initializeSlime: function(){
// 		console.log("initialize puddle");
// 		var puddleImage = $("<img>");
// 		puddleImage.attr("src", puddleSlime.image);
// 		puddleImage.attr("id", "puddle");
// 		$("#availableCharacters").append(puddleImage);
// 	},

// 	slimeClicked: function(){
// 		if(!gameStarted){
// 			console.log("slime clicked before game start");
// 			$("#yourCharacter").append($("#puddle"));
// 			$("#enemyCharacters").append($("#pink"));
// 			gameStarted = true;
// 		}
// 		else{
// 			if(!defender){
// 				console.log("slime clicked to select enemy");
// 				$("#currentDefender").append($("#puddle"));
// 				defender = true;
// 			}
// 		}
// 	}
// }

// var characters = {pink:pinkSlime, puddle:puddleSlime};


	// attackEnemy: function(enemy){
	// 	pinkSlime.totalAttack += pinkSlime.attack;
	// 	enemy.health -= pinkSlime.totalAttack;
	// 	pinkSlime.health -= enemy.counterAttack;
	// 	console.log("Pink slime Health/attack: " + pinkSlime.health + " " + pinkSlime.totalAttack);
	// 	console.log("enemy health " + enemy.health);
	// }

	
// var characters = {"pink":};
$("#attackButton").on("click", function(){
	console.log("attack button pressed");
	if(gameStarted && defender){
		console.log("fight is on");
		chosenCharacter.attackEnemy(chosenDefender);

		// console.log($("#yourCharacter:nth-child(2)"))
		// if($("#yourCharacter:nth-child(2)").attr("id") === "pink"){
		// 	conosle.log("pink attacker");
		// 	if($("#currentDefender:nth-child(2)").attr("id") === "puddle"){
		// 		console.log("puddle defender");
		// 		pinkSlime.attackEnemy(puddleSlime);
		// 	}
		// }
	}
});

console.log("pre initialize");
var pinkSlime = new Slime("pink", 200, 5, 8, "assets/images/pinkSlime.jpg");
pinkSlime.initializeSlime();
characters.push(pinkSlime);

var puddleSlime = new Slime("puddle", 180, 7, 10, "assets/images/puddleSlime.jpg");
puddleSlime.initializeSlime();
characters.push(puddleSlime);

var radSlime = new Slime("rad", 150, 10, 20, "assets/images/radSlime.jpg");
radSlime.initializeSlime();
characters.push(radSlime);

var boomSlime = new Slime("boom", 120, 16, 25, "assets/images/boomSlime.jpg");
boomSlime.initializeSlime();
characters.push(boomSlime);

console.log(characters);