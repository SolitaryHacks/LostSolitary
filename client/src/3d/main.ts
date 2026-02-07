import Engine from './Engine'
import * as THREE from 'three'

export default function main(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas)

    console.log(engine)

    engine.startAnimate()
    window.addEventListener('resize', engine.onresize.bind(engine))
    engine.onresize()

    setTimeout(() => {
        if(engine.models.Warden) {
            engine.models.Warden.visible = true
        }

    }, 1000)

    return () => {
        location.reload()
        engine.dispose()
    }
}