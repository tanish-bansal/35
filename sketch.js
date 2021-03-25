//Create variables here
var food2,dog,dog1,happydog,foods=20,database,foodstock;
var foodb,petb,food,feedTime,lastFeed,feed,addfood,addFood;
function preload()
{
  dog1=loadImage("dogimg.png");
 happydog=loadImage("dogimg1.png");
  food2=loadImage("milk.png")
  
  }
	//load images here


function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(50,250,0.5,0.5) ;
  dog.addImage(dog1);
  dog.addImage(happydog);

  foodb=createSprite(150,50,0.5,0.5) ;
dog1.scale=0.2
foodb.addImage(food2);
 /* foodstock=database.ref('foods');
  foodstock.on("value",readStock)*/
feed=createButton("feed dog");
feed.position(700,180);
feed.mousePressed(lastFeed);
addfood=createButton("add food");
addfood.position(700,80);
addfood.mousePressed(addFood);

food=new Food();


}

function draw() {  
 //background(46,139,87)
/* if(keyWentDown(UP_ARROW)){
   writeStock(foods);
   dog1.addImage(happydog);
 }*/
food.display();


feedTime=database.ref('lastFeed');
feedTime.on("value", function(data){
  lastFeed=data.val()
});

fill(255,255,254)
 textSize(15)
 if(lastFeed=>12)
{
  text("last fed pm" +lastFeed%12,350,30)


}
else 
{
  text("last fed",350,30)
}



text("last fed am" +lastFeed,350,30)

  //add styles here
  text("food remaining "+foods,50,60);
  textSize(20);
  fill("yellow");
  }
/*function readStock(data){
  foods= data.val();}

*/
  /*function writeStock(x){

    if(x<=0){
      x=0;
    }
      else
      {
        x=x-1;
    }
    database.ref('/').update({foods:x});
*/
  


function addFood(){
  addfood++;
  database.ref('/').update({
  food:foods});
}
function lastFeed(){
  dog.addImage(happyDog);
  feedb.addImage(food2)
  food.updatefoodstock(food.getFoodStock()-1);
  database.ref('/').update({
    food:foods.getFoodStock(),
    feedTime: hour ()
  });

  drawSprites();
}
