import Ball from "./classes/Ball"
import Mouse from "./classes/Mouse"


let canvas:HTMLCanvasElement = document.getElementById('drawField') as any
const ctx:CanvasRenderingContext2D|null = canvas.getContext('2d')
   
const mouse = new Mouse(canvas)
const balls:Array<Ball> = new Array<Ball>()
for(let i=0;i<1200;i++){
    let x = Math.random()*600
    let y = Math.random()*600
    let ball = new Ball(ctx!,x,y,3,'#30aaff')
    balls.push(ball)
}
const cursor = new Ball(ctx!,0,0,30,'#22cc1933')
Render()



function Render(){
    window.requestAnimationFrame(Render)
    ctx!.clearRect(0,0,600,600)

    balls.forEach(item=>{
        item.draw()
        item.think(mouse.x, mouse.y)
    })
    cursor.setPos(mouse.x,mouse.y)
    cursor.draw()
    
}

