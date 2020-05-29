import React, { useState, useEffect } from "react";
import { loadCart, cartEmpty } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import { getmeToken, processPayment } from "./helper/paymentBHelper";
import { createOrder } from "./helper/orderHelper";
import { isAutheticated } from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";

const Paymentb = ({ products }) => {
  const userId = isAutheticated() && isAutheticated().user._id;
  const authToken = isAutheticated() && isAutheticated().authToken;
  const [info, setInfo] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: "",
    instance: {},
  });

  function refreshPage() {
    window.location.reload(false);
  }

  const getToken = (userId, authToken) => {
    // console.log("user",userId)
    // console.log("token",authToken)
    getmeToken(userId, authToken).then((info) => {
      // console.log("info",info)
      if (info.error) {
        setInfo({ ...info, error: info.error });
      } else {
        const clientToken = info.clientToken;
        setInfo({ clientToken });
      }
    });
  };

  const showDropIn = () => {
    return (
      <div>
        {info.clientToken !== null && products.length > 0 ? (
          <div>
            <DropIn
              options={{ authorization: info.clientToken }}
              onInstance={(instance) => (info.instance = instance)}
            />
            <button className="btn btn-md mb-5 btn-outline-success formbtn" onClick={onPurchase}>Buy</button>
          </div>
        ) : (
          <Link to="/" className="btn btn-md mb-5 btn-outline-info formbtn">SHOP!!!</Link>
        )}
      </div>
    );
  };

  useEffect(() => {
    getToken(userId, authToken);
  }, []);

  const onPurchase = () => {
      setInfo({loading:true})
      let nonce;
      let getNonce = info.instance
      .requestPaymentMethod()
      .then(data => {
          nonce = data.nonce
          const paymentData = {
              paymentMethodNonce: nonce,
              amount: getAmount()
          };
          processPayment(userId, authToken, paymentData)
          .then(resp => {
            //   console.log("success")
              const orderData = {
                  products:products,
                  transaction_id:resp.transaction._id,
                  amount:resp.transaction.amount
              }
              console.log(authToken)
              createOrder(userId,authToken, orderData);
              cartEmpty(() => {
                //   console.log("crash?")
              })
              setInfo({...info, success: resp.success, loading: false})
            //   refreshPage();
          }).catch(error => {
            //   console.log("fail")
              setInfo({loading:false, success:false,})
          })
      })
  }

  const getAmount = () => {
      let amount = 0;
      products.map(p => {
          amount = amount + p.price
      })
      return amount;
  }
  return (
    <div>
      <h3 className="text-center mt-5 middlefonts">CHECKOUT</h3>
      {showDropIn()}
    </div>
  );
};

export default Paymentb;
