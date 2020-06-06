const seedData = [
  { food: "Bagel", quantity: 73 },
  { food: "Croissant", quantity: 40 },
  { food: "Biscuits", quantity: 52 },
];

export default (state = seedData, action) => {
  console.log("produce reducer is running");
  console.log(action);

  if (action.type === "updateProduce") {
    console.log("i care about this produce action");
    const newState = [...state];
    const payload = action.payload;

    newState[payload.index].quantity += payload.qChange;

    return newState;
  } else {
    return state;
  }
};
