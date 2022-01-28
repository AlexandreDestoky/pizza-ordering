import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataFood } from "../../assets/dataFood";
import Product from "../Product/Product";
import { Wrapper } from "./ProductList.style";

export default function ProductList() {
  const navigate = useNavigate();
  const { product } = useParams();
  const foodType = Object.keys(dataFood);
  const Products = dataFood[product];

  useEffect(() => {
    if (!foodType.includes(product)) {
      navigate("/");
    }
  }, []);

  return <Wrapper>{Products && Products.map(el => <Product key={el.id} {...el} />)}</Wrapper>;
}
