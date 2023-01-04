import React, { useEffect, useState } from "react";
import LeaderBoard from "../../components/LeaderBoard/LeaderBoard";
import timetricFormula from "../../assets/images/timetric_latex.png";

export default function LearderboardPage({
  players,
  getPlayersList,
  getGamesList,
  details,
  toggleDetails,
  tournamentCode,
  setPlayers,
}) {
  const [rankModal, setRankModal] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const showModal = () => {
    setRankModal(!rankModal);
    console.log(rankModal);
  };

  return (
    <div>
      <div className="center">
        <h2 className="page-title">Leaderboard</h2>
        <button className="button mtopmd" onClick={showModal}>
          {rankModal ? (
            "hide details"
          ) : (
            <span className="case">
              what is the <span className="case">Table Index Modifier</span>
            </span>
          )}
        </button>
        <div className={`rank-modal ${rankModal ? "show" : ""}`}>
          <h3>
            <span className="case">T.I.M. (Table Index Modifier)</span>
          </h3>
          <p>
            Both your position in the table, and where you will be after each game, is determined by your{" "}
            <span className="case">T.I.M.</span>
          </p>

          {/* <p>win rate = W / (W+L)</p> */}
          <p>(In the case of a tie between two players in the ranking, average point difference is used)</p>
          {/* <p>point difference = difference in points</p>
          <p>crown wins = wins while you're the kingpong</p> */}
          <br />
          <h3>
            what is the <span className="case">Table Index Modifier</span>?
          </h3>
          <img src={timetricFormula} alt="timetric formula" />
          <p>
            every player starts with a <span className="case">T.I.M.</span> of 1.0
          </p>
          <p>
            the winner of the game takes an ammount of <span className="case">T.I.M.</span> from the loser
          </p>
          <p>
            the amount is the score difference divided by 100 and then multiplied by the losers{" "}
            <span className="case">T.I.M.</span>, rounded up to the nearest 0.01.
          </p>
          <p>or</p>
          <p>
            (scoreDifference / 100) * losers <span className="case">T.I.M.</span>
          </p>
          <h4>Example:</h4>
          <p>
            Matt has a <span className="case">T.I.M.</span> of 1.50, and Fred has a <span className="case">T.I.M.</span> of
            0.75.
          </p>
          <p>
            If Matt beats Fred by 10 points, he takes 0.08 of Freds <span className="case">T.I.M.</span>, and their new{" "}
            <span className="case">T.I.M.</span>'s are 1.58 & 0.67 respectively.
          </p>
          <p>
            Whereas if Fred beats Matt by 10 points, he takes 0.15 of Matts <span className="case">T.I.M.</span>, and their
            new <span className="case">T.I.M.</span>'s are 1.35 & 0.9.
          </p>
          <h4>tldr;</h4>
          <p>
            Winner takes losers points. Oh how the mighty <del>have fallen</del> will fall.
          </p>
          {/* <h3>Why <span className="case">Table Index Modifer</span>?</h3>
          <h4>Its simple</h4>
          <p>your score difference is the only variable, so you can work it out in your head</p>
          <h4>Its scalable</h4>
          <p>the net total of all scores is equal to the number of players on the table</p>
          <h4>Its fair</h4>
          <p>
            sorting by average scores or win ratios mean a player could win one game, get to the top then stop playing
            <br />
            <span className="case">T.I.M.</span> rewards continued play
          </p> */}
        </div>
        {/* <h3>who is the kingpong</h3>npm
        <p>👑 = current kingpong</p>
        <p>to take the crown defeat the current king</p> */}
        <br />
        {/* <p>
          <strong>players without any games don't appear in the list</strong>
        </p> */}
      </div>
      <LeaderBoard players={players} details={details} toggleDetails={toggleDetails} setPlayers={setPlayers} />
      <br />
      <p className="center">
        the red line separates those above 1.0 <span className="case">T.I.M.</span> from the hopefulls!
      </p>
    </div>
  );
}
