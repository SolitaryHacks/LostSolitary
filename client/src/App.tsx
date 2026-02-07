import { useEffect, useRef, useState } from 'react'
import './App.css'
import main3d from './3d/main'
import './App.css'
import Engine from './3d/Engine'
import Scenes from './Scenes.json'


export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)
    const [ Engine3D, setEngine3D ] = useState<Engine | null>(null)

    const AreaRef=useRef<HTMLDivElement>(null);//For titleTransition
    const TitleText=useRef<HTMLDivElement>(null);//For titletext
    const ChatBoxRef = useRef<HTMLDivElement>(null)

    const [ currentScene, setCurrentScene ] = useState('Scene-1')//The current state starts in scene 1
    const [ dialogueText, setDialogueText ] = useState('')//current dialouge text
    const [ dialogueCount, setDialogueCount ] = useState(-1)//How long the Dialouge is

    useEffect(() => {
        if(!Engine3D) return

        TitleTransition()

        console.log('3D Engine is available')
        console.log(Engine3D)
    }, [Engine3D])

    useEffect(() => {
        setEngine3D(main3d(CanvasRef.current as HTMLCanvasElement))
    }, [])


    function TitleTransition(){
        nextDialogue()

        AreaRef.current!.style.backgroundImage='url("/SolitaryTitleTransition.gif")';
        
        TitleText.current!.style.opacity='0';

        setTimeout(()=>{
            AreaRef.current!.style.backgroundImage = 'none';
            ChatBoxRef.current!.style.visibility = 'visible'
            
            Engine3D!.models.Guard!.visible = true
        }, 2000);
    }//end of Title transition

    function nextDialogue() {
        setDialogueCount(c => c++)

        setDialogueText(() => {
            const data = Scenes['Scene-1']
            
            return ``
        })
    }//end of next Dialogue

    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
            <div className="TitleBackground" ref={AreaRef}>
                {/* 2d stuff goes here vvvvvv */}
                <button className="TitleButton" onClick={TitleTransition}></button>
                <div className="Title" ref={TitleText}>
                     <span className='title-text'>Lost Solitary</span>
                </div>
                <div ref={ChatBoxRef} className="ChatBox">
                    <img className='talking-to' src="/image/Guard.png" alt="" />
                    <div className='dialogue'>
                        <div className="dialogue-text" onClick={nextDialogue}>
                           { "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"}
                        </div>

                        <button className='choice1'>Choice 1</button>
                        <button className='choice2'>Choice 2</button>
                    </div>
                </div>
        </div>
    </>



}