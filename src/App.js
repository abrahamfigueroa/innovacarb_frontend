import './App.css';
import { Home } from './Components/Home';
import About from './Components/About';
import Process from './Components/Process';
import Questions from './Components/Questions';
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
      <Questions />
    </div>
  );
}

export default App;
