This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About
This is a super simple web app of a fictional cocktail bar called **_Tilted_**. The name stems mainly from the design I decided to employ.

You search for an ingredient, then click on drinks (also multiple times) that you want or click in the selected list, if you want less of them.

After confirmation, enjoy!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.ts`. The page auto-updates as you edit the file.

## Features

### Almost no deps
This time, in the spirit of true prototyping, I didn't want to spend time searching for libraries and so it happens, that I only use `i18next` and `next-google-fonts`

### Lightweight autocomplete
Unable to choose an autocomplete that would suit my needs on this project, I decided to spin up my own. Didn't take longer than 15 minutes and the results is more than satisfying.

### Page-to-page animations
When going through the steps of ordering a drink, the pages animates from one to another.


### Improvements

* **Design system** - there's a lot of room for styling improvements, of course. I used plain CSS in form of modules, but seeing it now, I regret not going with `styled-components`.
* **Composability** - as I was punching one page after another, when I was done, there was little energy left to refactor.
* **Prefetching** - this is the only unmet requirement - as I don't have a paid account on _thecocktailDB.com_, I couldn't list all the ingredients and therefore, I couldn't prefetch all the drinks. Would be worth it, though...