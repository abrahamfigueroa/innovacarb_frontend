import './App.css';
import { Home } from './Components/Home';
import About from './Components/About';
// import { useTheme } from '@mui/material/styles';
// import { CssBaseline, makeStyles } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
    </div>
  );
}

export default App;
