import Engine from "../Engine"

export default class GameScene {
    engine: Engine
    initialized: boolean
    
    constructor(engine: Engine) {
        this.engine = engine

        this.initialized = false
    }

    
}