import { useParams } from "react-router-dom";
import { IMG_CDN_LOW } from "./config";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [resName, resPlace, restaurant] = useRestaurant(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  //https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/5/17/00af9641-700d-462f-890f-47e358b63bfb_68cecb16-fd2a-4d7d-9392-b5f83d72eaaf.jpg

  return (
    <>
      <div className="  p-10">
        <div className="bg-red-300 w-[900] rounded-xl justify-between ">
          {/* <h1>Restaurant Id : {id}</h1> */}
          <h2 className="font-bold font-serif text-center p-3">
            {resName?.text}
          </h2>
          <h2 className="mx-6">{resPlace?.city}</h2>
          <h4 className="mx-6">{resPlace?.areaName}</h4>
          <h3 className="mx-6 p-1">{resPlace?.costForTwoMessage}</h3>
        </div>
      </div>
      <div className="">
        {}
        <ul className="key={item?.card?.info?.id} ">
          {restaurant?.itemCards?.map((item) => (
            <>
              <div className="w-[70%] mx-[15%] justify-center bg-red-600">
                <div className="flex flex-wrap justify-end">
                  <li className="font-serif py-24" key={item?.card?.info?.id}>
                    {item?.card?.info?.name}
                  </li>
                  <h4 className="font-medium text-yellow-400 px-10 py-24">
                    {item?.card?.info?.price / 100}₹
                  </h4>
                  <div className="">
                    <span>Add Item</span>
                    <button
                      className="p-3 py-22 mx-3 bg-gray-200 rounded-md"
                      onClick={() => handleRemoveItem()}
                    >
                      -
                    </button>
                    <button
                      className="p-3 my-24 mx-3 bg-gray-200 rounded-md"
                      onClick={() => addFoodItem(item)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <img
                      className="rounded-md my-1 px-2"
                      src={IMG_CDN_LOW + item?.card?.info?.imageId}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
