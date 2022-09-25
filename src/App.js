import {
  
  Routes,
  Route,
} from "react-router-dom";
// import ApiTable from './ApiTable';
import './App.css';
// import CardTable from './CardTable';
// import Useefect from './Useefect';
// import Card from './Card'
import Home from './Home';
import Login from "./Login";
import Details from "./Details";
// import FormInput from "./FormInput";

function App() {
  return (
   <>
   
    <Routes>
        <Route exact path="/" element={<Home/>}>
          {/* <Route path="/forminput" element={<FormInput/>}/> */}
          <Route path="/login" element={<Login/>}/>
          <Route path="/details" element={<Details/>}/>
        </Route>
    </Routes>
  
    {/* <Card/> */}
    {/* <Useefect/> */}
    {/* <ApiTable/> */}
    {/* <CardTable/> */}
   </>                                         
  );
}

export default App;
