import * as THREE from 'three'
import Engine from "../Engine"

export default abstract class GameScene {
    engine: Engine
    scene: THREE.Scene
    initialized: boolean
    
    constructor(engine: Engine) {
        this.engine = engine
        this.scene = new THREE.Scene()

        this.initialized = false
    }

    abstract init(): void
}