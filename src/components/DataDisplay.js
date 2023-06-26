import React, { useState, useEffect } from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap'


const DataDisplay = () => {
    const Leaderboard = [
        {
            name: "Daniel Supmitchotima",
            score: 5350,
            week_score: 2000,
            img: "https://drive.google.com/uc?export=view&id=1qQ4WR9C00UBKRhDJ1dztLdJbSDlstzTe"
        }
        ,
        {
            name: "Destiny Wu",
            score: 6850,
            week_score: 3000,
            img: "https://drive.google.com/uc?export=view&id=1lqHlWChsNSK-okF7xpjdcgtl4RFNLIYZ"
        }
        ,
        {
            name: "Aaron Lui",
            score: 5050,
            week_score: 5050,
            img: "https://drive.google.com/uc?export=view&id=1M4zjzWkramzOU19_ReHfN5Kg4YmcLLEF"
        }
        ,
        {
            name: "Jonathan Vi",
            score: 4450,
            week_score: 2500,
            img: "https://drive.google.com/uc?export=view&id=13WzRvhOY3iMW-vO5KhKzBwNpvAv-9yUN"
        }
        ,
        {
            name: "Vincent Au",
            score: 4350,
            week_score: 2500,
            img: "https://drive.google.com/uc?export=view&id=1GZgWg9Iz-AdvTULE1fcXPoIp6ZVLYRm_"
        }
        ,
        {
            name: "Lillian Chan",
            score: 5850,
            week_score: 3000,
            img: "https://drive.google.com/uc?export=view&id=1rzz53iQQdmRKYfpeRMDBPme8I_guAueS"
        }
        ,
        {
            name: "Anastasiia Kotsiuruba",
            score: 2850,
            week_score: 500,
            img: "https://drive.google.com/uc?export=view&id=1S7ZI-Q2IjMBbLvBIh07E2LJvQkX08NQ6"
        }
        ,
        {
            name: "Clara Ng",
            score: 7850,
            week_score: 3500,
            img: "https://drive.google.com/uc?export=view&id=1Z2snP9zWzM-p1lftV_VCc5Tp-kdhfgnG"
        }
        ,
        {
            name: "Julianna Chiu",
            score: 1550,
            week_score: 1050,
            img: "https://drive.google.com/uc?export=view&id=17g4yuK0xZJPQYdnE1aWSJxC7WgMlzmjJ"
        }
        ,
        {
            name: "Rebecca Mei",
            score: 2550,
            week_score: 1000,
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
                                            <Col sm={10}><ProgressBar min={10} max={7850} now={item.score} label={`${item.score} PTS`} /></Col>
                                        </Row>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="info">
                                        <Row>
                                            <Col sm={2}><p><small>Weekly:</small></p></Col>
                                            <Col sm={10}><ProgressBar min={1} max={5050} now={item.week_score} label={`${item.week_score} PTS`} /></Col>
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
