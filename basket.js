class Basket {
    constructor (x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle (x,y,width,height,options);
        this.width = width;
        this.height= height;
        this.image = loadImage("basketImg.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        imageMode(CENTER);
        
        rect(this.image,pos.x,pos.y,this.width,this.height);
       image(this.image,910,180,120,120);
    
    }

    
}