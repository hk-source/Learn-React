import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constant";

const useBody = () => {
      const [listOfRestaurant, setlistOfRestaurant] = useState([]);
      const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
  const json = await data.json();
  setlistOfRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setfilteredRestaurant(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };
  return [listOfRestaurant, setlistOfRestaurant, filteredRestaurant, setfilteredRestaurant];
};

export default useBody;
