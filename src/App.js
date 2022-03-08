import { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Box from './components/Box';

function App() {
  const [colors, setColors] = useState([
    '#0388E0',
    '#E53458',
    '#8C7A5B',
    '#B85E61',
    '#7F00CB',
    '#00B19F',
    '#017A67',
    '#6953FE',
    '#475C6D',
  ]);

  return (
    <div className="app">
      <Grid>
        {colors &&
          colors.map((color, index) => (
            <Box
              key={index}
              color={color}
              number={index + 1}
              handleClick={() => setColors([...colors.sort(() => 0.5 - Math.random())])}
            />
          ))}
      </Grid>
    </div>
  );
}

export default App;
