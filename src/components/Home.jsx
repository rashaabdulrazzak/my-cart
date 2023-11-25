import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";
const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div>
      <p>home</p>
    </div>
  );
};

export default Home;
