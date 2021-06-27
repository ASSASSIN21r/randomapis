
import './App.css';
import Headerbar from './headerbar';
import API from './api';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contactus from './contactus';
function App() {
  

  return (
    <div className="App">
      <Router>
        <switch>
          <Route path='/' exact >
          <Headerbar/>
          <div id='textlink'>
      <p className='textl' id='tex'>Bored?Click to Have Some Fun With</p>
      <a className='textl' id='randlink' href='#apicards'>RandomAPI's</a>
      </div>
      <API/>
          </Route>
          <Route path='/contactus' exact>
          <Headerbar></Headerbar>
          <Contactus/>

          </Route>
        </switch>
     
      
      <div class="scrollbar" id="style-6">
      <div class="force-overflow"></div>
    </div>
    </Router>
    </div>
  );
}

export default App;
