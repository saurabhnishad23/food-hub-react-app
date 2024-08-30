import { IMG_CDN_LOW } from "./config";

const FoodItem = ({ name, description, ImageId, finalPrice }) => {
  return (
    <>
      <div className="w-72 p-2 m-2 shadow-xl rounded-xl bg-red-400 hover:bg-red-300 active:bg-black-700 focus:outline-none focus:ring focus:ring-gray-300">
        <img className="" src={IMG_CDN_LOW + ImageId} />
        <h2 className="font-bold p-1">{name}</h2>
        <h3 className="font-medium font-serif">{description}</h3>

        <h4 className="font-semibold text-gray-700">Rupees {price / 100}</h4>
      </div>
    </>
  );
};

export default FoodItem;
