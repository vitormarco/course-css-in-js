import { Calendar, Day } from "./components/Calendar";
import DAYS from "./utils/days";


function App() {
  return (
    <Calendar>
      {DAYS.map(day => (
        <Day key={day}>{day}</Day>
      ))}
    </Calendar>
  )
}

export default App
