const NakedSingle = ({ item }) => {
  if (typeof item === "object" && item.length === 1) {
    return item[0];
  }
  return false;
};

export default NakedSingle;
