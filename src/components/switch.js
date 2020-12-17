import React, {useRef, useEffect, useState} from 'react'
import './css/switch.css'


export default function Switch(){

    const [checked, setChecked]=useState(false)

    const ref=useRef(null)

    function handleChange(){
        const icon_mode = document.querySelector('#icon_mode')
        console.log(ref.current.checked)
        setChecked(ref.current.checked)
        if(ref.current.checked){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
            icon_mode.classList.remove('fa-sun')
            icon_mode.classList.add('fa-moon')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
            icon_mode.classList.remove('fa-moon')
            icon_mode.classList.add('fa-sun')
        }
    }

    function changeMedia(mq){
        const icon_mode = document.querySelector('#icon_mode')
            //ref.current.setAtrribute('checked',true)
        setChecked(mq.matches)
        if(mq.matches){
            document.body.classList.remove('is-light-mode')
            document.body.classList.add('is-dark-mode')
            icon_mode.classList.remove('fa-sun')
            icon_mode.classList.add('fa-moon')
        }else{
            document.body.classList.remove('is-dark-mode')
            document.body.classList.add('is-light-mode')
            icon_mode.classList.remove('fa-moon')
            icon_mode.classList.add('fa-sun')
        }
        
    }

    useEffect(()=>{
        const mq =window.matchMedia('(prefers-color-scheme: dark)')
        mq.addEventListener('change',changeMedia)
            //ref.current.setAtrribute('checked',true)
        setChecked(mq.matches)
        
    },[])

    return (
        <div className="dark-mode">
            <p className="dark-mode-title">
                <span id="icon_mode" className="fas fa-sun"></span>
            </p>
            <input ref={ref} onChange={handleChange} type="checkbox" className="checkbox" id="checkbox" checked={checked}/>
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
    )
}