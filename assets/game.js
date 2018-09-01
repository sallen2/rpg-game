const playerMakup = {
    init: function (healthPoints, attackPower, counterAttackPower) {
        this.healthPoints = healthPoints;
        this.attackPower = attackPower;
        this.counterAttackPower = counterAttackPower;
        return this;
    },
    playerName: ""
}

yoda.playerName = "Yoda";
luke.playerName = "Luke";
darkVader.playerName = "Dark Vader";
let luke = Object.create(playerMakup).init(60, 4, 10);
let darkVader = Object.create(playerMakup).init(300, 4, 10);
let yoda = Object.create(playerMakup).init(230, 4, 10);



