import *  as THREE from 'three'
import Engine from './Engine'

export default function main(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas)

    console.log(engine)

    engine.startAnimate()

    return () => engine.dispose()
}