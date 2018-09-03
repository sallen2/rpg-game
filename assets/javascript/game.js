let dbzArr = [
    {
        image:"assets/images/cellLitCell.gif", 
        name: "Cell",
        healthPoints: 200,
        attackPower: 30,
        counterAttack: 20
     },
     {
        image:"assets/images/frieza.gif", 
        name: "Frieza",
        healthPoints: 250,
        attackPower: 20,
        counterAttack: 15
     },
     {
        image:"assets/images/goku.gif", 
        name: "Goku",
        healthPoints: 180,
        attackPower: 25,
        counterAttack: 20
     },
     {
        image: "assets/images/vegeta.gif", 
        name: "Goku",
        healthPoints: 190,
        attackPower: 28,
        counterAttack: 23
     },
];
function update() {
    for (let i = 0; i < dbzArr.length; i++) {
        let characters = $('<img>');
        characters.addClass('container_enemy');
        characters.attr('src', dbzArr[i].image);
        $('#enemy').append(characters);
    }
}
for (let i = 0; i < dbzArr.length; i++) {
    let characters = $('<img>');
    // let healthPoints = $('<p>');
    characters.addClass('container_img');
    // healthPoints.addClass('attackPower');
    characters.attr('src', dbzArr[i].image);
    // healthPoints.text(dbzArr[i].healthPoints);
    $('.container').append(characters);
    // $('.container').append(healthPoints);
}
$(document).ready(function () {
    $('.container_img').on('click', function () {
        $('.container_img').hide();
        let src = $(this).attr('src');
        index = dbzArr.findIndex(x => x.image== src);
        dbzArr.splice(index, 1);
        let myPlayer = $('<img>');
        myPlayer.addClass('container_div container_img');
        myPlayer.attr('src', src);
        $('#myCharacter').append(myPlayer);
        $('.container').addClass('height');
        update();
    });
    $(document).on('click', '.container_enemy', function () {
        let src = $(this).attr('src');
        $('.container_enemy').remove();
        index = dbzArr.findIndex(x => x.image== src);
        dbzArr.splice(index, 1);
        update();
        let myPlayer = $('<img>');
        myPlayer.addClass('container_div container_enemy');
        myPlayer.attr('src', src);
        $('#enemyCharacter').append(myPlayer);
    });

    $('.attack').on('click', function(){

    })

});











