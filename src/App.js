
import { BrowserRouter } from 'react-router-dom';
import './App.css';
/* import Myapp from './components/Routing/Myapp'; */
import MyApp from './DynamicRouting/MyApp';
/* import Loginhandle from './components/conditional/Loginhandle'; */
/* import UserLogged from './components/conditional/UserLogged'; */
/* import User from './components/conditional/User'; */

/* import Usecallback from './components/callback/Usecallback'; */
/* import ParentComp from './components/codeevolution/ParentComp';
 */
/* import Usememo from './components/Usememo'; */
/* import Counter from './components/Counter'; */
/* import Fetchapi from './components/Fetchapi'; */
//import Studentsdata from './components/Studentsdata';
/* import Usereducerdemo from './components/Usereducerdemo';
import UsestateDemo from './components/UsestateDemo'; */
/* import UseReducer from './components/UseReducer';
import UseState from './components/UseState'; */

function App() {
  return (
    <div className="App">
       {/*  <UseState/>
        <UseReducer/> */}
        {/* <UsestateDemo/>
        <Usereducerdemo/>
        <Counter/> */}
        {/* <Fetchapi/> */}
       {/*  <Studentsdata/> */}
      {/*  <Usememo/> */}
      {/* <Usecallback/> */}
      {/* <ParentComp/> */}
      {/* <User/> */}
      {/* <UserLogged/> */}
      {/* <Loginhandle/> */}
      {/* <BrowserRouter>
      <Myapp/>
      </BrowserRouter> */}
      <BrowserRouter>
          <MyApp/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
