import { IMG_CDN } from "./config";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  sla,
  slaString,
  locality,
}) => {
  return (
    <>
      <div className="w-72 p-2 m-2 shadow-xl rounded-xl bg-red-400 hover:bg-red-300 active:bg-black-700 focus:outline-none focus:ring focus:ring-gray-300">
        <img className="" src={IMG_CDN + cloudinaryImageId} />
        <h2 className="font-bold p-1">{name}</h2>
        <h3 className="font-medium font-serif">{cuisines?.join(", ")}</h3>
        <h4 className="justify-center ">
          <span className="bg-green-600 rounded-md">
            {avgRating}
            {"⭐"}
          </span>
          <span className="px-3">{sla.slaString}</span>
        </h4>
        <h4 className="font-semibold text-gray-700">{locality}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
