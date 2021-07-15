import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import highCharts from 'highcharts';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';

const PieChart = () => {
  const Heading = styled.h2`
    font-family: 'Nunito', sans-serif;
  `;
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'Browser market shares in January, 2018',
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [
      {
        name: 'Brands',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true,
          },
          {
            name: 'Internet Explorer',
            y: 11.84,
          },
          {
            name: 'Firefox',
            y: 10.85,
          },
          {
            name: 'Edge',
            y: 4.67,
          },
          {
            name: 'Safari',
            y: 4.18,
          },
          {
            name: 'Sogou Explorer',
            y: 1.64,
          },
          {
            name: 'Opera',
            y: 1.6,
          },
          {
            name: 'QQ',
            y: 1.2,
          },
          {
            name: 'Other',
            y: 2.61,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <FadeIn>
        <Heading>Pie Chart</Heading>
        <HighchartsReact highchart={highCharts} options={options} />
      </FadeIn>
    </div>
  );
};

export default PieChart;
