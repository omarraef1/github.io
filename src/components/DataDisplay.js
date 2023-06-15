import React, { useState, useEffect } from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap'


const DataDisplay = () => {
    const Leaderboard = [
        {
            name: "Daniel Supmitchotima",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Destiny Wu",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Aaron Lui",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Jonathan Vi",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Vi Au",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Lillian Chan",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Anastasiia Kotsiuruba",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Clara Ng",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Julianna Chiu",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Rebecca Mei",
            score: 0,
            week_score: 0,
            img: ""
        }
    ];

    const [selectedAttribute, setSelectedAttribute] = useState('score');
    const [sortedData, setSortedData] = useState([]);
    const [unsortedData] = useState(Leaderboard);

    useEffect(() => {
        if (selectedAttribute) {
            const sortedArray = [...unsortedData].sort((a, b) => b[selectedAttribute] - a[selectedAttribute]);
            setSortedData(sortedArray);
        }
    }, [selectedAttribute, unsortedData]);

    const handleButtonClick = (attribute) => {
        setSelectedAttribute(attribute);
    };

    return (
        <div>
            <div id="profile">

                <div className="duration">
                    <button onClick={() => handleButtonClick('score')}>All Times</button>
                    <button onClick={() => handleButtonClick('week_score')}>Weekly</button>
                </div>

                {sortedData.map((item, index) => (


                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={item.img} alt="img__" />

                            <div className="info">
                                <h3 className='name text-dark'>{item.name}</h3>
                                <span>{item.location}</span>
                            </div>
                        </div>


                        <p>
                            {selectedAttribute === 'score' ? (
                                <>
                                    <div className="info">
                                        <Row>
                                            <Col sm={2}><p><small>All Times:</small></p></Col>
                                            <Col sm={10}><ProgressBar min={10} max={10000} now={item.score} label={`${item.score} PTS`} /></Col>
                                        </Row>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="info">
                                        <Row>
                                            <Col sm={2}><p><small>Weekly:</small></p></Col>
                                            <Col sm={10}><ProgressBar min={1} max={100} now={item.week_score} label={`${item.week_score} PTS`} /></Col>
                                        </Row>
                                    </div>
                                </>
                            )}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataDisplay;
