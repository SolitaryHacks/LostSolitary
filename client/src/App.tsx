import { useEffect, useRef } from 'react'
import './App.css'
import main from './3d/main'

export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        // run 3d main function
        main(CanvasRef.current as HTMLCanvasElement)
    }, [])

    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
        {/* put stuff here */}
    </>
}

