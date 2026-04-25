import axios from "axios";

import config from "../config/config.js";

const payViaKhalti = async (data) => {
  try {
    const body = {
      return_url: "http://localhost:5000/",
      website_url: "http://localhost:5000/",
      amount: data.amount * 100, // Convert to paisa
      purchase_order_id: data.purchase_order_id,
      purchase_order_name: data.purchase_order_name,
      customer_info: {
        name: data.customer_info.name,
        email: data.customer_info.email,
        phone: data.customer_info.phone,
      },
    };

    const response = await axios.post(
      config.khalit.api_url,
      body,
      {
        headers: {
          Authorization: "Key " + config.khalit.api_key,
        },
      },
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error initiating payment:",
      error.response ? error.response.data : error.message,
    );
  }
};

export { payViaKhalti };
