import React, { useEffect, useState } from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap';

export default function TraineesDataDisplay() {
    const TraineesLeaderboard = [
    
    {
        name: "Alissa Nitedthunyakij",
        score: 6800,
        week_score: 6800,
        img: "https://drive.google.com/uc?export=view&id=1ikorMHT2LIzyf3Hm3zLiJReOr-5WZR-3"
    }
    ,
    {
        name: "Joanne Zeng",
        score: 5550,
        week_score: 5550,
        img: "https://drive.google.com/uc?export=view&id=1cbkSE9RdRTD6lMQB_zQF-GICrBuj7Psc"
    }
    ,
    {
        name: "Karim ELbarbary",
        score: 1800,
        week_score: 1800,
        img: "https://drive.google.com/uc?export=view&id=1cEs5GYxVxYPxCOHt9aUyb3KfgRTouS8i"
    }
    ,
    {
        name: "Theresa Pham",
        score: 6000,
        week_score: 6000,
        img: "https://drive.google.com/uc?export=view&id=16EaWli6Afv4NEc2t9Z4oMKP7H4iFkV-q"
    }
    ,
    {
        name: "Omar Raef",
        score: 1000,
        week_score: 1000,
        img: "https://drive.google.com/uc?export=view&id=1fe8jMHj98vTkk3kqtcMOIBQ4Omlj-drX"
    }
    ,
    {
        name: "Alina Bushma",
        score: 500,
        week_score: 500,
        img: "https://drive.google.com/uc?export=view&id=1-7IINNAaF3iWmfXJvG1fnqyBPCuaCDwk"
    }
    ,
    {
        name: "Roonak Thapa",
        score: 500,
        week_score: 500,
        img: "https://drive.google.com/uc?export=view&id=1LIpbXzQJ3jrnfR7Sz4oI9Jm3I4ucRgtH"
    }
    ,
    {
        name: "Kaitlyn Lin",
        score: 7100,
        week_score: 7100,
        img: "https://drive.google.com/uc?export=view&id=1DcBBkN12BB7FetApMDvfJ3odAgPkdEcS"
    }
    ,
    {
        name: "Richard Fong",
        score: 4500,
        week_score: 4500,
        img: "https://drive.google.com/uc?export=view&id=1bfyAWwUZmGitXC7vWSg99MlEeZQp6fRu"
    }
    ];

    const [selectedAttribute, setSelectedAttribute] = useState('score');
    const [sortedData, setSortedData] = useState([]);
    const [unsortedData] = useState(TraineesLeaderboard);

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
                                            <Col sm={10}><ProgressBar min={10} max={7100} now={item.score} label={`${item.score} PTS`} /></Col>
                                        </Row>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="info">
                                        <Row>
                                            <Col sm={2}><p><small>Weekly:</small></p></Col>
                                            <Col sm={10}><ProgressBar min={1} max={7100} now={item.week_score} label={`${item.week_score} PTS`} /></Col>
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
