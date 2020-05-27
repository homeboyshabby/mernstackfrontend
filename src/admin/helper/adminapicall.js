import { API } from "../../backend";

//category based calls
export const createCategory = (userId, token, categoryName) => {
  return fetch(`${API}category/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(categoryName),
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

//delete a category
export const deleteCategory = (userId, token, categoryId) => {
  return fetch(`${API}category/${categoryId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

//get all categories

export const getCategories = () => {
  return fetch(`${API}categories`, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

//product based calls
//create product
export const createProduct = (userId, token, product) => {
  return fetch(`${API}product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

//get all products

export const getProducts = () => {
  return fetch(`${API}products`, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

//delete a product
export const deleteProduct = (userId, token, productId) => {
    return fetch(`${API}product/${productId}/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      }
    })
      .then((resp) => {
        return resp.json();
      })
      .catch((err) => console.log(err));
  };


//get a product
export const getProduct = (productId) => {
  return fetch(`${API}product/${productId}`, {
    method: "GET",
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};

//update a product
export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}product/${productId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product
  })
    .then((resp) => {
      return resp.json();
    })
    .catch((err) => console.log(err));
};
