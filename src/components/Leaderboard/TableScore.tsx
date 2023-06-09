import React, { useEffect, useState } from "react";
import "../../styles/TableScore.css";
import { getLeaderboardData } from "../../firebase";
import { leaderData } from "../../firebase";

function TableScore(props: any) {
  const { levelId, levelName } = props;
  const [leaderData, setLeaderData] = useState<leaderData[]>([]);

  const helpFunction = async () => {
    setLeaderData(await getLeaderboardData(levelId));
  };

  const convertToDate = (dateObject: any) => {
    return `${dateObject.getDay()}/${dateObject.getMonth()}/
    ${dateObject.getFullYear()}   ${dateObject.getMinutes()}-${dateObject.getHours()}`;
  };

  useEffect(() => {
    helpFunction();
  }, [levelId]);

  return (
    <div className="TableScore">
      <div className="heading">Leaders of {levelName}</div>
      <table className="table" cellSpacing={0}>
        <thead>
          <tr className="table-heading">
            <th>Place</th>
            <th>Name</th>
            <th>Time</th>
            <th>Date d/m/y</th>
          </tr>
        </thead>
        <tbody>
          {leaderData.map((leader: any, index: number) => (
            <tr key={leader.name}>
              <td>{index + 1}</td>
              <td>{leader.name}</td>
              <td>{leader.time} sec</td>
              <td>{convertToDate(leader?.date.toDate())}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableScore;
