import { render, screen } from "@testing-library/react";
import App from "../App";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { API_URL, GAMES } from "../constants";

const mockAdapter = new MockAdapter(axios);

test("checks if the page renders the response data correctly", async () => {
	mockAdapter.onGet(`${API_URL}${GAMES}`).replyOnce(200, {
		response: [
			{
				id: "1",
				league: { name: "KC" },
				teams: {
					home: { name: "Raptors" },
					away: { name: "Pacers" },
				},
				date: "2021-10-29",
				country: { name: "Canada" },
			},
		],
	});

	mockAdapter.onGet(`${API_URL}${GAMES}`).replyOnce(200, {
		response: [
			{
				id: "2",
				league: { name: "KC" },
				teams: {
					home: { name: "Lakers" },
					away: { name: "Spurs" },
				},
				date: "2021-10-30",
				country: { name: "USA" },
			},
		],
	});

	render(<App />);

	const leagues = await screen.findAllByText("KC");
	expect(leagues.length).toEqual(2);

	screen.getByText("Raptors");
	screen.getByText("Pacers");
	screen.getByText("Lakers");
	screen.getByText("Spurs");

	screen.getByText("Canada");
	screen.getByText("USA");

	screen.getByText("2021-10-29");
	screen.getByText("2021-10-30");
});
