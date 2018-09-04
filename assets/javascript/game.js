let hP = 0;
let aP = 0;
let cA = 0;
let eHP = 0;
let eAP = 0;
let eCA = 0;
let characterName = '';
let eCharacterName = '';
let ePlayerDiv = '';
let eTest = '';
let eHealthPoints = '';
let eMyPlayerImg = '';
let eName = '';
let myEHp = '';
let dbzArr = [
    {
        image: "/assets/images/cellLitCell.gif",
        name: "Cell",
        healthPoints: 500,
        attackPower: 30,
        counterAttack: 20
    },
    {
        image: "/assets/images/frieza.gif",
        name: "Frieza",
        healthPoints: 1250,
        attackPower: 20,
        counterAttack: 15
    },
    {
        image: "/assets/images/goku.gif",
        name: "Goku",
        healthPoints: 10080,
        attackPower: 25,
        counterAttack: 20
    },
    {
        image: "/assets/images/vegeta.gif",
        name: "Vegeta",
        healthPoints: 9000,
        attackPower: 28,
        counterAttack: 23
    },
];
function update() {
    for (let i = 0; i < dbzArr.length; i++) {
        console.log('in update ' + dbzArr);
        let characters = $('<div>');
        let test = $('<div>');
        let healthPoints = $('<div>');
        let image = $('<img>');
        let name = $('<h4>');
        let hp = $('<h4>');
        name.text(dbzArr[i].name);
        hp.text(dbzArr[i].healthPoints + ' hp');
        characters.addClass('moveText2');
        test.addClass('nameEnemy');
        healthPoints.addClass('enemyHp');
        image.addClass('container_enemy');
        image.attr({
            src: dbzArr[i].image,
            name: dbzArr[i].name,
            healthPoints: dbzArr[i].healthPoints,
            attackPower: dbzArr[i].attackPower,
            counterAttack: dbzArr[i].counterAttack
        });
        test.prepend(name);
        healthPoints.prepend(hp);
        characters.prepend(healthPoints);
        characters.prepend(image);
        characters.prepend(test);
        $('#enemy').append(characters);
    }
}
function setUp() {
    for (let i = 0; i < dbzArr.length; i++) {
        let characters = $('<div>');
        let test = $('<div>');
        let healthPoints = $('<div>');
        let image = $('<img>');
        let name = $('<h4>');
        let hp = $('<h4>');
        name.text(dbzArr[i].name);
        hp.text(dbzArr[i].healthPoints + ' hp');
        characters.addClass('moveText');
        test.addClass('name');
        healthPoints.addClass('hpStyle');
        image.addClass('container_img');
        image.attr({
            src: dbzArr[i].image,
            name: dbzArr[i].name,
            healthPoints: dbzArr[i].healthPoints,
            attackPower: dbzArr[i].attackPower,
            counterAttack: dbzArr[i].counterAttack
        });
        test.prepend(name);
        healthPoints.prepend(hp);
        characters.prepend(healthPoints);
        characters.prepend(image);
        characters.prepend(test);
        $('.container').append(characters);
    }
}

$(document).ready(function () {
    setUp();
    $('.restart').hide();
    $('.container_img').on('click', function () {
        let myPlayerDiv = $('<div>');
        let test = $('<div>');
        let healthPoints = $('<div>');
        let myPlayerImg = $('<img>');
        let name = $('<h4>');
        let hp = $('<h4>');
        hp.addClass('update');
        myPlayerDiv.addClass('moveText1');
        test.addClass('name');
        healthPoints.addClass('hpStyle');
        myPlayerImg.addClass('container_img');
        characterName = $(this).attr('name');
        name.text(characterName);
        let characterHp = $(this).attr('healthPoints');
        hP = characterHp;
        aP = parseInt($(this).attr('attackPower'));
        cA = $(this).attr('counterAttack');
        hp.text(characterHp + ' hp');
        let src = $(this).attr('src');
        index = dbzArr.findIndex(x => x.image == src);
        dbzArr.splice(index, 1);
        console.log(dbzArr);
        myPlayerImg.attr('src', src);
        test.prepend(name);
        healthPoints.prepend(hp);
        myPlayerDiv.prepend(myPlayerImg);
        myPlayerDiv.prepend(test);
        myPlayerDiv.prepend(healthPoints);
        $('#myCharacter').append(myPlayerDiv);
        $('.container').addClass('height');
        $('.moveText').remove();
        update();
    });
    $(document).on('click', '.container_enemy', function () {
        $('.container_enemy').hide();
        $('.enemyHp').hide();
        $('.nameEnemy').hide();
        ePlayerDiv = $('<div>');
        etest = $('<div>');
        ehealthPoints = $('<div>');
        emyPlayerImg = $('<img>');
        ename = $('<h4>');
        myEHp = $('<h4>');
        myEHp.addClass('eUpdate');
        ePlayerDiv.addClass('moveText2');
        etest.addClass('nameEnemy');
        ehealthPoints.addClass('enemyHp');
        emyPlayerImg.addClass('container_enemy');
        let characterName = $(this).attr('name');
        eCharacterName = characterName;
        ename.text(characterName);
        let characterHp = $(this).attr('healthPoints');
        eHP = characterHp;
        eAP = $(this).attr('attackPower');
        eCA = $(this).attr('counterAttack');
        myEHp.text(characterHp + ' hp');
        let src = $(this).attr('src');
        index = dbzArr.findIndex(x => x.image == src);
        dbzArr.splice(index, 1);
        console.log(dbzArr);
        emyPlayerImg.attr('src', src);
        etest.prepend(ename);
        ehealthPoints.prepend(myEHp);
        ePlayerDiv.prepend(emyPlayerImg);
        ePlayerDiv.prepend(etest);
        ePlayerDiv.prepend(ehealthPoints);
        $('#enemyCharacter').append(ePlayerDiv);
        $('#actionResponse').hide();
        update();
    });

    $('.attack').on('click', function () {
        if ($('.eUpdate').length === 0) {
            $('#actionResponse').show();
            $('#actionResponse').text('Nothing to Attack.');
            console.log(dbzArr.length);
        }
        else {
            console.log(dbzArr.length);
            eHP = eHP - aP;
            $('.eUpdate').text(eHP + ' hp');
            hP = hP - eCA;
            $('.update').text(hP + ' hp');
            aP += aP;
            console.log(aP);
            if (eHP <= 0 && hP > eHP && dbzArr.length === 0) {
                $('#actionResponse').show();
                $('#actionResponse').text('You win. Play Again?');
                $('.restart').show();
                $('.restart').text('Play Again');
                ePlayerDiv.remove();
            } else if (eHP <= 0 && hP > eHP) {
                $('#actionResponse').show();
                $('#actionResponse').text('You beat ' + eCharacterName + ". Choose another character to fight!");
                ePlayerDiv.remove();
                $('.restart').show();
            }else if (hP <= 0 && eHP > hP){
                $('.restart').show();
            }
        }
    });

    $('.restart').on('click', function () {
        location.reload();
    });

});











