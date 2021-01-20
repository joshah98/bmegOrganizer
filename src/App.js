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
          <Route path='/' component={general} />
          <Route path='/bioinformatics' component={bioinformatics} />
          <Route path='/biomechanics' component={biomechanics} />
          <Route path='/sysandsig' component={sysandsig} />
          <Route path='/cellular' component={cellular} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
