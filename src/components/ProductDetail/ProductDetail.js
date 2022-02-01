import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { dataFood } from "../../assets/dataFood";
import { Detail, Wrapper } from "./ProductDetail.style";
import { convToDollar } from "../../shared/helper";
import { Button } from "../../shared/Button.style";
import { useDispatch } from "react-redux";
import {addToCart} from "../../features/cart/cartSlice";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, id } = useParams();
  const foodType = Object.keys(dataFood);
  const curProduct = dataFood[product]?.find(el => el.id === +id);
  const descText = curProduct?.ing.length > 1 ? "Ingredients" : "Description";


  useEffect(() => {
    if (!foodType.includes(product) || !curProduct) {
      navigate("/");
    }
  }, [foodType, curProduct]);

  const addDetail = () => {
    dispatch(addToCart(curProduct));
    setTimeout(() => {
      navigate(`/${product}`)
    }, 200);
  }

  return (
    <>
      {curProduct && (
        <Wrapper>
          <img src={curProduct.img} alt={curProduct.name} />
          <Detail>
            <div>
              <h2>{curProduct.name.toUpperCase()} </h2>
              <p>{convToDollar(curProduct.price)}</p>
              <h3>{descText}</h3>
              <ul>
                {curProduct.ing.map((el,i) => (
                  <li key={i}>{el}</li>
                ))}
              </ul>
            </div>
            <Button onClick={addDetail}>Add To Cart</Button>
          </Detail>
        </Wrapper>
      )}
    </>
  );
}
