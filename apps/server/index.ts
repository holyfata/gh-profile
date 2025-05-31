import { APIs, get } from "apis";
import { renderFile } from "pug";
import { join } from "path";

const PORT = 3000;

console.log(`Server is running on http://127.0.1:${PORT}`);

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
  '/': new Response(
    renderFile(join(import.meta.dir, 'index.pug'), { title: 'Bun API Server', apis: API_LIST }),
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
  // `routes` requires Bun v1.2.3+
  routes,

  // (optional) fallback for unmatched routes:
  // Required if Bun's version < 1.2.3
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
  port: PORT,
});

// http://127.0.0.1:3000/v1/user/avatar
