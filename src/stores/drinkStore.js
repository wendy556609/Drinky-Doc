import React, { createContext, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import drinkData from "../json/drink.json";

export const StoreContext = createContext();

const drinkDetail = {
  day: null,
  detail: [
    {
      name: null,
      capacity: 0,
      sweet: "無糖",
      sweetindex: 0,
      calories: 0,
      sugar: 0,
      sport: 0,
      photo: "https://raw.githubusercontent.com/wendy556609/APP_Middle/master/assets/icon/img.png",
      store: null,
      cup: 0,
      ice: "去冰",
      money:0
    }
  ]
};

const Data_PERSISTENCE_KEY = "Data_PERSISTENCE_KEY";
const DATA_ADD_KEY = "DATA_ADD_KEY";

// Make a Provider
export const StoreProvider = ({ children }) => {
  const [drinks, setDrinks] = useState(drinkData.drink);
  const [drinkTemp, setdrinkTemp] = useState(drinkDetail);
  const store = {
    drinkState: [drinks, setDrinks],
    drinkTempState: [drinkTemp, setdrinkTemp],
  };

  const restoreState = async () => {
    try {
      const dataAddString = await AsyncStorage.getItem(DATA_ADD_KEY);
      const dataAdd = JSON.parse(dataAddString);
      if (dataAdd) {
        const dataString = await AsyncStorage.getItem(Data_PERSISTENCE_KEY);
        const state_drink = JSON.parse(dataString);
        setDrinks(state_drink);
      }
    } catch (e) { }
  };

  useEffect(() => {
    restoreState();
  }, []);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

