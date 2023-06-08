// import React from "react";
import Icons from "../../images/icons";

// eslint-disable-next-line react/prop-types
const CartIcon = ({ itemCount, onClick }) => {
  return (
    <div onClick={onClick} style={{ display: "flex", gap: "10px" }}>
      <div>
        <div className="badge">
          <span className="badge-number">{itemCount}</span>
        </div>
        <img src={Icons.cartIcon} alt="cart Icon" />
      </div>
      <a href="#">Cart</a>
    </div>
  );
};

export default CartIcon;
