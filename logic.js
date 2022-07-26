const canvas=document.getElementById('context')
const c=canvas.getContext('2d')
canvas.width=innerWidth
canvas.height=innerHeight

const gravity=1.5

class Player{
    constructor(){
        this.position={
            x:100,
            y:100
        }

        this.velocity={
            x:0,
            y:0
        }
        this.width=30
        this.height=30
    }
    draw(){
        c.fillStyle='red'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
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
       
        this.radius=10
    }
    draw(){
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false)
        c.fill()
        // c.fillRect(this.x,this.y,this.width,this.height)
    }
    update(){ 
        this.draw()
        this.x += this.velocity.x +2
        this.y += this.velocity.y  +2    
    }
}
const sho=new Shoot
console.log(sho)
const bullets=[]


// addEventListener('click',()=>{
//     bullets.push(sho)
// })


addEventListener('click',({clientX,clientY})=>{
    const angle=Math.atan2(clientY-player.position.y,clientX-player.position.x)
    console.log(angle)
    const velocity1={
        x:Math.cos(angle),
        y:Math.sin(angle)
    }
    const neww=new Shoot(velocity1)
    bullets.push(neww)
})

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
  
    bullets.forEach(s=>{
        s.update()
    })
    player.update() 
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