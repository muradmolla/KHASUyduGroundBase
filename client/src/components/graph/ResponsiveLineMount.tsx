import React from 'react'
import { Serie } from "@nivo/line";
import ResponsiveLineCustomized from "./ResponsiveLineCustomized";
import { datumTypes, useGraphData } from './responsiveLineProvider';

type Props = {
    datumType: datumTypes
}


const ResponsiveLineMount = ({ datumType }: Props) => {
  const graphData: Serie[] = useGraphData(datumType);
  let legendLabel = '';
    switch (datumType) {
      case "height":
        legendLabel = "yükseklik (m)";
        break;
      case "velocity":
        legendLabel = "İniş Hızı (m/s)";
        break;
      case "pressure":
        legendLabel = "Basınç (Pa)";
        break;
      case "heightDiff":
        legendLabel = "İrtifa Farkı (m)";
        break;
      case "voltage":
        legendLabel = "Pil Gerilimi (V)";
        break;
      case "temperature":
        legendLabel = "Sıcaklık (C°)";
        break;
      default:
        legendLabel = '';
    }
  return (
    <div style={{height: 350}}>
      <ResponsiveLineCustomized
        data={graphData}
        legend={legendLabel}
      />
      </div>
    );
};

export default ResponsiveLineMount;