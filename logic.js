const canvas=document.getElementById('context')
const c=canvas.getContext('2d')
canvas.width=innerWidth
canvas.height=innerHeight

const gravity=1.5

class Player{
    constructor(){
        //the postion of the player on the plane[x,y]
        this.position={
            x:200,
            y:200
        }
        //the speed of the player
        this.velocity={
            x:0,
            y:0
        }
        //the size of the player
        this.width=60
        this.height=60
        // this.image=createImage(p)
    }
    //this draws out the player
    draw(){
        c.fillStyle='red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
        c.fill()
    }
    update(){ 
        this.draw()    
         this.position.y += this.velocity.y
         this.position.x += this.velocity.x
      
        if(this.velocity.y + this.height +this.position.y<=canvas.height){
            this.velocity.y =0
        }else{
            this.velocity.y=0
        }
    }
}
const player=new Player
player.update()



class Shoot{
    constructor(velocity1){
        this.velocity=velocity1

        this.x=player.position.x
        this.y=player.position.y

        // this.x=a
        // this.y=b
       
        this.radius=5
    }
    draw(){
        c.beginPath()
        c.arc(this.x+20,this.y-5,this.radius,0,Math.PI*2,false)
        c.fillStyle='blue'
        c.fill()
        // c.fillRect(this.x,this.y,this.width,this.height)
    }
    update(){ 
        this.draw()
        this.x+= this.velocity.x+this.velocity.x+this.velocity.x+this.velocity.x
        this.y += this.velocity.y+this.velocity.y+this.velocity.y+this.velocity.y+this.velocity.y

    }
    ps(){ 
        this.draw()
        this.x+= this.velocity.x+this.velocity.x+this.velocity.x+this.velocity.x+this.velocity.x+this.velocity.x
        this.y += this.velocity.y+this.velocity.y+this.velocity.y+this.velocity.y+this.velocity.y+this.velocity.y+this.velocity.y

    }
}
const sho=new Shoot
console.log(sho)
const bullets=[]
const power=[]


addEventListener('click',({clientX,clientY})=>{
    const angle=Math.atan2(clientY-player.position.y,clientX-player.position.x)
 
    const velocity1={
        x:Math.cos(angle),
        y:Math.sin(angle)
    }
    const neww=new Shoot(velocity1)
    const new1=new Shoot(velocity1)
    bullets.push(neww)
    power.push(new1)
})

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player.update() 

    power.forEach(s=>{
        s.ps()
        s.ps()  
        s.ps()
        s.ps()  
        
    })

}
animate()



addEventListener('keydown',({keyCode})=>{

    switch (keyCode) {
        case 87:
            console.log('up')
             player.velocity.y =-10
            break;
        case 83:
            player.velocity.y =5
            break;
        case 65:
            console.log('left')
            player.velocity.x =-3
            break;
        case 68:
            console.log('right')
            player.velocity.x =3
            break;
    
    }

})

addEventListener('keyup',({keyCode})=>{

    switch (keyCode) {
        case 87:
            console.log('up')
             player.velocity.y =-2
            break;
        case 83:
            
            break;
        case 65:
            console.log('left')
            player.velocity.x =0
            break;
        case 68:
            console.log('right')
            player.velocity.x =0
            break;
    
    }

})