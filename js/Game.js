class Game {
    constructor(){
  
    }
    play(){
        background(rgb(198,135,103));
        camera.y=player.y;

        //track.visible=true;
        player.visible=true;
        //set baground for player
        if(plr_bg===1)
        image(canyon_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        //track.addImage(canyon_img);
        else 
        if(plr_bg===2)  {
          image(canyon_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        }
        else
        if(plr_bg===3)  
          image(desert_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        else
        if(plr_bg===4)  
          image(grass_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        else
        if(plr_bg===5)  
          image(snow_img, 0,-canvas.width*3,canvas.width, canvas.height*10);
        else
        if(plr_bg===6)  
          image(water_img, 0,-canvas.width*3,canvas.width, canvas.height*10);

        //set car for player    
         if(plr_car===1){
            player.addImage(car1_img);
            player.scale=2.5; 
         }
         else 
         if(plr_car===2){
            player.addImage(car2_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===3){
            player.addImage(car3_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===4){
            player.addImage(car4_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===5){
            player.addImage(car5_img);
            player.scale=2.5;
         }
         else 
         if(plr_car===6){
            player.addImage(car6_img);
            player.scale=2.5;
         }

         if(keyDown(UP_ARROW)){
             player.velocityY=carvelocity+(-5);

             if(carvelocity>=-100)
                carvelocity=carvelocity-5;

             console.log(player.velocityY);
             distance=player.velocityY;
             //fuel=fuel-1;
             //player.y=player.y-10;
         }

         if(keyDown(DOWN_ARROW)){
          if(player.velocityY<0)
            player.velocityY=player.velocityY+5;

          if(player.velocity===0)
            carvelocity=0
            distance=player.velocityY;
            //fuel=fuel-1;
            //player.y=player.y-10;
      }

      if(keyDown(LEFT_ARROW)){
        player.x=canvas.width-600;
      }

      if(keyDown(RIGHT_ARROW)){
        player.x=canvas.width-320;
      }

      //track.velocityY=6;
      //track.y = track.y/height;
      //if(track.y>800){
       // track.y=100;
      //}
    }
}