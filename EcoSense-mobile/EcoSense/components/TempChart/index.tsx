import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart';

const TempChart = ()=>{
    return (
      <Chart
      style={{ height: 190, width: 380, marginBottom: 10}}
      data={[
        { x: 0, y: 22 },
        { x: 1, y: 23 },
        { x: 2, y: 24 },
        { x: 3, y: 26 },
        { x: 4, y: 28 },
        { x: 5, y: 28.5 },
        { x: 6, y: 29 },
        { x: 7, y: 28 },
        { x: 8, y: 27 },
        { x: 9, y: 26},
        { x: 10, y: 24 },
      ]}
        padding={{ left: 40, bottom: 10, right: 20, top: 10 }}
        xDomain={{ min: 0, max: 10 }}
        yDomain={{ min: 20, max: 32 }}>
        <VerticalAxis tickCount={11} 
        theme={{ labels: { formatter: (v) => v.toFixed(0) } }} />
        <HorizontalAxis tickCount={10} theme={{ labels: { formatter: (v) => null } }}/>
        <Area theme={{ gradient: { from: { color: '#2596be' }, to: { color: '#527ff4', opacity: 0.7 } }}} />
        <Line theme={{ stroke: { color: '#2596be', width: 2 }, scatter: { default: { width: 2, height: 2, rx: 2 }} }} />
      </Chart>)
  }

  export default TempChart;