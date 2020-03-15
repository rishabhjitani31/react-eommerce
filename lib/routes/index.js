const nextRoutes = require("next-routes");
const definitions = require("./definitions");
export const routes = nextRoutes();
export const Link = routes.Link;
export const Router = routes.Router;
export const protectedRoutes = [];
definitions.forEach((item, index) => {
  if (!item.page) {
    throw new TypeError(`Route Definitions ${index}: .page required`);
  }
  if (!item.urls) {
    throw new TypeError(`Route Definitions ${index}: .urls required`);
  }
  item.urls.forEach((url, index) => {
    const path = typeof url !== "string" ? url.path : url;
    const name =
      typeof url !== "string"
        ? url.name
        : item.page + (index === 0 ? "" : `_${index}`);
    routes.add(name, path, item.page);
    if (item.isProtected) {
      protectedRoutes.push(path);
    }
  });
});
