import { useEffect, useRef } from 'react'
import './App.css'
import main3d from './3d/main'

export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const engine3d = main3d(CanvasRef.current as HTMLCanvasElement)
    
        // dispose 3d engine
        return () => engine3d()
    }, [])

    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
        {/* put stuff here */}
    </>
}

