import React from 'react'
import './css/card.css'
import './icons/css/all.min.css'

export default function Card ({userName,followers, todayFollowers, socialNetwork}){
    if(socialNetwork==='facebook'){
        socialNetwork=`${socialNetwork}-square`
    }
    return(
        <article className={`card ${socialNetwork}`}>
            <p className="card-title">
                <span className={`icon-${socialNetwork} fab fa-${socialNetwork}`} ></span>
                @{userName}
            </p>

            <p className="card-followers">
                <span className="card-followers-number">{followers}</span>
                <span className="card-followers-title">FOLLOWERS</span>
            </p>

            <p className="card-today">
                <span className="fas fa-sort-up"></span>
                {todayFollowers} Hoy es una prueba
            </p>
        </article>
    )
}