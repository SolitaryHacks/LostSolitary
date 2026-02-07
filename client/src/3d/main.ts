import *  as THREE from 'three'

export default function main(canvas: HTMLCanvasElement) {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer()

    window.addEventListener('resize', resize)
    renderer.setAnimationLoop(animate)
    resize()

    function animate() {
        renderer.render(scene, camera)
    }

    function resize() {
        renderer.setSize( window.innerWidth, window.innerHeight )

        camera.updateProjectionMatrix()
    }

}