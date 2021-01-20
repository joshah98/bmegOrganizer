import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import general from './Pages/general'
import bioinformatics from './Pages/bioinformatics'
import biomechanics from './Pages/biomechanics'
import cellular from './Pages/cellular'
import sysandsig from './Pages/sysandsig'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/bmegOrganizer' exact component={general} />
          <Route path='/bmegOrganizer/bioinformatics' component={bioinformatics} />
          <Route path='/bmegOrganizer/biomechanics' component={biomechanics} />
          <Route path='/bmegOrganizer/sysandsig' component={sysandsig} />
          <Route path='/bmegOrganizer/cellular' component={cellular} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
