export default (qChange, i) => {
  return {
    type: "updateProduce",
    payload: {
      qChange,
      i,
    },
  };
};
