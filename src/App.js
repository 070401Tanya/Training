import logo from './logo.svg';
import './App.css';
import Count from './Component/Count';
import UseEffectFunction from './Component/UseEffectfunction';
import ExpensComp from './Component/UseMemofunction';
import ParentComp from './Component/UseCallbackFunction';
import MasterPage from './Component/MasterPage';
import PractiseEffect from './Component/PractiseEffect'
import FactorialCalculator from './Component/MemoCallback'
import PractiseState from './Component/PractiseState';
import PractiseRef from './Component/PractiseRef';

const HomePage= ()=>{
  return(
<div>
<h6>hello its a home page</h6>
</div>
  );
}
function App() {
  return (
    <div className="App">
      <MasterPage>
        <PractiseEffect/>
        <PractiseState/>
         <PractiseRef/>
        <FactorialCalculator/>
        
        {/* <HomePage/>
   <Count/>
   <UseEffectFunction/>
   <ExpensComp/>
   <ParentComp/> */}
   </MasterPage>
    </div>
  );
}

export default App;
