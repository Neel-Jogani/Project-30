class Box{
    constructor(x, y, width, height) {
        var options = {
          restitution:0.1,
          friction:0.01        
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
         
        if(this.body.speed < 7){
            var pos =this.body.position;
            push()
            rectMode(CENTER);
            rect(pos.x, pos.y, this.width, this.height);
            pop()
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 3;
            tint(255,this.visibility);
            pop();
        }
      
    }
}