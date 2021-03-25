class Food {
    constructor() {
    
 this.foodStock=0;
this.lastFeed;
 
 this.image=loadImage("milk.png");
    } 
 getFedTime(lastFeed){
     this.lastFeed=lastFeed;
 }

   
    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }
    updatefoodstock(foodStock){
        this.foodStock=foodStock;
    }
getFoodStock(){
    return this.foodStock;
}
      
display(){
   
    
imageMode (CENTER);
image(this.image,330,220,70,70);

if(this.foodStock!=0){
    for(var i=0;i<=this.foodStock;i++){
      if(i%10==0)  {
          x=80;
          y=y+50;
      }
      
      image(this.image,x,y,50,50);

      x=x+30;
    
    }
}
}
}
