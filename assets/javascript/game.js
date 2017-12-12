var gameStarted=false;
var defender=false;

window.onload = function() {

  //  Click events are done for us:
  $("#pinkSlime").click(pinkSlime.slimeClicked);
  // $("#puddleSlime").click();
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
			$("#yourCharacter").append($("#pink"));
		}
	}
	// attackEnemy: function(enemy){
	// 	this.totalAttack += attack;
	// 	enemy.health -= this.totalAttack;
	// }
}

console.log("pre initialize");
pinkSlime.initializeSlime();