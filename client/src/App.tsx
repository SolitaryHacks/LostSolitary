import { useEffect, useRef, useState } from 'react'
import './App.css'
import main3d from './3d/main'
import './App.css'
import Engine from './3d/Engine'
import Scenes from './Scenes.json'


let dialogueCount = 0
let sceneCount = 1
export default function App() {
    const CanvasRef = useRef<HTMLCanvasElement | null>(null)
    const [ Engine3D, setEngine3D ] = useState<Engine | null>(null)

    const AreaRef=useRef<HTMLDivElement>(null);//For titleTransition
    const TitleText=useRef<HTMLDivElement>(null);//For titletext
    const ChatBoxRef = useRef<HTMLDivElement>(null)
    const Choice1Ref = useRef<HTMLButtonElement>(null)
    const Choice2Ref = useRef<HTMLButtonElement>(null)

    const [ currentScene, setCurrentScene ] = useState('Scene-')
    const [ dialogueText, setDialogueText ] = useState('')
    const [ talkingToSrc, setTalkingToSrc ] = useState('')

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
            
            // Engine3D!.models.Guard!.visible = true
        }, 2000);
    }

    function setModels(name: string) {
        if(name === 'Neighbor') {
            setTalkingToSrc(() => '/image/prisoner.png')
            Engine3D!.showModel('Prisoner')
        } else if(name === 'Warden') {
            setTalkingToSrc(() => '/image/warden.png')
            Engine3D!.showModel('Warden')
        }
    }

    function nextDialogue() {
        console.log(dialogueCount)

        // @ts-ignore
        const scene = Scenes[currentScene + sceneCount]

        if(dialogueCount >= scene.length) {
            // @ts-ignore
            const choices = Scenes['Choice-' + sceneCount][0]

            if('Choice' in choices) {
                setDialogueText(() => `Select a choice... ${choices.Choice}`)
                
                Choice1Ref.current!.style.visibility = 'visible'

                return
            }

            Choice1Ref.current!.style.visibility = 'visible'
            Choice2Ref.current!.style.visibility = 'visible'

            setDialogueText(() => `Select a choice... ${choices.Choice1} or ${choices.Choice2}`)

            return
        }

        const dialogue = scene[dialogueCount]
 
        setModels(dialogue.name)

        setDialogueText(() => {
            return `[${dialogue.name}]: ${dialogue.text}`
        })

        dialogueCount++
    }

    function resetButtonChoice(buttonChoice: 'choice1' | 'choice2') {
        Choice1Ref.current!.style.visibility = 'hidden'
        Choice2Ref.current!.style.visibility = 'hidden'

        sceneCount++
        dialogueCount = 0

        nextDialogue()
    } 

    return <>
        <canvas ref={CanvasRef} id="threejs"></canvas>
            <div className="TitleBackground" ref={AreaRef}>
                {/* 2d stuff goes here vvvvvv */}
                <button className="TitleButton" onClick={TitleTransition}></button>
                <div className="Title" ref={TitleText}>
                     <span className='title-text'>Lost Solitary</span>
                </div>
                <div ref={ChatBoxRef} className="ChatBox">
                    <img className='talking-to' src={talkingToSrc} alt="" />
                    <div className='dialogue'>
                        <div className="dialogue-text" onClick={nextDialogue}>
                           { dialogueText}
                        </div>

                        <button ref={Choice1Ref} onClick={() => {
                            resetButtonChoice('choice1')
                        }} className='choice choice1'>Choice 1</button>
                        <button ref={Choice2Ref} onClick={() => {
                            resetButtonChoice('choice2')
                        }} className='choice choice2'>Choice 2</button>
                    </div>
                </div>
        </div>
    </>
}