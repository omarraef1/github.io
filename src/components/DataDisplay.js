import React, { useState, useEffect } from "react";
import { Col, ProgressBar, Row } from "react-bootstrap";

const DataDisplay = () => {
  const teamData = {
    TeamA: [
      {
        id: 1,
        team: "Team A",
        name: "Daniel Supmitchotima",
        allTimeScore: 8150,
        weeklyScore: 2800,
        img: "https://drive.google.com/uc?export=view&id=1qQ4WR9C00UBKRhDJ1dztLdJbSDlstzTe",
      },
      {
        id: 2,
        team: "Team A",
        name: "Destiny Wu",
        allTimeScore: 8700,
        weeklyScore: 1850,
        img: "https://drive.google.com/uc?export=view&id=1lqHlWChsNSK-okF7xpjdcgtl4RFNLIYZ",
      },
      {
        id: 3,
        team: "Team A",
        name: "Aaron Lui",
        allTimeScore: 7900,
        weeklyScore: 2850,
        img: "https://drive.google.com/uc?export=view&id=1M4zjzWkramzOU19_ReHfN5Kg4YmcLLEF",
      },
      {
        id: 4,
        team: "Team A",
        name: "Jonathan Vi",
        allTimeScore: 5950,
        weeklyScore: 1500,
        img: "https://drive.google.com/uc?export=view&id=13WzRvhOY3iMW-vO5KhKzBwNpvAv-9yUN",
      },
      {
        id: 5,
        team: "Team A",
        name: "Vincent Au",
        allTimeScore: 7950,
        weeklyScore: 3600,
        img: "https://drive.google.com/uc?export=view&id=1GZgWg9Iz-AdvTULE1fcXPoIp6ZVLYRm_",
      },
    ],
    TeamB: [
      {
        id: 6,
        team: "Team B",
        name: "Lillian Chan",
        allTimeScore: 6700,
        weeklyScore: 850,
        img: "https://drive.google.com/uc?export=view&id=1rzz53iQQdmRKYfpeRMDBPme8I_guAueS",
      },
      {
        id: 7,
        team: "Team B",
        name: "Anastasiia Kotsiuruba",
        allTimeScore: 4450,
        weeklyScore: 1600,
        img: "https://drive.google.com/uc?export=view&id=1S7ZI-Q2IjMBbLvBIh07E2LJvQkX08NQ6",
      },
      {
        id: 8,
        team: "Team B",
        name: "Clara Ng",
        allTimeScore: 9700,
        weeklyScore: 1850,
        img: "https://drive.google.com/uc?export=view&id=1Z2snP9zWzM-p1lftV_VCc5Tp-kdhfgnG",
      },
      {
        id: 9,
        team: "Team B",
        name: "Julianna Chiu",
        allTimeScore: 1550,
        weeklyScore: 0,
        img: "https://drive.google.com/uc?export=view&id=17g4yuK0xZJPQYdnE1aWSJxC7WgMlzmjJ",
      },
      {
        id: 10,
        team: "Team B",
        name: "Rebecca Mei",
        allTimeScore: 2550,
        weeklyScore: 0,
        img: "https://drive.google.com/uc?export=view&id=1J9iapVO2YWDHkNfHegkY57wybGLWRvMp",
      },
    ],
    TeamC: [
      {
        id: 11,
        team: "Team C",
        name: "Manyin Zhu",
        allTimeScore: 3850,
        weeklyScore: 3850,
        img: "https://drive.google.com/uc?export=view&id=1efpq4gtnNsqhQZ7uqTAzQLTEzc_vDZKQ",
      },
      {
        id: 12,
        team: "Team C",
        name: "Bionica Lee",
        allTimeScore: 1350,
        weeklyScore: 1350,
        img: "https://drive.google.com/uc?export=view&id=1vuP-XqyG9Qar5belCV5q-SmNF2tqmFZG",
      },
      {
        id: 13,
        team: "Team C",
        name: "Anna (Chu Qin) Huang",
        allTimeScore: 2850,
        weeklyScore: 2850,
        img: "https://drive.google.com/uc?export=view&id=1GLN7jcYfACY9f6QsCogPoBQJiDaXhurk",
      },
      {
        id: 14,
        team: "Team C",
        name: "Joanne Guan",
        allTimeScore: 600,
        weeklyScore: 600,
        img: "https://drive.google.com/uc?export=view&id=1_K3n3QwwSFKQW0xV-M1RvF6okPjr8Ji6",
      },
      {
        id: 15,
        team: "Team C",
        name: "Jingtong Guan",
        allTimeScore: 2350,
        weeklyScore: 2350,
        img: "https://drive.google.com/uc?export=view&id=1DisPxMJ2GmhzNWaqYBWFxJF2rDEGaX_b",
      },
    ],
    TeamD: [
      {
        id: 16,
        team: "Team D",
        name: "Manyin Zhu",
        allTimeScore: 3850,
        weeklyScore: 3850,
        img: "https://drive.google.com/uc?export=view&id=1efpq4gtnNsqhQZ7uqTAzQLTEzc_vDZKQ",
      },
      {
        id: 17,
        team: "Team D",
        name: "Bionica Lee",
        allTimeScore: 1350,
        weeklyScore: 1350,
        img: "https://drive.google.com/uc?export=view&id=1vuP-XqyG9Qar5belCV5q-SmNF2tqmFZG",
      },
      {
        id: 18,
        team: "Team D",
        name: "Anna (Chu Qin) Huang",
        allTimeScore: 2850,
        weeklyScore: 2850,
        img: "https://drive.google.com/uc?export=view&id=1GLN7jcYfACY9f6QsCogPoBQJiDaXhurk",
      },
      {
        id: 19,
        team: "Team D",
        name: "Joanne Guan",
        allTimeScore: 600,
        weeklyScore: 600,
        img: "https://drive.google.com/uc?export=view&id=1_K3n3QwwSFKQW0xV-M1RvF6okPjr8Ji6",
      },
      {
        id: 20,
        team: "Team D",
        name: "Jingtong Guan",
        allTimeScore: 2350,
        weeklyScore: 2350,
        img: "https://drive.google.com/uc?export=view&id=1DisPxMJ2GmhzNWaqYBWFxJF2rDEGaX_b",
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
                          <span>{team.team}</span>
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
                              max={3850}
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
                          <span>{team.team}</span>
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
                              max={3850}
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
