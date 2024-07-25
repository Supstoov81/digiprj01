import Tick from "./Tick";
import MonForm01 from "./MonForm01.js";
/**
* Comp01 est un composant React (JSX)
* @returns un render
*/
function Comp01(props) {
  return(<h1>{props.message}</h1>)
}


/**
* 
* @returns 
*/
function App() {

  return (
    <div>
      <MonForm01 />
    </div>
  );
}
export default App