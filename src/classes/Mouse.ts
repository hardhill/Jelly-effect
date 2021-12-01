export default class Mouse{
    x:number = 0
    y:number = 0
    private rect:DOMRect
    constructor(context:HTMLCanvasElement){
        this.rect = context.getBoundingClientRect()    
        window.addEventListener('resize',()=>{
            this.rect = context.getBoundingClientRect()    
        })
        
        context.onmousemove = (e)=>{
            this.x = e.clientX - this.rect.left
            this.y = e.clientY - this.rect.top
        }
    }
}