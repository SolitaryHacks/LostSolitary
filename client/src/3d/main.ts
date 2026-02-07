import Engine from './Engine'
import * as THREE from 'three'

export default function main(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas)

    console.log(engine)

    engine.startAnimate()
    window.addEventListener('resize', engine.onresize.bind(engine))
    engine.onresize()

<<<<<<< Updated upstream
=======
    setTimeout(() => {
        engine.models.Warden!.visible = true
    }, 1000)

>>>>>>> Stashed changes
    return () => {
        location.reload()
        engine.dispose()
    }
}