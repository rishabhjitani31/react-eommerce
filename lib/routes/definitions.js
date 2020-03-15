/*
 * All route definitions for the application.
 * Sorted alphabetically.
 *
 * Each route can contain these keys:
 * - `string` page (required): the name of the route's file in pages/
 * - `string|array` url (required): the url(s) that match this page. The first url will be "preferred" when the app redirects to this page.
 *
 * All url parameters and query parameters are placed into the page's `query` object.
 * Each individual page's entrypoint handles parsing and formatting these parameters into useful data.
 */

module.exports = [
  {
    page: "account",
    urls: ["/account"]
  },
  {
    page: "home",
    urls: ["/"]
  },
  {
    page: "login",
    urls: ["/login"]
  },
  {
    page: "profile",
    urls: ["/user/profile"],
    isProtected: true
  },
  {
    page: "my-account",
    urls: ["/user/account"],
    isProtected: true
  },
  {
    page: "orders",
    urls: ["/user/orders"],
    isProtected: true
  },
  {
    page: "rewards",
    urls: ["/user/rewards"],
    isProtected: true
  },
  {
    page: "product",
    urls: ["/p/:code/:slug?"]
  },
  {
    page: "product-list",
    urls: ["/c/:category/:slug?"]
  },
  {
    page: "product-list-keyword",
    urls: ["/s/:slug"]
  },
  // This MUST BE THE LAST ROUTE
  {
    page: "dynamic",
    urls: ["/:folder/:slug/:any?"]
  },
  {
    page: "product-listing",
    urls: ["/product-listing"]
  },
  {
    page: "product-description",
    urls: ["/product-description"]
  }
];
