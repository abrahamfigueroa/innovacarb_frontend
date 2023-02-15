import './App.css';
import { Home } from './Components/Home';
import About from './Components/About';
import Process from './Components/Process';
import Questions from './Components/Questions';
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
      <Process />
    </div>
  );
}

export default App;
