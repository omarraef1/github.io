import React, { useState, useEffect } from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";

const DataDisplay = () => {
  const teamData = {
    Team_1: [
      {
        id: 1,
        team: "Team A",
        name: "Daniel Supmitchotima",
        TL: "Karim ElBarbary & Theresa Pham",
        allTimeScore: 8900,
        weeklyScore: 750,
        img: "https://drive.google.com/uc?export=view&id=1qQ4WR9C00UBKRhDJ1dztLdJbSDlstzTe",
      },
      {
        id: 2,
        team: "Team A",
        name: "Destiny Wu",
        TL: "Karim ElBarbary & Theresa Pham",
        allTimeScore: 9450,
        weeklyScore: 750,
        img: "https://drive.google.com/uc?export=view&id=1lqHlWChsNSK-okF7xpjdcgtl4RFNLIYZ",
      },
      {
        id: 3,
        team: "Team A",
        name: "Aaron Lui",
        TL: "Karim ElBarbary & Theresa Pham",
        allTimeScore: 10900,
        weeklyScore: 3000,
        img: "https://drive.google.com/uc?export=view&id=1M4zjzWkramzOU19_ReHfN5Kg4YmcLLEF",
      },
      {
        id: 4,
        team: "Team A",
        name: "Jonathan Vi",
        TL: "Karim ElBarbary & Theresa Pham",
        allTimeScore: 8450,
        weeklyScore: 2500,
        img: "https://drive.google.com/uc?export=view&id=13WzRvhOY3iMW-vO5KhKzBwNpvAv-9yUN",
      },
      {
        id: 5,
        team: "Team A",
        name: "Vincent Au",
        TL: "Karim ElBarbary & Theresa Pham",
        allTimeScore: 8900,
        weeklyScore: 950,
        img: "https://drive.google.com/uc?export=view&id=1GZgWg9Iz-AdvTULE1fcXPoIp6ZVLYRm_",
      },
      {
          id: 6,
          team: "Team A",
          name: "Lillian Chan",
          TL: "Karim ElBarbary & Theresa Pham",
          allTimeScore: 7200,
          weeklyScore: 500,
          img: "https://drive.google.com/uc?export=view&id=1rzz53iQQdmRKYfpeRMDBPme8I_guAueS"
      },
      {
          id: 7,
          team: "Team A",
          name: "Anastasiia Kotsiuruba",
          TL: "Karim ElBarbary & Theresa Pham",
          allTimeScore: 4950,
          weeklyScore: 500,
          img: "https://drive.google.com/uc?export=view&id=1S7ZI-Q2IjMBbLvBIh07E2LJvQkX08NQ6"
      },
      {
          id: 8,
          team: "Team A",
          name: "Clara Ng",
          TL: "Karim ElBarbary & Theresa Pham",
          allTimeScore: 10900,
          weeklyScore: 1200,
          img: "https://drive.google.com/uc?export=view&id=1Z2snP9zWzM-p1lftV_VCc5Tp-kdhfgnG"
      },
      {
          id: 9,
          team: "Team A",
          name: "Julianna Chiu",
          TL: "Karim ElBarbary & Theresa Pham",
          allTimeScore: 1550,
          weeklyScore: 0,
          img: "https://drive.google.com/uc?export=view&id=17g4yuK0xZJPQYdnE1aWSJxC7WgMlzmjJ"
      },
      {
          id: 10,
          team: "Team A",
          name: "Rebecca Mei",
          TL: "Karim ElBarbary & Theresa Pham",
          allTimeScore: 2550,
          weeklyScore: 0,
          img: "https://drive.google.com/uc?export=view&id=1J9iapVO2YWDHkNfHegkY57wybGLWRvMp"
      },
      {
        id: 11,
        team: "Team A",
        name: "Nicholas Sin",
        TL: "Karim ElBarbary & Theresa Pham",
        allTimeScore: 3050,
        weeklyScore: 3050,
        img: "",
      },
    ],
    Team_2: [
      {
        id: 12,
        team: "Team B",
        name: "Manyin Zhu",
        TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
        allTimeScore: 6100,
        weeklyScore: 2250,
        img: "https://drive.google.com/uc?export=view&id=1efpq4gtnNsqhQZ7uqTAzQLTEzc_vDZKQ",
      },
      {
        id: 13,
        team: "Team B",
        name: "Bionica Lee",
        TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
        allTimeScore: 3350,
        weeklyScore: 2000,
        img: "https://drive.google.com/uc?export=view&id=1vuP-XqyG9Qar5belCV5q-SmNF2tqmFZG",
      },
      {
        id: 14,
        team: "Team B",
        name: "Anna (Chu Qin) Huang",
        TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
        allTimeScore: 5100,
        weeklyScore: 2250,
        img: "https://drive.google.com/uc?export=view&id=1GLN7jcYfACY9f6QsCogPoBQJiDaXhurk",
      },
      {
        id: 15,
        team: "Team B",
        name: "Joanne Guan",
        TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
        allTimeScore: 3100,
        weeklyScore: 2500,
        img: "https://drive.google.com/uc?export=view&id=1_K3n3QwwSFKQW0xV-M1RvF6okPjr8Ji6",
      },
      {
        id: 16,
        team: "Team B",
        name: "Jingtong Guan",
        TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
        allTimeScore: 5100,
        weeklyScore: 2750,
        img: "https://drive.google.com/uc?export=view&id=1DisPxMJ2GmhzNWaqYBWFxJF2rDEGaX_b",
      },
      {
          id: 17,
          team: "Team B",
          name: "Selena Lee",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 0,
          weeklyScore: 0,
          img: "",
      },
      {
          id: 18,
          team: "Team B",
          name: "Victoria Tan",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 4600,
          weeklyScore: 2250,
          img: "https://drive.google.com/uc?export=view&id=1t3SVP8msfED2_K-5GTy7l5X9lvO8GSpx"
      },
      {
          id: 19,
          team: "Team B",
          name: "Evan Pham",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 5100,
          weeklyScore: 2750,
          img: "https://drive.google.com/uc?export=view&id=1H3ruHUUzbef1x-TlkWEKaevwNjeu8Jfr"
      },
      {
        id: 20,
        team: "Team B",
        name: "Frederick Wilson",
        TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
        allTimeScore: 3600,
        weeklyScore: 850,
        img: ""
      },
      {
          id: 21,
          team: "Team B",
          name: "Kyleb Raymundo",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 0,
          weeklyScore: 0,
          img: ""
      },
      {
          id: 22,
          team: "Team B",
          name: "Tessa Murphy",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 0,
          weeklyScore: 0,
          img: ""
      },
      {
          id: 23,
          team: "Team B",
          name: "Ella Tran",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 300,
          weeklyScore: 100,
          img: ""
      },
      {
          id: 24,
          team: "Team B",
          name: "Anna Nguyen",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 2750,
          weeklyScore: 900,
          img: "https://drive.google.com/uc?export=view&id=11msBfwDv48ck1G95GHHsl3DnUCTEMDxV"
      },
      ,
      {
          id: 25,
          team: "Team B",
          name: "Christopher Li",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 350,
          weeklyScore: 0,
          img: ""
      }
      ,
      {
          id: 26,
          team: "Team B",
          name: "Tyler Yee",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 4700,
          weeklyScore: 1750,
          img: "https://drive.google.com/uc?export=view&id=1GUj7qGMzHZLziHXNLqyOwieRLyfzpcl6"
      }
      ,
      {
          id: 27,
          team: "Team B",
          name: "David Lam",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 1100,
          weeklyScore: 500,
          img: ""
      }
      ,
      {
          id: 28,
          team: "Team B",
          name: "Alvin Cheng",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 5100,
          weeklyScore: 2750,
          img: "https://drive.google.com/uc?export=view&id=12tOBLcu-7sLO41IhvrpehVcN7V63eokV"
      }
      ,
      {
          id: 29,
          team: "Team B",
          name: "Jasper Heye",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 0,
          weeklyScore: 0,
          img: ""
      }
      ,
      {
          id: 30,
          team: "Team B",
          name: "Alina Nitedthunyakij",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 2600,
          weeklyScore: 1250,
          img: "https://drive.google.com/uc?export=view&id=1zaM2d89RP5B6zibOyG4RNJHY5j-k7Xs2"
      }
      ,
      {
          id: 31,
          team: "Team B",
          name: "Jacob Ho",
          TL: "Joanne Zeng, Kaitlyn Lin & Alina Bushma",
          allTimeScore: 2650,
          weeklyScore: 1000,
          img: ""
      },

    ],
    Team_3: [

      {
        id: 32,
        team: "Team C",
        name: "Bryan Leong",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 4350,
        weeklyScore: 0,
        img: "https://drive.google.com/uc?export=view&id=1d4QffZmhUCQwDHwdtaAWhgdmjz7SbvT0"
    }
    ,
    {
        id: 33,
        team: "Team C",
        name: "Darren Son",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 5700,
        weeklyScore: 500,
        img: "https://drive.google.com/uc?export=view&id=1b-mBLknlNj1HXBMYV5qAu6wxJbGNYslB"
    }
    ,
    {
        id: 34,
        team: "Team C",
        name: "Eric Cai",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 6450,
        weeklyScore: 0,
        img: ""
    }
    ,
    {
        id: 35,
        team: "Team C",
        name: "Hailey Moy",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 1950,
        weeklyScore: 500,
        img: ""
    }
    ,
    {
        id: 36,
        team: "Team C",
        name: "Jaguar Share",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 2950,
        weeklyScore: 1000,
        img: ""
    }
    ,
    {
        id: 37,
        team: "Team C",
        name: "Liyaqat Sahull",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 2350,
        weeklyScore: 750,
        img: ""
    }
    ,
    {
        id: 38,
        team: "Team C",
        name: "Keith Ho",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 3100,
        weeklyScore: 0,
        img: ""
    }
    ,
    {
        id: 39,
        team: "Team C",
        name: "Ryan Lam",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 6850,
        weeklyScore: 2000,
        img: "https://drive.google.com/uc?export=view&id=1JFGI4wa2_1llndW7ymbCLQpygaQyUXn4"
    }
    ,
    {
        id: 40,
        team: "Team C",
        name: "Samson Xu",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 7350,
        weeklyScore: 4250,
        img: "https://drive.google.com/uc?export=view&id=1MRkN_TPI8lq0jyVek8KJUea1AvCR3bKa"
    }
    ,
    {
        id: 41,
        team: "Team C",
        name: "Ian Edrina",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 2600,
        weeklyScore: 0,
        img: "https://drive.google.com/uc?export=view&id=1wnzkCL7lhr747caps0QZeg4bVWsURCd5"
    }
    ,
    {
        id: 42,
        team: "Team C",
        name: "Yolihuani Aguilar Velazquez",
        TL: "Richard Fong & Alissa Nitedthunyakij",
        allTimeScore: 2350,
        weeklyScore: 1000,
        img: "https://drive.google.com/uc?export=view&id=1APqvT7KeHPDuT21Ee1TgCF68MrMOTByS"
    }
    ],
    Team_4: [
      {
          id: 43,
          team: "Team D",
          name: "Abenezer Benniame",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 4350,
          weeklyScore: 4350,
          img: "https://drive.google.com/uc?export=view&id=1eWpxplFmUX17RR4bLdDSCUcsf52DbWtb"
      },
      {
          id: 44,
          team: "Team D",
          name: "Joseph WWalky Charles",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 0,
          weeklyScore: 0,
          img: ""
      },
      {
          id: 45,
          team: "Team D",
          name: "Naeema Hassan",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 1100,
          weeklyScore: 1100,
          img: "https://drive.google.com/uc?export=view&id=1xlInRFp6sLrBadkdK06_MneYNmpJtKa5"
      },
      {
          id: 46,
          team: "Team D",
          name: "Priyota Imam",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 100,
          weeklyScore: 100,
          img: "https://drive.google.com/uc?export=view&id=1AZxgvQxBA8p0A6mn-u6tVzffiq9-7d9O"
      },
      {
          id: 47,
          team: "Team D",
          name: "Bilal Shaikh",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 3350,
          weeklyScore: 3350,
          img: "https://drive.google.com/uc?export=view&id=16bS6JM3kkCWOvXMDxKuLtzxMGMM-1F_N"
      },
      {
          id: 48,
          team: "Team D",
          name: "Yasmine Gherbi",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 0,
          weeklyScore: 0,
          img: ""
      },
      {
          id: 49,
          team: "Team D",
          name: "Jaden Tran",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 500,
          weeklyScore: 500,
          img: "https://drive.google.com/uc?export=view&id=1FiGds5bZNmADA7aQ1GlDYHiHh0t0e82d"
      },
      {
          id: 50,
          team: "Team D",
          name: "Gael Medina",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 2350,
          weeklyScore: 2350,
          img: ""
      },
      {
          id: 51,
          team: "Team D",
          name: "Guan Cardona",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 2350,
          weeklyScore: 2350,
          img: ""
      },
      {
          id: 52,
          team: "Team D",
          name: "Thomas Moraine-Badenar",
          TL: "Roonak Thapa & Kayla Phan",
          allTimeScore: 500,
          weeklyScore: 500,
          img: "https://drive.google.com/uc?export=view&id=1KaEuOzwCoGGFKgjXeNqyH5QQdPGsKrQ-"
      },

    ],
  };

  const [displayTeams, setDisplayTeams] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [displayWeeklyScore, setDisplayWeeklyScore] = useState(false);
  const [displayAllTimeScore, setDisplayAllTimeScore] = useState(false);
  const [combinedData, setCombinedData] = useState([]);
  const teamNames = Object.keys(teamData);

  useEffect(() => {
    const combined = teamNames.reduce((acc, teamName) => {
      return acc.concat(teamData[teamName]);
    }, []);
    setCombinedData(combined);
  }, [teamNames]);

  const handleTeamButtonClick = () => {
    setDisplayTeams(true);
    setSelectedTeam(null);
    setDisplayWeeklyScore(false);
    setDisplayAllTimeScore(false);
  };

  const handleTeamSelection = (team) => {
    setSelectedTeam(teamData[team]);
    setDisplayWeeklyScore(false);
    setDisplayAllTimeScore(false);
  };

  const handleWeeklyScoreButtonClick = () => {
    setDisplayWeeklyScore(true);
    setDisplayAllTimeScore(false);
  };

  const handleAllTimeScoreButtonClick = () => {
    setDisplayWeeklyScore(false);
    setDisplayAllTimeScore(true);
  };

  const handleCombinedButtonClick = () => {
    setDisplayTeams(false);
    setSelectedTeam(combinedData);
    setDisplayWeeklyScore(false);
    setDisplayAllTimeScore(false);
  };

  return (
    <div id="profile">
      <div className="duration">
        <button onClick={handleTeamButtonClick}>Teams</button>
        <button onClick={handleCombinedButtonClick}>All Teams</button>
      </div>

      {displayTeams && (
        <>
          <div className="duration">
            {teamNames.map((team) => (
              <button key={team} onClick={() => handleTeamSelection(team)}>
                {team}
              </button>
            ))}
          </div>
        </>
      )}

      {selectedTeam && (
        <div>
          <h2>{selectedTeam.team}</h2>
          <div className="duration">
            <button onClick={handleWeeklyScoreButtonClick}>Weekly</button>
            <button onClick={handleAllTimeScoreButtonClick}>Cumulative</button>
          </div>

          {displayWeeklyScore && (
            <div>
              {selectedTeam
                .sort((a, b) => b.weeklyScore - a.weeklyScore)
                .map((team) => (
                  <>
                    <div className="flex" key={team.id}>
                      <div className="item">
                        <img src={team.img} alt="img__" />

                        <div className="info">
                          <h3 className="name text-dark">{team.name}</h3>
                          <span>{team.location}</span>
                          <span>{team.TL}</span>
                        </div>
                      </div>
                      <div className="info">
                        <Row>
                          <Col sm={2}>
                            <p>
                              <small>Weekly:</small>
                            </p>
                          </Col>
                          <Col sm={10}>
                            <ProgressBar
                              min={1}
                              max={4350}
                              now={team.weeklyScore}
                              label={`${team.weeklyScore} PTS`}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          )}
          {displayAllTimeScore && (
            <div>
              {selectedTeam
                .sort((a, b) => b.allTimeScore - a.allTimeScore)
                .map((team) => (
                  <>
                    <div className="flex" key={team.id}>
                      <div className="item">
                        <img src={team.img} alt="img__" />

                        <div className="info">
                          <h3 className="name text-dark">{team.name}</h3>
                          <span>{team.TL}</span>
                        </div>
                      </div>
                      <div className="info">
                        <Row>
                          <Col sm={2}>
                            <p>
                              <small>Cumulative:</small>
                            </p>
                          </Col>
                          <Col sm={10}>
                            <ProgressBar
                              min={1}
                              max={10900}
                              now={team.allTimeScore}
                              label={`${team.allTimeScore} PTS`}
                            />
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
