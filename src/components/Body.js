import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { FETCH_RESTAURANT_URL } from "./config";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []); //[searchInput]

  async function getRestaurant() {
    try {
      const response = await fetch(FETCH_RESTAURANT_URL);
      const json = await response.json();
      console.log(json);
      setResData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );

      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
    } catch (error) {
      console.error("failed to fetch", error);
      setResData([]);
      setFilteredRestaurants([]);
    }
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check ur internet connection</h1>;
  }
  //not render component (Early return)
  // if (!resData) return null;

  // if (filteredRestaurants?.length === 0)
  //   return <h1>No restaurant match your Filter!!</h1>;

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    // return (
    <>
      <div className="p-3 bg-green-400 rounded-sm">
        <input
          type="text"
          className="px-5 rounded-md mx-2 border-cyan-400"
          placeholder="search something yummy"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="px-3 text-slate-950 bg-gray-400 rounded-md"
          onClick={() => {
            const data = filterData(searchInput, resData);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center bg-red-500 ">
        {}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
