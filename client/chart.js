$(document).ready(function(){
  'use strict';
  console.log('ready!');

  //var chart = new AmCharts.AmSerialChart();
  AmCharts.makeChart('chartdiv',
    {
      'type': 'pie',
      'pathToImages': '//cdn.amcharts.com/lib/3/images/',
      'balloonText': '[[title]]<br><span style="font-size:14px"> [[percents]]%</span>',
      'innerRadius': '50%',
      'labelText': '',
      'minRadius': 15,
      'colors': [
        '#94FAEE',
        '#00A99D',
        '#6ACEBF',
        '#509B90'
      ],
      'titleField': 'category',
      'valueField': 'column-1',
      'creditsPosition': 'bottom-right',
      'hideBalloonTime': 100,
      'percentPrecision': 0,
      'allLabels': [],
      'balloon': {},
      'legend': {
        'align': 'center',
        'markerType': 'circle',
        'valueAlign': 'left',
        'valueText': ''
      },
      'titles': [],
      'dataProvider': [
        {
          'category': 'User Experience',
          'column-1': '5'
        },
        {
          'category': 'Design',
          'column-1': '4'
        },
        {
          'category': 'Information Architecture',
          'column-1': 2
        },
        {
          'category': 'Illustration',
          'column-1': '4'
        }
      ]
    });
});
