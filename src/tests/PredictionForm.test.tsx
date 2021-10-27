import { render, screen, fireEvent } from "@testing-library/react";
import PredictionForm from "../components/PredictionForm";

test("checks if the form renders the prediction score", () => {
	localStorage.setItem("1", JSON.stringify({ htscore: "10", atscore: "14" }));
	render(<PredictionForm gameID="1" />);
	screen.getByText("10");
	screen.getByText("14");
	localStorage.removeItem("1");
});

test("checks if prediction score is submitted", () => {
	render(<PredictionForm gameID="2" />);

	const inputs = screen.getAllByRole("textbox");
	fireEvent.change(inputs[0], { target: { value: "5" } });
	fireEvent.change(inputs[1], { target: { value: "10" } });
	fireEvent.click(screen.getByRole("button"));

	expect(screen.queryAllByRole("textbox").length).toEqual(0);
	screen.getByText("5");
	screen.getByText("10");

	localStorage.removeItem("2");
});

test("checks if prediction score is not submitted if only one box is filled", () => {
	render(<PredictionForm gameID="3" />);

	const inputs = screen.getAllByRole("textbox");
	fireEvent.change(inputs[0], { target: { value: "5" } });
	fireEvent.click(screen.getByRole("button"));

	expect(screen.queryAllByRole("textbox").length).toEqual(2);

	localStorage.removeItem("3");
});
