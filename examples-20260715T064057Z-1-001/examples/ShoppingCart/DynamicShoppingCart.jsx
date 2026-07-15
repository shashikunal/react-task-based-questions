import React, { useState } from "react";
import "./shopping.css";

const DynamicShoppingCart = () => {
  const [cartTotal, setCartTotal] = useState(200);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const applyCoupon = () => {
    if (coupon === "SAVE15") {
      setDiscount(15);
      setModalMessage("Coupon applied! You saved $15.");
      setShowModal(true);
    } else if (coupon === "SAVE30") {
      setDiscount(30);
      setModalMessage("Coupon applied! You saved $30.");
      setShowModal(true);
    } else {
      setDiscount(0);
      setModalMessage("Invalid coupon code. Try SAVE15 or SAVE30!");
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div className="shopping-cart">
      <h1 className="cart-heading">Your Shopping Cart</h1>
      <p className="cart-total">
        Cart Total: <span>${cartTotal}</span>
      </p>
      <p className="cart-discount">
        Discount Applied: <span>${discount}</span>
      </p>
      <p className="final-total">
        Final Total: <span>${cartTotal - discount}</span>
      </p>

      <div className="coupon-section">
        <input
          type="text"
          placeholder="Enter Coupon Code"
          value={coupon}
          onChange={e => setCoupon(e.target.value)}
          className="coupon-input"
        />
        <button className="apply-button" onClick={applyCoupon}>
          Apply Coupon
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>{modalMessage}</p>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="footer-message">
        <p>Use coupon codes SAVE15 or SAVE30 for discounts!</p>
      </div>
    </div>
  );
};

export default DynamicShoppingCart;
