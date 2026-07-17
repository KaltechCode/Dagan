// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// export const woo = new WooCommerceRestApi({
//   url: "https://site16988-71cwo1.scloudsite101.com",
//   consumerKey: "ck_94e358497b4e74c4196fed52d2a1613ea05bccbb",
//   consumerSecret: "cs_2b17e8967a19001da047ba457f7f4420170cb8f9",
//   version: "wc/v3",
// });

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const WooCommerce = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL!,
  consumerKey: process.env.WC_CONSUMER_KEY!,
  consumerSecret: process.env.WC_CONSUMER_SECRET!,
  version: "wc/v3",
  queryStringAuth: true,
});
// ("ck_430f9ea78064205ae4dbf94f3e0ebcd6c12b9ffa");

// ("cs_b11359b37c25932656fef485df1047d76d8407bb");

// ck_94e358497b4e74c4196fed52d2a1613ea05bccbb
// cs_2b17e8967a19001da047ba457f7f4420170cb8f9
