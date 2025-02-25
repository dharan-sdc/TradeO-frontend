import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

const timeSeries = [
  {
    keyword: "DIGITAL_CURRENCY_DAILY",
    key: "Time Series (Daily)",
    lable: "1 Day",
    value: 1,
  },
  {
    keyword: "DIGITAL_CURRENCY_WEEKLY",
    key: "Weekly Time Series",
    lable: "1 Week",
    value: 7,
  },
  {
    keyword: "DIGITAL_CURRENCY_MONTHLY",
    key: "monthly Time Series",
    lable: "1 Month",
    value: 30,
  },
];

const StackChart = () => {
  const [activeLable, setActiveLable] = useState("1 Day")
  const searies = [
    {
      data: [[1740204298495, 8357162.57815181],
      [1740207894123, 8347299.00118903],
      [1740211414715, 8339923.29354624],
      [1740215112632, 8331851.41099622],
      [1740218645336, 8355043.77254737],
      [1740222286590, 8355139.74511018],
      [1740225869298, 8365066.82333591],
      [1740229267696, 8387830.1875131],
      [1740233362015, 8369013.53884371],
      [1740236721603, 8359750.44407684],
      [1740240288803, 8364030.17043078],
      [1740243883302, 8356328.51405598],
      [1740247499220, 8371429.50298354],
      [1740250935198, 8349746.20576831],
      [1740254690643, 8368226.60924992],
      [1740258284980, 8363493.61334783],
      [1740261693157, 8372131.95751216],
      [1740265545135, 8368607.81644137],
      [1740269087721, 8359131.82632025],
      [1740272690090, 8370078.33988491],
      [1740276291387, 8355653.68174079],
      [1740279876316, 8349343.58696347],
      [1740283481720, 8351080.37838941],
      [1740287086475, 8350219.10950443],
      [1740290677616, 8332290.32429961],
      [1740294123265, 8343489.86397687],
      [1740297871344, 8359654.89902967],
      [1740301493321, 8343468.41192125],
      [1740304821052, 8346668.35654401],
      [1740308688539, 8333125.69086735],
      [1740312050617, 8328201.39879795],
      [1740315891833, 8294891.01061785],
      [1740319489250, 8310559.35496857],
      [1740323085840, 8281818.95604181],
      [1740326677446, 8269167.74029603],
      [1740330288221, 8268531.13404786],
      [1740333932331, 8289288.95620975],
      [1740337764749, 8301672.51678225],
      [1740341097514, 8296541.07848984],
      ],
    },
  ];

  const options = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 450,
      zoom: {
        autoScaleYaxis: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: "datetime",
      tickAmount: 6
    },
    markers: {
      colors: ["#fff"],
      strokeColor: "#fff",
      size: 0,
      strokeWidth: 1,
      style: "hollow"
    },
    tooltip: {
      theme: "light"
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.9,
        stops: [0, 100]
      }

    },
    grid: {
      borderCOlor: "#47535E",
      strokeDashArray: 4,
      show: true
    },
  };

  const handleActiveLabel = (value) => {
    setActiveLable(value);
  }

  return (
    <div>
      <div className='space-x-3'>
        {timeSeries.map((item) =>
          <Button variant={activeLable == item.lable ? "" : "outline"} onClick={() => handleActiveLabel(item.lable)} key={item.lable}>
            {item.lable}
          </Button>)}
      </div>
      <ReactApexChart
        options={options}
        series={searies}
        height={450}


      />
    </div>
  )
}

export default StackChart