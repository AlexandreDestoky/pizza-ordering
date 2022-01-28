import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dataFood } from "../../assets/dataFood";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { product, id } = useParams();
  const foodType = Object.keys(dataFood);
  const curProduct = dataFood[product]?.find(el => el.id === +id);

  useEffect(() => {
    if (!foodType.includes(product) || !curProduct) {
      navigate("/");
    }
  }, []);

  return (
    <>
    {curProduct && <div>
      <p>Votre {product} : </p>
      <p>
        {curProduct.name} au prix de {curProduct.price}€
      </p>
      <img src={curProduct.img} alt={curProduct.name} />
    </div>}
    </>
  );
}
