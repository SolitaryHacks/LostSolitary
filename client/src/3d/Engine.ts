import * as THREE from 'three'

export default class Engine {
    canvas: HTMLCanvasElement
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    private _requestAnimationFrameId: number
    private _beforeTime: number
    deltaTime: number
    fps: number
    
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.renderer = new THREE.WebGLRenderer()

        this._requestAnimationFrameId = -1

        this._beforeTime = 0
        this.deltaTime = 0
        this.fps = 0
    }

    dispose() {
        this.stopAnimate
    }

    startAnimate() {
        this._requestAnimationFrameId = window.requestAnimationFrame(this.onanimate.bind(this))
    }

    stopAnimate() {
        window.cancelAnimationFrame(this._requestAnimationFrameId)

        this._requestAnimationFrameId = -1
    }

    onresize() {
        this.renderer.setSize( window.innerWidth, window.innerHeight )

        this.camera.updateProjectionMatrix()
    }

    onanimate(timestamp?: DOMHighResTimeStamp) {
        window.requestAnimationFrame(this.onanimate.bind(this))

        if(!timestamp) return


        this.renderer.render(this.scene, this.camera)
    }
}