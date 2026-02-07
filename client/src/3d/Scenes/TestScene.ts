import * as THREE from 'three'
import type Engine from "../Engine";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import GameScene from "./GameScene";

import { Actors } from '../Models';

const loader = new GLTFLoader()

export default class TestScene extends GameScene {
    constructor(engine: Engine) {
        super(engine)
    }

    init() {
        const { camera, renderer } = this.engine

        renderer.outputColorSpace = THREE.SRGBColorSpace;

        const size = 50
        const geometry = new THREE.BoxGeometry(size, size, size)
        const material = [
            new THREE.MeshBasicMaterial({ color: 'pink', side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 'purple', side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 'yellow', side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 'red', side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 'blue', side: THREE.BackSide }),
            new THREE.MeshBasicMaterial({ color: 'rgb(0, 255, 0)', side: THREE.BackSide }),
        ]
        const cube = new THREE.Mesh(geometry, material)
        const ambientLight = new THREE.AmbientLight(0xFFFFFFFF, 1)

        loader.load(Actors.Guard, model => {
            this.scene.add(model.scene)

            model.scene.scale.setScalar(10)
        })
        
        cube.position.set(0, size / 3, 0)
        camera.position.set(0, 0, size / 2)
        
        this.scene.add(cube, ambientLight)
    }
}