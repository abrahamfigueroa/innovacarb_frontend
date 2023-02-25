import './App.css';
// import { Landing } from './Components/Landing';
// import About from './Components/About';
// import Process from './Components/Process';
// import Questions from './Components/Questions';
// import {stripePromise} from './Components/CheckoutForm'
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
import Home from './Pages/Home';
import Schedules from './Pages/Schedules';
// import {Elements} from "@stripe/react-stripe-js";
import LogIn from './Pages/LogIn'
import SignUp from './Pages/SignUp'
import Pricing from './Pages/Pricing'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='schedules' element={<Schedules />} />
      <Route path='login' element={<LogIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='*' element={<p>Hijole joven, aquí no hay nada :C</p>} />
    </Route>
  )
);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;