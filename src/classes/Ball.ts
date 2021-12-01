export default class Ball{
    private x:number
    private y:number
    private radius:number
    private color:string
    private ctx:CanvasRenderingContext2D
    private vx:number
    private vy:number
    private sensdist:number
    private friction:number
    private springFactor:number
    private originalX:number
    private originalY:number
    constructor(ctx:CanvasRenderingContext2D,x:number|undefined,y:number|undefined,radius:number|undefined,color:string|undefined){
        this.ctx = ctx
        this.x = x || 0
        this.y  = y || 0
        this.originalX = x || 0
        this.originalY = y || 0
        this.radius = radius || 2
        this.color = color || '#ff6600'
        this.vx = 0
        this.vy = 0
        this.sensdist = 30
        this.friction = 0.7
        this.springFactor = 0.01
    }
    think(x:number, y:number){
        let dx = this.x - x
        let dy = this.y - y
        let dist = Math.sqrt(dx*dx + dy*dy)
        if(dist<this.sensdist){
            let s = this.sensdist - dist
            let angle = Math.atan2(dy,dx)
            let tx = s * Math.cos(angle)
            let ty = s * Math.sin(angle)
            this.vx += tx 
            this.vy += ty 
        }
        // spring factor
        let farX = -(this.x - this.originalX)
        let farY = -(this.y - this.originalY)
        this.vx += farX * this.springFactor
        this.vy += farY * this.springFactor
        // friction
        this.vx *= this.friction
        this.vy *= this.friction
        // actual
        this.x += this.vx
        this.y += this.vy
    }
    
    draw(){
        this.ctx.save()
        this.ctx.beginPath()
        this.ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
        this.ctx.closePath();
        this.ctx.restore()
    }
    setPos(x:number,y:number){
        this.x = x
        this.y = y
    }
    setSens(dist:number){
        this.sensdist = dist
    }
}