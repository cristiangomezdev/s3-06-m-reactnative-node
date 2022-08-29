// const API_BASE_URL = "http://10.0.2.2:3030";
// const API_BASE_URL = "http://localhost:3030";
const API_BASE_URL = "https://api-s306.herokuapp.com";





export const api = {
  async authRegister(email, password, name) {
    let raw = JSON.stringify({ email, password, name });

    let res = await fetch(path("/auth/register"), {
      method: "post",
      body: raw,
      headers: { "content-type": "application/json" },
    });
    const status = res.status;

    let resjson = await res.json();

    return { resjson, status };
  },

  async authLogin(email, password) {
    let raw = JSON.stringify({ email, password });

    let res = await fetch(path("/auth/login"), {
      method: "post",
      body: raw,
      headers: { "content-type": "application/json" },
    });

    const status = res.status;

    let resjson = await res.json();

    return { resjson, status };
  },

  async getOrdersUser(idUser, filter) {
    let res = await fetch(path(`/orders/user/${idUser + filter}`), {
      method: "get",
      headers: { "content-type": "application/json" },
    });

    const status = res.status;
    let resjson = await res.json();
    return { resjson, status };
  },
  async getOneOrder(idOrder) {
    let res = await fetch(path(`/orders/${idOrder}`), {
      method: "get",
      headers: { "content-type": "application/json" },
    });

    const status = res.status;
    let resjson = await res.json();
    return { resjson, status };
  },
};

function path(pathname) {
  return API_BASE_URL + pathname;
}
