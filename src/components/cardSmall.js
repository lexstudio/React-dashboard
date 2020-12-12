import React from 'react'
import './css/cardSmall.css'
import './icons/css/all.min.css'

export default function CardSmall({growth,pageViews,socialNetwork}){
    if(socialNetwork==='facebook'){
        socialNetwork=`${socialNetwork}-square`
    }
    return(
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
                <span className={`icon-${socialNetwork} fab fa-${socialNetwork}`}></span>
            </p>
            <p className="card-small-number">{pageViews}</p>
            <p className="card-small-percentage">
            <span><i className="fas fa-sort-up"></i>{growth}%</span>
            </p>
        </div>
    )
}