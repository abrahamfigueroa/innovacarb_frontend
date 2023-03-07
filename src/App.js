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
  Router,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './Pages/Home';
import Schedules from './Pages/Schedules/Schedules';
import Profile from './Pages/Profile/Profile';
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import Pricing from './Pages/Pricing/Pricing'
import DashboardUser from './Pages/DashboardUser/DashboardUser'
import Datepicker from './Pages/DatePicker/Datepicker'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path='schedules' element={<Schedules />} />
      <Route path='profile' element={<Profile />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='dashboarduser' element={<DashboardUser />} />
      <Route path='datepicker' element={<Datepicker />} />
      {/* <Route path='*' element={<NotFoundPage />} /> */}
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