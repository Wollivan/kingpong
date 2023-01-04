import React, { useState } from "react";
import "./NoticeModal.scss";

export default function NoticeModal() {
  const [seenNotice, setSeenNotice] = useState(false);
  const hideNotice = () => {
    console.log("her");
    localStorage.setItem("seenNotice", "true");
    setSeenNotice(true);
  };
  return (
    <div className={`modal ${seenNotice ? "hide" : ""}`}>
      <div class="modal-content">
        <h2>Important update!</h2>
        <h2>SCORES HAVE BEEN RESET</h2>
        <p>
          Now that we are using Elo rating system for ranking, there is no need to reset the data every month, as new players
          start with 1500 and will go up and down naturally as they play.
        </p>
        <p>
          Because there were issues with the Elo calculations at the start, the numbers were a little dodgy,{" "}
          <strong>so all players have been reset to 1500 Elo and all games have been removed.</strong>
        </p>
        <p>THIS WILL BE THE LAST TIME THAT HAPPENS BARRING A MAJOR ISSUE</p>
        <p>Thank you so much for using the app, you've made it much better and your feedback is still really appreciated!</p>
        <button onClick={hideNotice} className="button">
          Don't show me again
        </button>
      </div>
    </div>
  );
}
