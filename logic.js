const canvas=document.getElementById('context')
const c=canvas.getContext('2d')
canvas.width=innerWidth
canvas.height=innerHeight

const gravity=0.5
class Player{
    constructor(){
        this.position={
            x:100,
            y:100
        }
        this.velocity={
            x:0,
            y:1
        }
        this.width=30
        this.height=30
    }
    draw(){
        c.fillStyle='darkGrey'
        c.fillRect(this.position.x,this.position.y,this.width,this.height)
    }
    update(){ 
        this.draw()    
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if(this.velocity.y + this.height +this.position.y<=canvas.height){
            this.velocity.y +=gravity
        }else{
            this.velocity.y=0
        }
    }
}
const player=new Player
player.update()

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
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
            // player.velocity.y +=1
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
             player.velocity.y =0
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