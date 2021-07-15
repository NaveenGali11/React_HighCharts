import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import highCharts from 'highcharts';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';

const Bar = () => {
  const Heading = styled.h2`
    font-family: 'Nunito', sans-serif;
  `;
  const options = {
    chart: {
      type: 'bar',
    },
    title: {
      text: 'Stacked bar chart',
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption',
      },
    },
    legend: {
      reversed: true,
    },
    plotOptions: {
      series: {
        stacking: 'normal',
      },
    },
    series: [
      {
        name: 'John',
        data: [5, 3, 4, 7, 2],
      },
      {
        name: 'Jane',
        data: [2, 2, 3, 2, 1],
      },
      {
        name: 'Joe',
        data: [3, 4, 4, 2, 5],
      },
    ],
  };

  return (
    <div>
      <FadeIn>
        <Heading>Bar Graph</Heading>
        <HighchartsReact highchart={highCharts} options={options} />
      </FadeIn>
    </div>
  );
};

export default Bar;
