import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// mock data to show match information
function createData(
  league: string,
  country: string,
  date: string,
  homeTeam: string,
  awayTeam: string
) {
  return { league, country, date, homeTeam, awayTeam };
}

const rows = [
  createData("NBA", "USA", "April 20, 2021", "Lakers", "Nets")
];

export default function MatchTable() {
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
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.league}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.league}
              </TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.homeTeam}</TableCell>
              <TableCell align="right">{row.awayTeam}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
