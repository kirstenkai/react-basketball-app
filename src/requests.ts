import axios from "axios";
import { API_KEY, API_URL, API_HOST, GAMES } from "./constants";
import { sanitizeGame } from "./helpers";

export const getGames = async (date: string) => {
	return await axios({
		url: `${API_URL}${GAMES}`,
		method: "get",
		params: {
			date,
		},
		headers: {
			"Content-Type": "application/json",
			"x-rapidapi-host": `${API_HOST}`,
			"x-rapidapi-key": `${API_KEY}`,
		},
	}).then((response) => response.data.response.map(sanitizeGame));
};
