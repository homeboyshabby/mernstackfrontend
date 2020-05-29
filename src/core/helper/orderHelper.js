import { API } from "../../backend";

export const createOrder = (userId, authToken, orderData) => {
  return fetch(`${API}order/create/${userId}`, {
    method: "POST",
    headres: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify({ order: orderData }),
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};
