class UBBall{
	constructor(x,y,r)
	{
	    var options ={
			restitution:1.5,
			friction:3,
			density:2
		}

		this.x=x;
		this.y=y;
     	this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-40)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var Ballpos=this.body.position;		
			push()
			translate(Ballpos.x, Ballpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("blue");
			fill("green");
            ellipse(0,0,this.r,this.r);
			pop()
	}

}