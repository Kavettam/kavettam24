import { useState, useEffect } from "react";
import "./Board.scss";
import Spinner from "../Components/Spinner";

function Board() {
 const [boardData, setBoardData] = useState([]);
 const [lastUpdatedTime, setLastUpdatedTime] = useState(new Date());
 const [mins, setMins] = useState(0);
 const [isLoading, setIsLoading] = useState(false);

 const getLastUpdatedTime = () => {
    setMins(Math.floor(Math.abs(new Date() - lastUpdatedTime) / 60000));
 };

 const getBoardData = () => {
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbzRybl5PrzikbJChLNYwUk6i0J8tlQaaeMf4LxRmMN6xrhIPY4bArTOzXJk56y7xIo/exec" // Replace YOUR_SCRIPT_ID with your actual script ID
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const leaderboardData = data.data.map((item) => {
            // Assuming the first key in each item object is the team name and the second key is the points
            const teamName = Object.keys(item)[0];
            const points = Object.values(item)[0];
            return { Team: teamName, Points: points };
          });

          setBoardData(
            leaderboardData.sort((a, b) => b.Points - a.Points)
          );
          setIsLoading(false);
          setLastUpdatedTime(new Date());
          getLastUpdatedTime();
        } else {
          window.alert("Failed to fetch data");
        }
      })
      .catch((error) => window.alert("Loading Failed"));
 };

 useEffect(() => {
    getBoardData();
 }, []);

 useEffect(() => {
    const interval1 = setInterval(() => {
      getBoardData();
    }, 1000 * 60 * 5); // Fetch data every 5 minutes
    return () => clearInterval(interval1);
 }, []);

 useEffect(() => {
    const interval2 = setInterval(() => {
      getLastUpdatedTime();
    }, 1000 * 60 * 1); // Update last updated time every minute
    return () => clearInterval(interval2);
 }, []);

 return (
    <div className="board--box">
      <div className="title--box">
        <h1>Leader Board</h1>
        <span>Updated {mins} minute(s) ago</span>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {boardData.map((row, index) => (
              <tr key={index}>
                <td className="teamName">{row.Team}</td>
                <td className="points">{row.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
 );
}

export default Board;
