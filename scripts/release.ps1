npm run lint
npx changelogen --release
npm publish
git push --follow-tags
npx automd
