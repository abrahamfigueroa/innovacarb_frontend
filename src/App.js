import './App.css';
import { Landing } from './Components/Landing';
import About from './Components/About';
import Process from './Components/Process';
import Questions from './Components/Questions';
import {stripePromise} from './Components/CheckoutForm'
// import { useTheme } from '@mui/material/styles';
// import { CssBaseline, makeStyles } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './pages/Home';
import Schedules from './pages/Schedules';
import {Elements} from "@stripe/react-stripe-js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='schedules' element={<Schedules />} />
      {/* ... etc. */}
    </Route>
  )
);

function App() {
  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;


// <div className="col-md-4 offset-md-4 h-100">