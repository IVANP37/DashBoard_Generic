import React from 'react';

// import styled from 'styled-components';

import {
  VictoryPie,
  VictoryLabel 
} from 'victory';

class ChartPastel extends React.Component {
  render() {
    return (
      <div>        
      <svg viewBox="10 10 400 400">        
        <VictoryPie
          standalone={false}
          width={400} height={400}
          data={[
            { x: 1, y: 120 }, { x: 2, y: 150 }, { x: 3, y: 75 }, { x: 4, y: 75 }
          ]}
          innerRadius={68} labelRadius={100}
          style={{ labels: { fontSize: 20, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 20 }}
          x={200} y={200}
          text="Chart"
        />
      </svg>
      
      </div>
    );
  }
}

export default ChartPastel;