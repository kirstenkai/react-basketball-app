import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import { InferProps } from "prop-types";
import { predictionFormPropTypes } from "../propTypes";
import PredictedScore from "./PredictedScore";
import { isEmpty } from "lodash";

const PredictionForm = ({
	gameID,
}: InferProps<typeof predictionFormPropTypes>) => {
	const localStorageItem = localStorage.getItem(gameID) ?? "{}";
	const prediction = JSON.parse(localStorageItem);
	const [HTScore, setHTScore] = React.useState<string>(
		prediction?.htscore ?? ""
	);
	const [ATScore, setATScore] = React.useState<string>(
		prediction?.atscore ?? ""
	);
	const [isSubmitted, setIsSubmitted] = React.useState<boolean>(
		!isEmpty(prediction)
	);

  const inputIsValid = (input: string) => {
    if (isNaN(parseInt(input.trim()))) {
      return false;
    }
    return true;
  }

	const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
		// localStorage will take the match's game id and utilize prediction scores of both teams as it's value
		event.preventDefault();

    if (!inputIsValid(HTScore) || !inputIsValid(ATScore)) {
      // Add error message 
      return;
    }
    
		const newPrediction = {
      htscore: HTScore.trim(),
			atscore: ATScore.trim(),
		};

		localStorage.setItem(gameID, JSON.stringify(newPrediction));
		setIsSubmitted(true);
	};

	return (
		<div>
			{isSubmitted && !isEmpty(prediction) ? (
				<PredictedScore htscore={HTScore} atscore={ATScore} />
			) : (
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "10ch" },
					}}
					autoComplete="off"
					onSubmit={submitForm}
				>
					<Box alignItems="center" display="flex" justifyContent="center">
						<TextField
							required
							id="outlined-basic"
							value={HTScore}
							onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
								setHTScore(ev.target.value)
							}
						/>
						<TextField
							required
							id="outlined-basic"
							value={ATScore}
							onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
								setATScore(ev.target.value)
							}
						/>
						{/* When a user clicks submit, the values will display next to the match and stored in localStorage */}
						<button type="submit">
							<CheckIcon />
						</button>
					</Box>
				</Box>
			)}
		</div>
	);
};

PredictionForm.propTypes = predictionFormPropTypes;

export default PredictionForm;
