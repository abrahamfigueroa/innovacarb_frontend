import './App.css';
import { Landing } from './Components/Landing';
import About from './Components/About';
import Process from './Components/Process';
import Questions from './Components/Questions';
import CheckoutForm from './Components/CheckoutForm';
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
// import { Home, Schedule } from '@mui/icons-material';
import Schedules from './pages/Schedules';
import {
  Elements,
} from "@stripe/react-stripe-js";

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
      <About />
      <Process />
      <Elements stripe={stripePromise}>
      <div className="container-fluid">
        <div className="">
          <div className="col-md-4 offset-md-4 h-100">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
    </div>
  );
}

export default App;


// <div className="col-md-4 offset-md-4 h-100">