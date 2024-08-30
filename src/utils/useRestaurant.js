import { FETCH_MENU_URL_HEAD, FETCH_MENU_URL_TAIL } from "../components/config";
import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null); //{}
  const [resName, setResName] = useState(null); //{}
  const [resPlace, setResPlace] = useState(null); //[]

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(
      FETCH_MENU_URL_HEAD + id + FETCH_MENU_URL_TAIL
    );
    const json = await response.json();
    setResName(json?.data?.cards[0]?.card?.card);
    setResPlace(json?.data?.cards[2]?.card?.card?.info);
    // console.log(json);
    // setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    setRestaurant(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card //3 earlier
        ?.card
    );
  }

  return [resName, resPlace, restaurant];
};

export default useRestaurant;
