// import React from 'react'
// import { Col, Container, ProgressBar, Row } from 'react-bootstrap'

// export default function profiles({ Leaderboard }) {
//     return (
//         <div id="profile">
//             {Item(Leaderboard)}
//         </div>

//     )
// }

// function Item(data) {
//     return (

//         <>
//             {


//                 data.map((value, index) => (

//                     <div className="flex" key={index}>
//                         <div className="item">
//                             <img src={value.img} alt="img__" />

//                             <div className="info">
//                                 <h3 className='name text-dark'>{value.name}</h3>
//                                 <span>{value.location}</span>
//                             </div>
//                         </div>
//                         <div className="info">
//                             <Row>
//                                 <Col sm={2}><p><small>Weekly:</small></p></Col>
//                                 <Col sm={10}><ProgressBar min={10} max={1000} now={value.week_score} label={`${value.week_score} PTS`} /></Col>
//                             </Row>
//                         </div>
//                         <div className="info">
//                             <Row>
//                                 <Col sm={2}><p><small>All Times:</small></p></Col>
//                                 <Col sm={10}><ProgressBar min={10} max={100000} now={value.score} label={`${value.score} PTS`} /></Col>
//                             </Row>
//                         </div>
//                     </div>
//                 )
//                 )
//             }
//         </>


//     )
// }
