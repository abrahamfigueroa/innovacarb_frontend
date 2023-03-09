import {InlineWidget} from 'react-calendly'

export default function Datepicker() {
  return (
      <div>
        <br></br>
        <div className="infoDatepicker">
        <h1>Elige tu próxima cita</h1>
        <p>¡Hola! Indícanos en qué días deseas que recolectemos tus desechos de café</p>
        <br></br>
        </div>
        <InlineWidget url="https://calendly.com/abraham-figueroaj/30min" />
      </div>
  )
}
// class Calendly extends Component {
//   componentDidMount() {
//     // whatever stuff you need here
//   }
//   componentWillUnmount() {
//     // whatever cleanup stuff you need here
//   }
//   render(){
//     return (
//       <div>
//         <InlineWidget url="https://calendly.com/username/15min" />
//       </div>
//     );
//   }
// }
