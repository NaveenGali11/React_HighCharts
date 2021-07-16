import React, { lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Navbar = lazy(() => import('./assets/Navbar'));
const Home = lazy(() => import('./Home'));
const Area = lazy(() => import('./components/Area'));
const Bar = lazy(() => import('./components/Bar'));
const Column = lazy(() => import('./components/Column'));
const DrillDown = lazy(() => import('./components/DrillDown'));
const FixedColumn = lazy(() => import('./components/FixedColumn'));
const HighChart = lazy(() => import('./components/HighChart'));
const PieChart = lazy(() => import('./components/PieChart'));
const PieChartDrilldown = lazy(() => import('./components/PieChartDrilldown'));
const Scatterplot = lazy(() => import('./components/Scatterplot'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner animation="grow" variant="danger" />}>
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
      </Suspense>
    </div>
  );
}

export default App;
