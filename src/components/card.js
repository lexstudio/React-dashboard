import React from 'react'
import './css/card.css'

export default function Card (){
    return(
        <article className="card facebook">
            <p className="card-title">
                <span className="icon-facebook fab fa-facebook-square"></span>
                @lexander
            </p>

            <p className="card-followers">
                <span className="card-followers-number">1483</span>
                <span className="card-followers-title">FOLLOWERS</span>
            </p>

            <p className="card-today">
                <span className="fas fa-sort-up"></span>
                12 Today
            </p>
        </article>
    )
}