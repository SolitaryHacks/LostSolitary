import { useEffect, useRef, useState } from 'react'
import './App.css'
import main3d from './3d/main'



export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)

    const[,Title] = useState(28);


    const AreaRef=useRef<HTMLDivElement>(null);//For titleTransition

    const ToSecondLevel=useRef<HTMLDivElement>(null);//For after titletransition
    

    useEffect(() => {
        const engine3d = main3d(CanvasRef.current as HTMLCanvasElement)
    
        // dispose 3d engine
        console.log(AreaRef.current);
        

        return () => engine3d()
        
    }, [])


    function TitleTransition(){
        AreaRef.current!.style.backgroundImage='url("/SolitaryTitleTransition.gif")';
    }
    

    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
        
        <div className="TitleBackground" ref={AreaRef} >
            
            {/* 2d stuff goes here vvvvvv */}

            <button className="TitleButton"
            onClick={TitleTransition}>     </button>
            


        </div>
    </>
}

