import React from 'react'
import { Serie } from "@nivo/line";
import ResponsiveLineCustomized from "./ResponsiveLineCustomized";
import { datumTypes, useGraphData } from './responsiveLineProvider';

type Props = {
    datumType: datumTypes
}


const ResponsiveLineMount = ({ datumType }: Props) => {
  const graphData: Serie[] = useGraphData("height");
  return (
    <div style={{height: 350}}>
      <ResponsiveLineCustomized
        data={graphData}
        legend="yükseklik (m)"
      />
      </div>
    );
};

export default ResponsiveLineMount;