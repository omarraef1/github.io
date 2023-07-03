import React, { useState, useEffect } from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap'


const DataDisplay = () => {
    const Leaderboard = [
        {
            name: "Daniel Supmitchotima",
            score: 8150,
            week_score: 2800,
            img: "https://drive.google.com/uc?export=view&id=1qQ4WR9C00UBKRhDJ1dztLdJbSDlstzTe"
        }
        ,
        {
            name: "Destiny Wu",
            score: 8700,
            week_score: 1850,
            img: "https://drive.google.com/uc?export=view&id=1lqHlWChsNSK-okF7xpjdcgtl4RFNLIYZ"
        }
        ,
        {
            name: "Aaron Lui",
            score: 7900,
            week_score: 2850,
            img: "https://drive.google.com/uc?export=view&id=1M4zjzWkramzOU19_ReHfN5Kg4YmcLLEF"
        }
        ,
        {
            name: "Jonathan Vi",
            score: 5950,
            week_score: 1500,
            img: "https://drive.google.com/uc?export=view&id=13WzRvhOY3iMW-vO5KhKzBwNpvAv-9yUN"
        }
        ,
        {
            name: "Vincent Au",
            score: 7950,
            week_score: 3600,
            img: "https://drive.google.com/uc?export=view&id=1GZgWg9Iz-AdvTULE1fcXPoIp6ZVLYRm_"
        }
        ,
        {
            name: "Lillian Chan",
            score: 6700,
            week_score: 850,
            img: "https://drive.google.com/uc?export=view&id=1rzz53iQQdmRKYfpeRMDBPme8I_guAueS"
        }
        ,
        {
            name: "Anastasiia Kotsiuruba",
            score: 4450,
            week_score: 1600,
            img: "https://drive.google.com/uc?export=view&id=1S7ZI-Q2IjMBbLvBIh07E2LJvQkX08NQ6"
        }
        ,
        {
            name: "Clara Ng",
            score: 9700,
            week_score: 1850,
            img: "https://drive.google.com/uc?export=view&id=1Z2snP9zWzM-p1lftV_VCc5Tp-kdhfgnG"
        }
        ,
        {
            name: "Julianna Chiu",
            score: 1550,
            week_score: 0,
            img: "https://drive.google.com/uc?export=view&id=17g4yuK0xZJPQYdnE1aWSJxC7WgMlzmjJ"
        }
        ,
        {
            name: "Rebecca Mei",
            score: 2550,
            week_score: 0,
            img: "https://drive.google.com/uc?export=view&id=1J9iapVO2YWDHkNfHegkY57wybGLWRvMp"
        }
        ,
        {
            name: "Manyin Zhu",
            score: 3850,
            week_score: 3850,
            img: "https://drive.google.com/uc?export=view&id=1efpq4gtnNsqhQZ7uqTAzQLTEzc_vDZKQ"
        }
        ,
        {
            name: "Bionica Lee",
            score: 1350,
            week_score: 1350,
            img: "https://drive.google.com/uc?export=view&id=1vuP-XqyG9Qar5belCV5q-SmNF2tqmFZG"
        }
        ,
        {
            name: "Anna (Chu Qin) Huang",
            score: 2850,
            week_score: 2850,
            img: "https://drive.google.com/uc?export=view&id=1GLN7jcYfACY9f6QsCogPoBQJiDaXhurk"
        }
        ,
        {
            name: "Joanne Guan",
            score: 600,
            week_score: 600,
            img: "https://drive.google.com/uc?export=view&id=1_K3n3QwwSFKQW0xV-M1RvF6okPjr8Ji6"
        }
        ,
        {
            name: "Jingtong Guan",
            score: 2350,
            week_score: 2350,
            img: "https://drive.google.com/uc?export=view&id=1DisPxMJ2GmhzNWaqYBWFxJF2rDEGaX_b"
        }
        ,
        {
            name: "Selena Lee",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Victoria Tan",
            score: 2350,
            week_score: 2350,
            img: "https://drive.google.com/uc?export=view&id=1t3SVP8msfED2_K-5GTy7l5X9lvO8GSpx"
        }
        ,
        {
            name: "Evan Pham",
            score: 2350,
            week_score: 2350,
            img: "https://drive.google.com/uc?export=view&id=1H3ruHUUzbef1x-TlkWEKaevwNjeu8Jfr"
        }
        ,
        {
            name: "Frederick Wilson",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Kyleb Raymundo",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Tessa Murphy",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Ella Tran",
            score: 200,
            week_score: 200,
            img: ""
        }
        ,
        {
            name: "Anna Nguyen",
            score: 1850,
            week_score: 1850,
            img: "https://drive.google.com/uc?export=view&id=11msBfwDv48ck1G95GHHsl3DnUCTEMDxV"
        }
        ,
        {
            name: "Christopher Li",
            score: 350,
            week_score: 350,
            img: ""
        }
        ,
        {
            name: "Tyler Yee",
            score: 2950,
            week_score: 2950,
            img: "https://drive.google.com/uc?export=view&id=1GUj7qGMzHZLziHXNLqyOwieRLyfzpcl6"
        }
        ,
        {
            name: "David Lam",
            score: 600,
            week_score: 600,
            img: ""
        }
        ,
        {
            name: "Alvin Cheng",
            score: 2350,
            week_score: 2350,
            img: "https://drive.google.com/uc?export=view&id=12tOBLcu-7sLO41IhvrpehVcN7V63eokV"
        }
        ,
        {
            name: "Jasper Heye",
            score: 0,
            week_score: 0,
            img: ""
        }
        ,
        {
            name: "Alina Nitedthunyakij",
            score: 850,
            week_score: 850,
            img: "https://drive.google.com/uc?export=view&id=1zaM2d89RP5B6zibOyG4RNJHY5j-k7Xs2"
        }
        ,
        {
            name: "Jacob Ho",
            score: 1600,
            week_score: 1600,
            img: ""
        }
        ,
        {
            name: "Bryan Leong",
            score: 2350,
            week_score: 2350,
            img: "https://drive.google.com/uc?export=view&id=1d4QffZmhUCQwDHwdtaAWhgdmjz7SbvT0"
        }
        ,
        {
            name: "Darren Son",
            score: 600,
            week_score: 600,
            img: ""
        }
        ,
        {
            name: "Eric Cai",
            score: 1350,
            week_score: 1350,
            img: ""
        }
        ,
        {
            name: "Hailey Moy",
            score: 1450,
            week_score: 1450,
            img: ""
        }
        ,
        {
            name: "Jaguar Share",
            score: 1950,
            week_score: 1950,
            img: ""
        }
        ,
        {
            name: "Liyaqat Sahull",
            score: 600,
            week_score: 600,
            img: ""
        }
        ,
        {
            name: "Keith Ho",
            score: 600,
            week_score: 600,
            img: ""
        }
        ,
        {
            name: "Ryan Lam",
            score: 1300,
            week_score: 1300,
            img: "https://drive.google.com/uc?export=view&id=1JFGI4wa2_1llndW7ymbCLQpygaQyUXn4"
        }
        ,
        {
            name: "Samson Xu",
            score: 2600,
            week_score: 2600,
            img: "https://drive.google.com/uc?export=view&id=1MRkN_TPI8lq0jyVek8KJUea1AvCR3bKa"
        }
        ,
        {
            name: "Ian Edrina",
            score: 600,
            week_score: 600,
            img: ""
        }
        ,
        {
            name: "Yolihuani Aguilar Velazquez",
            score: 1350,
            week_score: 1350,
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
                                            <Col sm={10}><ProgressBar min={1} max={9700} now={item.score} label={`${item.score} PTS`} /></Col>
                                        </Row>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="info">
                                        <Row>
                                            <Col sm={2}><p><small>Weekly:</small></p></Col>
                                            <Col sm={10}><ProgressBar min={1} max={3850} now={item.week_score} label={`${item.week_score} PTS`} /></Col>
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
