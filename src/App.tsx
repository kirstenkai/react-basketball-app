import React, { useEffect } from "react";
import MatchTable from "./components/MatchesTable";

import "./App.css";
import { getGames } from "./requests";

type Game = {
  id: string;
  country: string;
  date: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
};

function App() {
	// assign match information
	const [matchData, setMatchData] = React.useState<Array<Game>>([]);

	useEffect(() => {
		const getMatches = async () => {
			let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      let dayAfter = new Date(tomorrow);
      dayAfter.setDate(dayAfter.getDate() + 1);

      // Need to add timezone considerations
			const tomorrowData = await getGames(tomorrow.toISOString().split("T")[0]);
			const dayAfterData = await getGames(dayAfter.toISOString().split("T")[0]);

      const matches = [...tomorrowData, ...dayAfterData];
			setMatchData(matches);
		};

		getMatches();
	}, []);

	return (
		<div className="App">
			<h1>GameOn - Basketball Matches Score Predictions</h1>
			<h2>Upcoming Matches</h2>
			<MatchTable games={matchData}/>
		</div>
	);
}

export default App;
