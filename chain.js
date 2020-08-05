class chain{
constructor(bodyA,bodyB){
var options={
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.4,
    length:10
}
this.chain=Constraint.create(options);
    World.add(world,this.chain);
}
 display(){
 pointA=this.chain.bodyA.position;
 pointB=this.chain.bodyB.position;
 line(pointA.x,pointA.y,pointB.x,pointB.y);
}

}