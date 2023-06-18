import React, { useState, useEffect } from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap'


const DataDisplay = () => {
    const Leaderboard = [
        {
            name: "Daniel Supmitchotima",
            score: 1100,
            week_score: 1100,
            img: "https://drive.google.com/uc?export=view&id=1qQ4WR9C00UBKRhDJ1dztLdJbSDlstzTe"
        }
        ,
        {
            name: "Destiny Wu",
            score: 2350,
            week_score: 2350,
            img: "https://drive.google.com/uc?export=view&id=1lqHlWChsNSK-okF7xpjdcgtl4RFNLIYZ"
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
            score: 1350,
            week_score: 1350,
            img: "https://drive.google.com/uc?export=view&id=13WzRvhOY3iMW-vO5KhKzBwNpvAv-9yUN"
        }
        ,
        {
            name: "Vincent Au",
            score: 1850,
            week_score: 1850,
            img: "https://drive.google.com/uc?export=view&id=1GZgWg9Iz-AdvTULE1fcXPoIp6ZVLYRm_"
        }
        ,
        {
            name: "Lillian Chan",
            score: 700,
            week_score: 700,
            img: ""
        }
        ,
        {
            name: "Anastasiia Kotsiuruba",
            score: 850,
            week_score: 850,
            img: "https://drive.google.com/uc?export=view&id=1S7ZI-Q2IjMBbLvBIh07E2LJvQkX08NQ6"
        }
        ,
        {
            name: "Clara Ng",
            score: 2350,
            week_score: 2350,
            img: "https://drive.google.com/uc?export=view&id=1Z2snP9zWzM-p1lftV_VCc5Tp-kdhfgnG"
        }
        ,
        {
            name: "Julianna Chiu",
            score: 500,
            week_score: 500,
            img: "https://drive.google.com/uc?export=view&id=17g4yuK0xZJPQYdnE1aWSJxC7WgMlzmjJ"
        }
        ,
        {
            name: "Rebecca Mei",
            score: 1200,
            week_score: 1200,
            img: "https://drive.google.com/uc?export=view&id=1J9iapVO2YWDHkNfHegkY57wybGLWRvMp"
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
                    <button onClick={() => handleButtonClick('score')}>Cumulative</button>
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
                                            <Col sm={2}><p><small>Cumulative:</small></p></Col>
                                            <Col sm={10}><ProgressBar min={10} max={2350} now={item.score} label={`${item.score} PTS`} /></Col>
                                        </Row>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="info">
                                        <Row>
                                            <Col sm={2}><p><small>Weekly:</small></p></Col>
                                            <Col sm={10}><ProgressBar min={1} max={2350} now={item.week_score} label={`${item.week_score} PTS`} /></Col>
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
