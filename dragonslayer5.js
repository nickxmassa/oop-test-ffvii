// Weapons
var buster_sword = {name:'Buster Sword',minAtk:8,maxAtk:12};
var gun_arm = {name:'Gun Arm',minAtk:6,maxAtk:14};
var brass_knuckle = {name:'Brass Knuckle',minAtk:10,maxAtk:10};
var dragon_claw = {name:'Dragon Claw',minAtk:8,maxAtk:12};
// Actors
var cloud = {name:'Cloud',baseHp:100,weapon:buster_sword};
var barret = {name:'Barret',baseHp:100,weapon:gun_arm};
var tifa = {name:'Tifa',baseHp:100,weapon:brass_knuckle};
var dragon = {name:'Dragon',baseHp:500,weapon:dragon_claw};

$(document).ready(function(){

  $("#battleevent").scrollTop($("#battleevent")[0].scrollHeight);

  function rng(min, max){
    num = Math.floor(Math.random()*(max-min+1)+min);
  }

  function checkHealth(actor){
    if (actor.baseHp <= 0){
      $('div#battleevent').append('<p>' + actor.name + ' killed!</p>');
    }
  }

  function attack(attacker, receiver){
    rng(0, 1);
    if(num !==0){

      rng(attacker.weapon['minAtk'], attacker.weapon['maxAtk']);
      receiver.baseHp -= num;
      $('div#battleevent').append('<p>' + attacker['name'] + ' strikes with ' + attacker.weapon['name'] + '! ' + num + ' damage!</p>');
      $('span#' + receiver.name + 'HP').html(receiver.baseHp);
      console.log(receiver.name + ' : ' + receiver.baseHp);
    } else{
      $('div#battleevent').append('<p>' + attacker['name'] + ' strikes with ' + attacker.weapon['name'] + '! Miss!</p>');
    }
  }

  $('#attackbtn').click(function(){
    var activeParty = [cloud, barret, tifa];
    for (i = 0; i < activeParty.length; i++) {
      attack(activeParty[i], dragon);
      attack(dragon, activeParty[i]);
      checkHealth(activeParty[i]);
      checkHealth(dragon);
    }
  });
});