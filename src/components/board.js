import React from 'react'
// import Profiles from './profiles';
// import { Leaderboard } from './database';
import DataDisplay from './DataDisplay';



export default function Board() {

//     const [period, setPeriod] = useState(0);

//   const handleClick = (e) => {
     
//     setPeriod(e.target.dataset.id)
//   }

  return (
    <div className="board">
        <div>
            <img src="https://drive.google.com/uc?export=view&id=1X4WwQHzm5jt4HsP-7VMZhrNioVSITVbD" alt="logo" width="70px" />
        </div>
        <h1 className='leaderboard'>E1T1 Summer 2023 Leaderboards</h1>

        {/* <div className="duration">
            <button onClick={handleClick} data-id='7'>Weekly</button>
            <button onClick={handleClick} data-id='0'>All-Time</button>
        </div> */}

        {/* <Profiles Leaderboard={between(Leaderboard, period)}></Profiles> */}
        <DataDisplay/>

    </div>
  )
}



// function between(data, between){
//     if(between < 6){
//     const today = new Date();
//     const previous = new Date(today);
//     previous.setDate(previous.getDate() - (between + 1));

    
//     let filter = data.filter(val => {
//         let userDate = new Date(val.dt);
//         if (between < 6) return val;
//         return previous <= userDate && today >= userDate;
//     })

//     // sort with asending order
//     return filter.sort((a, b) => {
//         if ( a.score === b.score){
//             return b.score - a.score;
//         } else{
//             return b.score - a.score;
//         }
//     })
//     }
//     else if (between > 6){

//     const today = new Date();
//     const previous = new Date(today);
//     previous.setDate(previous.getDate() - (between + 1));

    
//     let filter = data.filter(val => {
//         let userDate = new Date(val.dt);
//         if (between > 6) return val;
//         return previous <= userDate && today >= userDate;
//     })

//     // sort with asending order
//     return filter.sort((a, b) => {
//         if ( a.week_score === b.week_score){
//             return b.week_score - a.week_score;
//         } else{
//             return b.week_score - a.week_score;
//         }
//     })
//     }
// }
