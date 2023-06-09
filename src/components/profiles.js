import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
        
  )
}

function Item(data){
    return (

        <>
            {

                
                data.map((value, index) => (
                    
                    <div className="flex" key={index}>

                        {/* <div className="skill-box">
                            <span>HTML</span>
                            <div className="skill-bar">
                                <span className="skill-per html">
                                    <span className="tooltip">95%</span>

                                </span>
                            </div>

                        </div> */}


                        <div className="item">
                            <img src={value.img} alt="img__" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                            </div>

                            <div className="skill-box">
                            <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="tooltip"><p><b>Weekly: </b>{value.week_score/2}</p></span>
                            </span>
                            </div>
                            </div>
                        

                        {/* <div className="info">
                            <p><b>All Time: {value.score}</b></p>
                        </div> */}


                    </div>
                    )
                )
            }
        </>

        
    )
}
