import React from 'react';

// import styled from 'styled-components';

import {
  VictoryChart,
  VictoryStack,
  VictoryAxis,
  VictoryLabel,
  VictoryBar
} from 'victory';


const dataA = [
  { x: "Clarín", y: 57 },
  { x: "Página 12", y: 40 },
  { x: "Telam", y: 38 }, 
  { x: "La Nación", y: 37 }
];

const dataB = dataA.map((point) => {
  const y = Math.round(point.y + 3 * (Math.random() - 0.5));
  return { ...point, y };
});

const width = 400;
const height = 400;

class ChartDreen extends React.Component {

  render() {
    return (
      <VictoryChart horizontal
        height={height}
        width={width}
        padding={40}
      >
        <VictoryStack
          style={{ data: { width: 20 }, labels: { fontSize: 10 } }}
        >
          <VictoryBar
            style={{ data: { fill: "tomato" } }}
            data={dataA}
            y={(data) => (-Math.abs(data.y))}
            labels={({ datum }) => (`${Math.abs(datum.y)}%`)}
          />
          <VictoryBar
            style={{ data: { fill: "blue" } }}
            data={dataB}
            labels={({ datum }) => (`${Math.abs(datum.y)}%`)}
          />
        </VictoryStack>

        <VictoryAxis
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fontSize: 15, fill: "black" }
          }}
          
          tickLabelComponent={
            <VictoryLabel
              x={width / 2}
              textAnchor="middle"
            />
          }
          tickValues={dataA.map((point) => point.x).reverse()}
        />
      </VictoryChart>
    );
  }
}


export default ChartDreen;