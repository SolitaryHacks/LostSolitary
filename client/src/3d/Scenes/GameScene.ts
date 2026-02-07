import * as THREE from 'three'
import Engine from "../Engine"

export default abstract class GameScene {
    engine: Engine
    scene: THREE.Scene
    focusModel: THREE.Group | null
    initialized: boolean
    
    constructor(engine: Engine) {
        this.engine = engine
        this.scene = new THREE.Scene()
        this.focusModel = null

        this.initialized = false
    }

    abstract init(): void

    abstract setAction(option: string): void
}