import React from 'react'
import CardSmall from './cardSmall'
import './css/overView.css'


const cardSmallDataList = [
    {
        socialNetwork: 'facebook',
        pageViews: '87',
        growth: 3,
        key: 1,
    },
    {
        socialNetwork: 'twitter',
        pageViews: '52',
        growth: 2257,
        key: 2,
    },
    {
        socialNetwork: 'instagram',
        pageViews: '5462',
        growth: 1375,
        key: 3,
    },
    {
        socialNetwork: 'youtube',
        pageViews: '117',
        growth: 303,
        key: 4,
    },
    {
        socialNetwork: 'facebook',
        pageViews: '87',
        growth: 3,
        key: 5,
    },
    {
        socialNetwork: 'twitter',
        pageViews: '52',
        growth: 2257,
        key: 6,
    },
    {
        socialNetwork: 'instagram',
        pageViews: '5462',
        growth: 1375,
        key: 7,
    },
    {
        socialNetwork: 'youtube',
        pageViews: '117',
        growth: 303,
        key: 8,
    },


]

export default function Overview(){
    return(
        <section className="overview">
            <div className="wrapper">
                <h2>Overview - Today</h2>
                <div className="grid">
                    {
                        cardSmallDataList.map((cardSmallData)=><CardSmall key={cardSmallData.key} {...cardSmallData}/>)
                    }

                </div>
            </div>
        </section>
    )
}
