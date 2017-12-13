var gameStarted=false;
var defender=false;

window.onload = function() {

  //  Click events are done for us:
  $("#pink").click(pinkSlime.slimeClicked);
  $("#puddle").click(puddleSlime.slimeClicked);;
  // $("#radSlime").click();
  // $("#boomSlime").click();

};

var pinkSlime = {
	health: 200,
	attack: 5,
	counterAttack: 10,
	totalAttack: 0,
	image: "assets/images/pinkSlime.jpg",

	initializeSlime: function(){
		console.log("initialize pink");
		var pinkImage = $("<img>");
		pinkImage.attr("src", pinkSlime.image);
		pinkImage.attr("id", "pink");
		$("#availableCharacters").append(pinkImage);
	},

	slimeClicked: function(){
		if(!gameStarted){
			console.log("slimeclicked before game start");
			$("#yourCharacter").append($("#pink"));
			$("#enemyCharacters").append($("#puddle"));
			gameStarted = true;
		}
		else if(!defender){
				console.log("slime clicked to select enemy");
				$("#currentDefender").append($("#pink"));
				defender = true;
		}
	},
	attackEnemy: function(enemy){
		pinkSlime.totalAttack += pinkSlime.attack;
		enemy.health -= pinkSlime.totalAttack;
		pinkSlime.health -= enemy.counterAttack;
		console.log("Pink slime Health/attack: " + pinkSlime.health + " " + pinkSlime.totalAttack);
		console.log("enemy health " + enemy.health);
	}

}

var puddleSlime = {
	health: 180,
	attack: 7,
	counterAttack: 15,
	totalAttack: 0,
	image: "assets/images/puddleSlime.jpg",

	initializeSlime: function(){
		console.log("initialize puddle");
		var puddleImage = $("<img>");
		puddleImage.attr("src", puddleSlime.image);
		puddleImage.attr("id", "puddle");
		$("#availableCharacters").append(puddleImage);
	},

	slimeClicked: function(){
		if(!gameStarted){
			console.log("slime clicked before game start");
			$("#yourCharacter").append($("#puddle"));
			$("#enemyCharacters").append($("#pink"));
			gameStarted = true;
		}
		else{
			if(!defender){
				console.log("slime clicked to select enemy");
				$("#currentDefender").append($("#puddle"));
				defender = true;
			}
		}
	}
}

var charactesr = {pink:pinkSlime, puddle:puddleSlime};

// var characters = {"pink":};
$("#attackButton").on("click", function(){
	console.log("attack button pressed");
	if(gameStarted && defender){
		console.log("fight is on");
		console.log($("#yourCharacter:nth-child(2)"))
		if($("#yourCharacter:nth-child(2)").attr("id") === "pink"){
			conosle.log("pink attacker");
			if($("#currentDefender:nth-child(2)").attr("id") === "puddle"){
				console.log("puddle defender");
				pinkSlime.attackEnemy(puddleSlime);
			}
		}
	}
});

console.log("pre initialize");
pinkSlime.initializeSlime();
puddleSlime.initializeSlime();

