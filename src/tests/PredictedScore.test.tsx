import { render, screen } from "@testing-library/react";
import PredictedScore from "../components/PredictedScore";

test("checks if the predicted score is rendered", () => {
	render(<PredictedScore htscore="10" atscore="8" />);
	screen.getByText("10");
	screen.getByText("8");
});
