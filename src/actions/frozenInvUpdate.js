export default (qChange, i) => {
  console.log(qChange, i);
  return {
    type: "updateFrozen",
    payload: {
      qChange,
      i,
    },
  };
};
