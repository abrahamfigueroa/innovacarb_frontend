import './App.css';
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
          <RouterProvider router={router} />
    </div>
  );
}

export default App;
