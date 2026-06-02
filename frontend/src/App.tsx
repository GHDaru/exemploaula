import { useState } from 'react';
import { Container, TextField, Typography, Box } from '@mui/material';

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          type="number"
          label="Num 1"
          value={num1}
          onChange={(e) => setNum1(Number(e.target.value))}
        />
        <Typography variant="h4">+</Typography>
        <TextField
          type="number"
          label="Num 2"
          value={num2}
          onChange={(e) => setNum2(Number(e.target.value))}
        />
        <Typography variant="h4">=</Typography>
        <Typography variant="h4">{num1 + num2}</Typography>
      </Box>
    </Container>
  );
}

export default App;
