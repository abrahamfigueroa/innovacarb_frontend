import './App.css';
import { Home } from './Components/Home';
import About from './Components/About';
import Process from './Components/Process';
import CheckoutForm from './Components/CheckoutForm';
import {stripePromise} from './Components/CheckoutForm'
// import { useTheme } from '@mui/material/styles';
// import { CssBaseline, makeStyles } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  Elements,
} from "@stripe/react-stripe-js";

function App() {
  return (
    <div className='App'>
      <Home />
      <About />
      <Process />
      <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row h-100">
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
