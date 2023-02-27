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
  Router,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import Schedules from './Pages/Schedules';
import Profile from './Pages/Profile';
import {Elements} from "@stripe/react-stripe-js";
import { Switch } from '@mui/material';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='schedules' element={<Schedules />} />
      <Route path='profile' element={<Profile />} />
      {/* <Route path='signin' element={<SignIn />} /> */}
      <Route path='*' element={<p>Not Found</p> } />

      {/* ... etc. */}
    </Route>
  )
);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />

    {/* <Router>
      <Switch>

        <Route path="/" exact> */}
        {/* {users <Home /> : <Login /> } */}
         {/* </Route> */}
        {/* <Route path="/Register">
          <Ingresa />
        </Route> */}
        {/* <Route path="/profile/:userId">
          <Profile />
        </Route>
      </Switch>
    </Router> */}

    </div>
  );
}

export default App;