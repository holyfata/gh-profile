import { APIs, get } from "@gh-profile/apis";
import { renderFile } from "pug";
import { join } from "path";
import index from "./index.html";

const PORT = 3000;

const API_LIST = [
    APIs.USER_AVATAR,
    APIs.USER_STATUS,
    APIs.USER_NICKNAME,
    APIs.USER_BIOGRAPHY,
    APIs.USER_FOLLOWERS,
    APIs.USER_FOLLOWING,
    APIs.USER_COMPANY,
    APIs.USER_LOCATION,
    APIs.USER_TIMEZONE,
    APIs.USER_WEBSITE,
];

const routes: Record<string, Response> = {
  "/": index,
  '/v1': new Response(
    renderFile(join(import.meta.dir, 'indexV1.pug'), { title: 'Bun API Server', apis: API_LIST }),
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  ),
};

for (const api of API_LIST) {
  routes[`/${api}`] = new Response(JSON.stringify(await get(api)));
}

Bun.serve({
  routes,

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },

  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },

  port: PORT,
});
