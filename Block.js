class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }

        this.Visiblity = 255;
        this.image = loadImage("block.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if(this.body.speed<3){
          imageMode(CENTER);
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{
          push();
          imageMode(CENTER);
          this.Visiblity -= 5;
          tint(255,this.Visiblity)
          image(this.image,pos.x,pos.y,this.width, this.height);
          pop();
        }
        
      }
}