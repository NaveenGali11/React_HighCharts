import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';

const Home = () => (
  <Container style={{ textAlign: 'center', marginTop: '50px' }}>
    <FadeIn delay={50} transitionDuration={5000}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '50px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/office/48/000000/area-chart.png"
            alt="Area Chart"
          />
          <br />
          <br />
          <Link to="/area"> Area</Link>
        </Paper>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/emoji/48/000000/bar-chart-emoji.png"
            alt="Bar Chart"
          />
          <br />
          <br />
          <Link to="/bar">Bar</Link>
        </Paper>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/material-outlined/48/000000/select-column.png"
            alt="Column Graph"
          />
          <br />
          <br />
          <Link to="/column">Column</Link>
        </Paper>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/material-outlined/48/000000/down--v2.png"
            alt="Drill drown Chart"
          />
          <br />
          <br />
          <Link to="/drilldown">drilldown</Link>
        </Paper>

        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/48/000000/select-column.png"
            alt="Fixed Column"
          />
          <br />
          <br />
          <Link to="/fixedcolumn">FixedColumn</Link>
        </Paper>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/material-two-tone/48/000000/view-column.png"
            alt="High Chart"
          />
          <br />
          <br />
          <Link to="/highchart">High Chart</Link>
        </Paper>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/office/48/000000/pie-chart.png"
            alt="Pie Chart"
          />
          <br />
          <br />
          <Link to="/pieChart">Pie Chart</Link>
        </Paper>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/flat-round/48/000000/pie-chart-3d.png"
            alt="Pie Chart drill down"
          />
          <br />
          <br />
          <Link to="/piechartDrilldown">Pie Chart Drill Down</Link>
        </Paper>
        <Paper
          variant="outlined"
          square
          className="col-lg-4"
          style={{
            textAlign: 'center',
            padding: '40px',
            marginRight: '10px',
            marginBottom: '10px',
          }}
        >
          <img
            src="https://img.icons8.com/officel/48/000000/scatter-plot.png"
            alt="Scatter Plot"
          />
          <br />
          <br />
          <Link to="/scatterPlot">Scatter Plot</Link>
        </Paper>
      </Row>
    </FadeIn>
  </Container>
);

export default Home;
