import { APIs, get } from "apis";

const PORT = 3000;

console.log(`Server is running on http://127.0.1:${PORT}`);

Bun.serve({
  // `routes` requires Bun v1.2.3+
  routes: {
    // Static routes
    [`/${APIs.USER_AVATAR}`]: new Response(JSON.stringify(await get(APIs.USER_AVATAR))),
    [`/${APIs.USER_STATUS}`]: new Response(JSON.stringify(await get(APIs.USER_STATUS))),
    [`/${APIs.USER_NICKNAME}`]: new Response(JSON.stringify(await get(APIs.USER_NICKNAME))),
    [`/${APIs.USER_BIOGRAPHY}`]: new Response(JSON.stringify(await get(APIs.USER_BIOGRAPHY))),
    [`/${APIs.USER_FOLLOWERS}`]: new Response(JSON.stringify(await get(APIs.USER_FOLLOWERS))),
    [`/${APIs.USER_FOLLOWING}`]: new Response(JSON.stringify(await get(APIs.USER_FOLLOWING))),
    [`/${APIs.USER_COMPANY}`]: new Response(JSON.stringify(await get(APIs.USER_COMPANY))),
    [`/${APIs.USER_LOCATION}`]: new Response(JSON.stringify(await get(APIs.USER_LOCATION))),
    [`/${APIs.USER_TIMEZONE}`]: new Response(JSON.stringify(await get(APIs.USER_TIMEZONE))),
    [`/${APIs.USER_WEBSITE}`]: new Response(JSON.stringify(await get(APIs.USER_WEBSITE))),
  },

  // (optional) fallback for unmatched routes:
  // Required if Bun's version < 1.2.3
  fetch(req) {
    return new Response("Not Found", { status: 404 });
  },
  port: PORT,
});

// http://127.0.0.1:3000/v1/user/avatar
