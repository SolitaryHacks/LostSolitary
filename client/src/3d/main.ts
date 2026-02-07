import Engine from './Engine'
import * as THREE from 'three'

export default function main(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas)

    engine.startAnimate()
    window.addEventListener('resize', engine.onresize.bind(engine))
    engine.onresize()

    // setTimeout(() => {
        
        // engine.models.Warden!.visible = true

    // }, 1000)

    return engine
    
}