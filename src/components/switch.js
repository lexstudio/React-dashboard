import React from 'react'
import './css/switch.css'

export default function Switch(){
    return (
        <div className="dark-mode">
            <p className="dark-mode-title"><span id="icon_mode" className="fas fa-sun"></span></p>
            <input type="checkbox" className="checkbox" id="checkbox"/>
            <label className="switch" htmlFor="checkbox">
            </label>
        </div>
    )
}