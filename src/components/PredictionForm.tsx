import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function PredictionForm(){

  const [HTScore, setHTScore] = React.useState<string>("");
  const [ATScore, setATScore] = React.useState<string>("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
    localStorage.setItem("htscore", HTScore)
    localStorage.setItem("atscore", ATScore)
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitForm}
    >
      <div>
        <TextField
          id="outlined-basic"
          // pass in home team name as props
          label="Team 1 Score"
          value={HTScore}
          onChange={(
            ev: React.ChangeEvent<HTMLInputElement>,
        ): void => setHTScore(ev.target.value)}
        />
        <TextField
          id="outlined-basic"
          // pass in away team name as props
          label="Team 2 Score"
          value={ATScore}
          onChange={(
            ev: React.ChangeEvent<HTMLInputElement>,
        ): void => setATScore(ev.target.value)}
        />
      {/* When a user clicks submit, the values will display next to the match and stored in localStorage */}
      </div>
        <button type="submit">Submit</button>
    </Box>
  );
}

