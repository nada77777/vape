import { extractFlavorData } from "@/api/radarData/extractRadarData";

import { array } from "prop-types";

import S from "./Bar__graph.module.scss";

const BarGraph = ({ attributes }) => {
  const getKeyValue = (attributes) => {
    const { flavors, levels } = extractFlavorData(attributes);
    const result = flavors.map((flavor, index) => ({
      [flavor]: levels[index],
    }));
    return result;
  };

  const bar = getKeyValue(attributes).map((attribute, index) => {
    const [key, value] = Object.entries(attribute)[0];
    return (
      <div key={index} className={S.graph__item}>
        <div className={S.graph__item__info}>
          <label htmlFor="sweetness">{key}</label>
          <span>{value}</span>
        </div>
        <progress
          className={S.graph__item__process}
          id={key}
          value={value}
          max="10"
          aria-valuemin="0"
          aria-valuemax="10"
          aria-valuenow={value}
        />
      </div>
    );
  });

  return (
    <div className={S.bar__graph} role="region" aria-label="항목별 점수">
      {bar}
    </div>
  );
};

export default BarGraph;

BarGraph.propTypes = {
  attributes: array.isRequired,
};
