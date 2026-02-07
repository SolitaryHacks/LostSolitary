import { useEffect, useRef, useState } from 'react'
import './App.css'
import main3d from './3d/main'
import './App.css'



export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)

    const[,Title] = useState(28);


    const AreaRef=useRef<HTMLDivElement>(null);//For titleTransition
    const TitleText=useRef<HTMLDivElement>(null);//For titletext
    const threeSecTimer=useRef<HTMLDivElement>(null);//For creating a 3 second timer
    const fader=useRef<HTMLDivElement>(null);//Permamently fades a div element

    const ToSecondLevel=useRef<HTMLDivElement>(null);//For after titletransition
    

    useEffect(() => {
        const engine3d = main3d(CanvasRef.current as HTMLCanvasElement)
    
        // dispose 3d engine
        console.log(AreaRef.current);
        

        return () => engine3d()
        
    }, [])


    function TitleTransition(){
        AreaRef.current!.style.backgroundImage='url("/SolitaryTitleTransition.gif")';
        AreaRef.current!.style.animation='fade 1s linear forwards';
        AreaRef.current!.style.opacity='0';



    }



    





    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
        
        <div className="TitleBackground" ref={AreaRef} >
            
            
            {/* 2d stuff goes here vvvvvv */}

            <button className="TitleButton"
            onClick={TitleTransition}></button>
            
            <div className="TitleText" ref={TitleText} style={{width: "70%", display: 'flex', position: "fixed",right: "20%", alignItems: "center",justifyContent: "center", fontSize: "500%", fontFamily: 'sans-serif',fontStyle: 'italic',fontWeight:"100%"}}>Lost Solitary

            </div>

        </div>

        
    </>
}