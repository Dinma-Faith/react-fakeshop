import { ActionTypes } from "../constants/actiontypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Dinma",
      category: "Programmer",
    },
  ],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
