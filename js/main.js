const CHART = document.getElementById('femaleChart');
const CHART2 = document.getElementById('lgbtChart');
const CHART3 = document.getElementById('pocChart');



var femaleChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
      label: "New Series",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor:"rgba(75,192,192,1)",
      borderCapStyle: 'round',
      borderJoinStyle: 'miter',
      pointBorderColor:"rgba(75,192,192,1)",
      pointBackgroundColor:"#fff",
      pointBorderWidth:1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 4, 6, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 2, 6, 11, 20, 11, 12, 8, 4, 15, 4, 4, 7, 16, 10, 11, 11, 11, 6, 6, 5, 7, 7, 10, 6, 7, 10, 8, 4, 13, 3, 4, 8, 12, 9, 10, 19, 7, 7, 24, 21, 20, 21, 26, 49, 67, 63, 59, 69, 138, 136, 216, 93, 36, 54, 90, 105, 90],
      spanGaps: false,
    },
    {
        label: "Featured Female Characters",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(237, 184, 49, 0.7)",
        borderColor: "rgba(235, 162, 39, 1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(251, 180, 23, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(251, 180, 23, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 2, 2, 5, 3, 4, 2, 0, 3, 0, 0, 1, 7, 3, 3, 2, 2, 2, 2, 2, 4, 3, 4, 2, 4, 5, 2, 0, 0, 1, 0, 0, 3, 0, 3, 1, 1, 0, 5, 4, 1, 4, 4, 11, 16, 20, 12, 9, 18, 18, 44, 11, 3, 7, 20, 37, 25],
        spanGaps: false,
    },

  ],
};

var lgbtChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
      label: "New Series",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor:"rgba(75,192,192,1)",
      borderCapStyle: 'round',
      borderJoinStyle: 'miter',
      pointBorderColor:"rgba(75,192,192,1)",
      pointBackgroundColor:"#fff",
      pointBorderWidth:1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 4, 6, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 2, 6, 11, 20, 11, 12, 8, 4, 15, 4, 4, 7, 16, 10, 11, 11, 11, 6, 6, 5, 7, 7, 10, 6, 7, 10, 8, 4, 13, 3, 4, 8, 12, 9, 10, 19, 7, 7, 24, 21, 20, 21, 26, 49, 67, 63, 59, 69, 138, 136, 216, 93, 36, 54, 90, 105, 90],
      spanGaps: false,
    },
    {
        label: "Featured LGBT Characters",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(237, 184, 49, 0.7)",
        borderColor: "rgba(235, 162, 39, 1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(251, 180, 23, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(251, 180, 23, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 4, 0, 0, 0, 1, 3, 2, 3, 1, 2, 3, 6, 23, 7, 1, 5, 10, 8, 10],
        spanGaps: false,
    },

  ],
};

var pocChartData = {
  labels: [1939, 1940, 1941, 1943, 1944, 1945, 1947, 1948, 1949, 1950, 1953, 1954, 1955, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  datasets: [
    {
      label: "New Series",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor:"rgba(75,192,192,1)",
      borderCapStyle: 'round',
      borderJoinStyle: 'miter',
      pointBorderColor:"rgba(75,192,192,1)",
      pointBackgroundColor:"#fff",
      pointBorderWidth:1,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 4, 6, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 2, 6, 11, 20, 11, 12, 8, 4, 15, 4, 4, 7, 16, 10, 11, 11, 11, 6, 6, 5, 7, 7, 10, 6, 7, 10, 8, 4, 13, 3, 4, 8, 12, 9, 10, 19, 7, 7, 24, 21, 20, 21, 26, 49, 67, 63, 59, 69, 138, 136, 216, 93, 36, 54, 90, 105, 90],
      spanGaps: false,
    },
    {
        label: "Featured LGBT Characters",
        fill: true,
        lineTension: 0.1,
        backgroundColor: "rgba(237, 184, 49, 0.7)",
        borderColor: "rgba(235, 162, 39, 1)",
        borderCapStyle: 'round',
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(251, 180, 23, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "rgba(251, 180, 23, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 4, 3, 5, 2, 0, 2, 1, 1, 1, 1, 4, 2, 0, 1, 1, 0, 1, 1, 1, 2, 4, 0, 2, 1, 0, 0, 2, 1, 0, 1, 3, 5, 7, 12, 7, 6, 12, 17, 22, 16, 2, 6, 20, 20, 21],
        spanGaps: false,
    },

  ],
};

let lineChart = new Chart(CHART, {
    type: 'line',

    data: femaleChartData,

    options: {
        //legends
        legend:{
          fullWidth: false,
          labels: {
            boxWidth: 20,
          },
        },

        //title
        title: {
          display:true,
          fullWidth: false,
          text: "Featured Female Characters in Marvel Comics Over Time"
        },

        //scales
        scales: {
          xAxes: [{

            ticks: {
              maxTicksLimit:12
            },
            scaleLabel: {
              display: true,
              labelString:'Year of Series Release',
              fontSize:14
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString:'Number of Series',
              fontSize:14
            }
          }],
        },
        //configuring tooltips
        tooltips : {
          enabled: true,
          mode: 'index',
          bodySpacing: 10,
          titleMarginBottom: 10,
          callbacks: {

          }

        }

    },
    multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"

  });

let lineChart2 = new Chart(CHART2, {
      type: 'line',

      data: lgbtChartData,

      options: {
          //legends
          legend:{
            fullWidth: false,
            labels: {
              boxWidth: 20,
            },
          },

          //title
          title: {
            display:true,
            fullWidth: false,
            text: "Featured LGBT Characters in Marvel Comics Over Time"
          },

          //scales
          scales: {
            xAxes: [{

              ticks: {
                maxTicksLimit:12
              },
              scaleLabel: {
                display: true,
                labelString:'Year of Series Release',
                fontSize:14
              }
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString:'Number of Series',
                fontSize:14
              }
            }],
          },
          //configuring tooltips
          tooltips : {
            enabled: true,
            mode: 'index',
            bodySpacing: 10,
            titleMarginBottom: 10,
            callbacks: {

            }

          }

      },
      multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"

    });

let lineChart3 = new Chart(CHART3, {
          type: 'line',

          data: pocChartData,

          options: {
              //legends
              legend:{
                fullWidth: false,
                labels: {
                  boxWidth: 20,
                },
              },

              //title
              title: {
                display:true,
                fullWidth: false,
                text: "Featured PoC Characters in Marvel Comics Over Time"
              },

              //scales
              scales: {
                xAxes: [{

                  ticks: {
                    maxTicksLimit:12
                  },
                  scaleLabel: {
                    display: true,
                    labelString:'Year of Series Release',
                    fontSize:14
                  }
                }],
                yAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString:'Number of Series',
                    fontSize:14
                  }
                }],
              },
              //configuring tooltips
              tooltips : {
                enabled: true,
                mode: 'index',
                bodySpacing: 10,
                titleMarginBottom: 10,
                callbacks: {

                }

              }

          },
          multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"

        });
