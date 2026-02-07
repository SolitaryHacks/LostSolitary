import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type GameScene from './Scenes/GameScene'
import TestScene from './Scenes/TestScene'

export default class Engine {
    canvas: HTMLCanvasElement
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    controls: OrbitControls
    sceneMap: Record<string, GameScene>
    private _requestAnimationFrameId: number
    private _beforeTime: number
    deltaTime: number
    fps: number
    
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas

        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        this.controls = new OrbitControls(this.camera, canvas)

        this.sceneMap = {
            TestScene: new TestScene(this)
        }

        this._requestAnimationFrameId = -1

        this._beforeTime = 0
        this.deltaTime = 0
        this.fps = 0

    }

    setScene(gameScene: GameScene) {
        if(!gameScene.initialized) {
            gameScene.init()

            gameScene.initialized = true
        }

        this.scene = gameScene.scene

        console.warn(`Scene has changed to => `, gameScene)
    }

    dispose() {
        this.stopAnimate()
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
        
        this.deltaTime = (timestamp - this._beforeTime) / 1000 
        this.fps = 1 / this.deltaTime
        
        this._beforeTime = timestamp

        this.controls.update()
        this.renderer.render(this.scene, this.camera)
    }
}