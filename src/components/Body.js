import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useBody from "../utils/useBody";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [
    listOfRestaurant,
    setlistOfRestaurant,
    filteredRestaurant,
    setfilteredRestaurant,
  ] = useBody();

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText)
              );
              setfilteredRestaurant(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filterList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setfilteredRestaurant(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restautant) => (
          <Link
            key={restautant.info.id}
            to={"/restaurant/" + restautant.info.id}
          >
            <RestaurantCard resData={restautant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
