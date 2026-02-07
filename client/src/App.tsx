import { useEffect, useRef, useState } from 'react'
import './App.css'
import main3d from './3d/main'
import './App.css'
import Engine from './3d/Engine'



export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)
    const [ Engine3D, setEngine3D ] = useState<Engine | null>(null)

    const AreaRef=useRef<HTMLDivElement>(null);//For titleTransition
    const TitleText=useRef<HTMLDivElement>(null);//For titletext

    useEffect(() => {
        if(!Engine3D) return

        console.log('3D Engine is available')
        console.log(Engine3D)
    }, [Engine3D])

    useEffect(() => {
        setEngine3D(main3d(CanvasRef.current as HTMLCanvasElement))
    }, [])


    function TitleTransition(){
        AreaRef.current!.style.backgroundImage='url("/SolitaryTitleTransition.gif")';
        
        TitleText.current!.style.opacity='0';

        setTimeout(()=>{
        AreaRef.current!.style.backgroundImage = 'none';
            // AreaRef.current!.style.opacity='0';
            // AreaRef.current!.style.display="none";

            
            Engine3D!.models.Guard!.visible = true
        }, 2000);
    }

    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
            <div className="TitleBackground" ref={AreaRef}>
                {/* 2d stuff goes here vvvvvv */}
                <button className="TitleButton" onClick={TitleTransition}></button>
                <div className="TitleText" ref={TitleText} style={{width: "70%", display: 'flex', position: "fixed",right: "20%", alignItems: "center",justifyContent: "center", fontSize: "500%", fontFamily: 'sans-serif',fontStyle: 'italic',fontWeight:"100%"}}>Lost Solitary</div>
                <div className="ChatBox">
                    <img className='talking-to' src="/image/Guard.png" alt="" />
                    <div className='dialogue'>dialogue</div>
                    <button className='choice'>Choice 1</button>
                    <button className='choice'>Choice 2</button>
                </div>
        </div>
    </>
}