const playerMakup = {
    init: function (healthPoints, attackPower, counterAttackPower) {
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
        return this;
    }
}

const player = {
    luke: Object.create(playerMakup).init(60, 4, 10),
    darkVader: Object.create(playerMakup).init(300, 4, 10),
    yoda: Object.create(playerMakup).init(230, 50, 10),
    attack: function(playerAttack, enemyAttack){
        $("#attack").on("click",function(){
            alert("I have attacked you!!!");
        });
    },

}

player.attack();








