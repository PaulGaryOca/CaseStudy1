import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import { createPieChart } from './pie.js';
import { createLineGraph } from './linegraph.js';



export default function Data({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const pieChartConfig = createPieChart('pieChartContainer');
  const lineGraphConfig = createLineGraph('lineGraphContainer');

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  useEffect(() => {
    if (landlord) {
      Highcharts.chart('pieChartContainer', pieChartConfig);
      Highcharts.chart('lineGraphContainer', lineGraphConfig);
 
    }
  }, [landlord]);

  return (
    <>
      {landlord && (
        <div className='flex gap-4'>
          <div id="pieChartContainer" style={{ width: '400px', height: '400px', margin: '0 auto' }}></div>

         
          <div id="lineGraphContainer" style={{ width: '400px', height: '400px', margin: '0 auto' }}></div>
         
        </div>
        
      )}
    </>
  );
}
