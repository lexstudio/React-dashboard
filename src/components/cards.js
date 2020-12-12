import React from 'react'
import Card from './card'
import './css/cards.css'

const cardDataList = [
    {
        id: 1,
        userName:"lexander",
        followers: '1596',
        todayFollowers: 12,
        socialNetwork: 'facebook'
    },

    {
        id: 2,
        userName:"Lis",
        followers: '28k',
        todayFollowers: 20 ,
        socialNetwork: 'instagram'
    },

    {
        id: 3,
        userName:"Carmen",
        followers: '6k',
        todayFollowers: 30,
        socialNetwork: 'twitter'
    },

    {
        id: 4,
        userName:"Fausto",
        followers: '12k',
        todayFollowers: -58, 
        socialNetwork: 'youtube'
    },

]

export default function Cards(){
    return(
        <section>
            <div className="wrapper">
                <div className="grid top-cards">

                    {cardDataList.map((cardData)=>
                        <Card key={cardData.id} {...cardData}/>
                    )}


                    
                    {/* <Card/>
                    <Card/>
                    <Card/> */}


{/* 
                    <article class="card twitter">
                            <p class="card-title">
                            <span class="icon-twitter fab fa-twitter"></span>
                            @lexander
                            </p>

                            <p class="card-followers">
                            <span class="card-followers-number">28k</span>
                            <span class="card-followers-title">FOLLOWERS</span>
                            </p>
                            <p class="card-today">
                            <span class="fas fa-sort-up"></span>
                            12 Today
                            </p>
                        </article>




                        <article class="card instagram">
                            <p class="card-title">
                            <span class="icon-instagram fab fa-instagram"></span>
                            @lexander
                            </p>

                            <p class="card-followers">
                            <span class="card-followers-number">6k</span>
                            <span class="card-followers-title">FOLLOWERS</span>
                            </p>
                            <p class="card-today">
                            <span class="fas fa-sort-up"></span>
                            12 Today
                            </p>
                        </article>



                    <article class="card youtube">
                        <p class="card-title">
                        <span class="icon-youtube fab fa-youtube"></span>
                        @lexander
                        </p>

                        <p class="card-followers">
                        <span class="card-followers-number">12k</span>
                        <span class="card-followers-title">FOLLOWERS</span>
                        </p>
                        <p class="card-today">
                        <span class="fas fa-sort-up"></span>
                        12 Today
                        </p>
                    </article> */}
                </div>
            </div>
        </section>
    )
} 