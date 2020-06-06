const seedData = [
  { food: "Frozen Fries", quantity: 10 },
  { food: "Frozen Veggies", quantity: 23 },
  { food: "Frozen Pizzas", quantity: 39 },
];

export default (state = seedData, action) => {
  console.log("frozen reducer is running");
  console.log(action);

  if (action.type === "updateFrozen") {
    console.log("i care about this frozen action");
    const newState = [...state];
    const payload = action.payload;

    newState[payload.index].quantity += payload.qChange;

    return newState;
  } else {
    return state;
  }
};
