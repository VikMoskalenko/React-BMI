
import './App.css'
import CardTitle from './assets/CardTitle.jsx';
import Card from './Card.jsx'
import BmiCalculator from './BmiCalculator.jsx';
function App() {


  return (
    <>
         <CardTitle title="BMI Calculator" description="Check it right now"></CardTitle>
      <BmiCalculator />
  </>
  );
}

export default App;
