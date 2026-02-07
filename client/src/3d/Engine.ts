import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Actors } from './Models';

const loader = new GLTFLoader()

interface Models {
    Guard: THREE.Group | null
    Prisoner: THREE.Group | null
    Visitor: THREE.Group | null
    Warden: THREE.Group | null
}

const ModelSrc = {
    Guard: '/Guard.glb',
    Prisoner: '/Prisoner.glb',
    Visitor: '/Visitor.glb',
    Warden: '/Warden.glb'
}

export default class Engine {
    canvas: HTMLCanvasElement
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    controls: OrbitControls
    models: Models
    private _requestAnimationFrameId: number
    private _beforeTime: number
    isAllModelsLoaded: boolean
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

        this.models = {
            Guard: null,
            Prisoner: null,
            Visitor: null,
            Warden: null
        }

        this.isAllModelsLoaded = false

        this._requestAnimationFrameId = -1

        this._beforeTime = 0
        this.deltaTime = 0
        this.fps = 0
        
        this.init()
        this.loadModels()
    }

    loadModels() {
        const MAX_MODEL_COUNT = Object.keys(ModelSrc).length
        let modelCount = 0
        const allRotationX = 0.1

        loader.load(ModelSrc.Prisoner, model => {
            model.scene.scale.setScalar(10)
            model.scene.position.set(0, -16, 0)
            model.scene.rotation.x = allRotationX

            this.models.Prisoner = model.scene

            model.scene.visible = false
            this.scene.add(model.scene)

            modelCount++

            this.isAllModelsLoaded = modelCount === MAX_MODEL_COUNT
        })

         loader.load(ModelSrc.Guard, model => {
            model.scene.scale.setScalar(10)
            model.scene.position.set(0, -15, 0)
            model.scene.rotation.x = allRotationX

            this.models.Guard = model.scene

            model.scene.visible = false
            this.scene.add(model.scene)
        
            modelCount++
        
            this.isAllModelsLoaded = modelCount === MAX_MODEL_COUNT
        })

         loader.load(ModelSrc.Warden, model => {
            model.scene.scale.setScalar(1)
            model.scene.position.set(0, -15, -1)
            model.scene.rotation.x = allRotationX

            this.models.Warden = model.scene

            model.scene.visible = false
            this.scene.add(model.scene)
        
            modelCount++
        
            this.isAllModelsLoaded = modelCount === MAX_MODEL_COUNT
        })

         loader.load(ModelSrc.Visitor, model => {
            model.scene.scale.setScalar(10)
            model.scene.position.set(0, -17, 0)

            this.models.Visitor = model.scene

            model.scene.visible = false
            this.scene.add(model.scene)
        
            modelCount++
        
            this.isAllModelsLoaded = modelCount === MAX_MODEL_COUNT
        })
    }

    hideAllModels() {
        if(this.models.Guard) {
            this.models.Guard.visible = false
        }

        if(this.models.Prisoner) {
            this.models.Prisoner.visible = false
        }

        if(this.models.Visitor) {
            this.models.Visitor.visible = false
        }

        if(this.models.Warden) {
            this.models.Warden.visible = false
        }
    }

    showModel(modelName: 'Guard' | 'Prisoner' | 'Visitor' | 'Warden') {
        this.hideAllModels()

        this.models[modelName]!.visible = true
    }

    init() {
        const { camera } = this

        const size = 50
        const geometry = new THREE.BoxGeometry(size, size, size)
        const material = [
            new THREE.MeshStandardMaterial({ color: 'rgb(50, 50, 50)', side: THREE.BackSide }),
            new THREE.MeshStandardMaterial({ color: 'rgb(50, 50, 50)', side: THREE.BackSide }),
            new THREE.MeshStandardMaterial({ color: 'rgb(50, 50, 50)', side: THREE.BackSide }),
            new THREE.MeshStandardMaterial({ color: 'rgb(50, 50, 50)', side: THREE.BackSide }),
            new THREE.MeshStandardMaterial({ color: 'rgb(50, 50, 50)', side: THREE.BackSide }),
            new THREE.MeshStandardMaterial({ color: 'rgb(50, 50, 50)', side: THREE.BackSide }),
        ]
        const cube = new THREE.Mesh(geometry, material)
        // const spotLight = new THREE.SpotLight(0xFFFFFF, 1, 0, Math.PI / 2, 0, 2)
        const ambientLight = new THREE.AmbientLight(0xFFFFFFFF, 1)

        cube.position.set(0, size / 5, 0)
        camera.position.set(0, 0, 5)
        
        this.scene.add(cube, ambientLight)
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