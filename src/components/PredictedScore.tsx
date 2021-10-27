import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import { InferProps } from "prop-types";
import { predictedScorePropTypes } from "../propTypes";

const Grid = styled(MuiGrid)(({ theme }) => ({
	width: "100%",
	...theme.typography.body2,
}));

const PredictedScore = ({
	htscore,
	atscore,
}: InferProps<typeof predictedScorePropTypes>) => {
	return (
		<Grid container>
			<Grid item xs>
				{/* home team predicted score */}
				{htscore}
			</Grid>
			<Grid item xs>
				-
			</Grid>
			<Grid item xs>
				{/* away team predicted score */}
				{atscore}
			</Grid>
		</Grid>
	);
};

export default PredictedScore;
