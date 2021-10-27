import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { InferProps } from "prop-types";
import PredictionForm from "./PredictionForm";
import { matchTablePropTypes } from "../propTypes";

const MatchTable = ({ games }: InferProps<typeof matchTablePropTypes>) => {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>League</TableCell>
						<TableCell align="right">Country</TableCell>
						<TableCell align="right">Date</TableCell>
						<TableCell align="right">Home Team</TableCell>
						<TableCell align="right">Away Team</TableCell>
						<TableCell align="right">Prediction</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{games.map((game) => (
						<TableRow
							key={game.id}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{game.league}
							</TableCell>
							<TableCell align="right">{game.country}</TableCell>
							<TableCell align="right">{game.date}</TableCell>
							<TableCell align="right">{game.homeTeam}</TableCell>
							<TableCell align="right">{game.awayTeam}</TableCell>
							<TableCell align="right">
								<PredictionForm gameID={game.id} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

MatchTable.propTypes = matchTablePropTypes;

export default MatchTable;
