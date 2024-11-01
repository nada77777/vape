export function extractFlavorData(flavors) {
  const result = {
    flavors: [],
    levels: [],
  };

  flavors.forEach((flavor) => {
    const [key, value] = Object.entries(flavor)[0];
    result.flavors.push(key);
    result.levels.push(value);
  });

  return { ...result, flavors: translateAttributes(result.flavors) };
}

export function translateAttributes(attributes) {
  return attributes.map((attribute) => {
    switch (attribute) {
      case "sweetness":
        return "단맛";
      case "menthol":
        return "멘솔";
      case "throat_hit":
        return "타격감";
      case "body":
        return "바디감";
      case "freshness":
        return "상큼함";
      default:
        return attribute;
    }
  });
}
