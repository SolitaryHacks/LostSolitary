import Engine from './Engine'

export default function main(canvas: HTMLCanvasElement) {
    const engine = new Engine(canvas)

    console.log(engine)

    engine.startAnimate()
    window.addEventListener('resize', engine.onresize.bind(engine))

    return () => {
        location.reload()
        engine.dispose()
    }
}