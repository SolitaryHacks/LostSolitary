import { useEffect, useRef, useState } from 'react'
import './App.css'
import main3d from './3d/main'

export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)
    const AreaRef = useRef<HTMLDivElement>(null)
    const [ testElement, setTestElement ] = useState(
        <div>Test 1</div>
    )

    useEffect(() => {
        const engine3d = main3d(CanvasRef.current as HTMLCanvasElement)
    
        // AreaRef.current!.style.backgroundImage = 'url("dskjfhaskldjhf")'

        AreaRef.current!.style.animation = 'fade 1s linear infinite'

        // dispose 3d engine
        return () => engine3d()
    }, [])

    function buttonStuff() {

    }

    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
        <div ref={AreaRef} className="area-2d">
            <button onClick={buttonStuff}>Button</button>

            { testElement }
            {/* 2d stuff goes here vvvvvv */}
        </div>
    </>
}

