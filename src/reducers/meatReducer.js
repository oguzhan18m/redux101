const seedData = [
  { food: "Chicken Breast", quantity: 44 },
  { food: "Beef", quantity: 12 },
  { food: "Salmon Fish", quantity: 53 },
];

export default (state = seedData, action) => {
  console.log("meat reducer is running");
  console.log(action);

  if (action.type === "updateMeat") {
    console.log("i care about this meat action");
    const newState = [...state];
    const payload = action.payload;

    newState[payload.index].quantity += payload.qChange;

    return newState;
  } else {
    return state;
  }
};
