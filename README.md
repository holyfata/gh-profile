# GitHub Profile

> This is a project to realize the github profile page.

## Architecture

- home: use SSR to render root page
- api
  - v1: the apis to operate database
  - v2: the apis to scrapy page (without session)
- tool: some tools for deploying

## Multi Page

- https://gh-profile-iota.vercel.app

![](/images/home.png)

- https://gh-profile-iota.vercel.app/tools

![](/images/tools.png)
