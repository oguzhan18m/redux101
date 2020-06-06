export default (qChange, i) => {
  return {
    type: "updateMeat",
    payload: {
      qChange,
      i,
    },
  };
};
