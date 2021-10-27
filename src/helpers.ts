// converts the response data for a game into an object for the app
export const sanitizeGame = (data: any) => {
	return {
		id: data.id.toString(),
		country: data.country.name,
		date: data.date.split("T")[0],
		homeTeam: data.teams.home.name,
		awayTeam: data.teams.away.name,
		league: data.league.name,
	};
};
