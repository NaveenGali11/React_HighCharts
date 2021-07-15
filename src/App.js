import React from 'react';
import './App.css';
// import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Navbar from './assets/Navbar';
import Home from './Home';
import Area from './components/Area';
import Bar from './components/Bar';
import Column from './components/Column';
import DrillDown from './components/DrillDown';
import FixedColumn from './components/FixedColumn';
import HighChart from './components/HighChart';
import PieChart from './components/PieChart';
import PieChartDrilldown from './components/PieChartDrilldown';
import Scatterplot from './components/Scatterplot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/area">
          <Area />
        </Route>
        <Route exact path="/bar">
          <Bar />
        </Route>
        <Route exact path="/column">
          <Column />
        </Route>
        <Route exact path="/drilldown">
          <DrillDown />
        </Route>
        <Route exact path="/fixedcolumn">
          <FixedColumn />
        </Route>
        <Route exact path="/highchart">
          <HighChart />
        </Route>
        <Route exact path="/pieChart">
          <PieChart />
        </Route>
        <Route exact path="/piechartDrilldown">
          <PieChartDrilldown />
        </Route>
        <Route exact path="/scatterPlot">
          <Scatterplot />
        </Route>
        <Route exact>
          <h2>This is an 404 Page</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
