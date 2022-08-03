# e-commerce

DEMO 👉🏻 [Here](https://shop-nextjs-1klzw7l35-fyerball.vercel.app/)

An e-commerce site that is using [FakeStoreAPI](https://fakestoreapi.com/) to generate pseudo data without running any server-side code, and Stripe API for the checkout process. The site is ~~using Netlify Identity for authentication~~ and Redux to manage the global state of the application.

## Setup

Get the code by cloning the repository using git

```
https://github.com/fyerBall/shop-nextjs
```

Open the terminal in the project directory and install the dependencies:

```
npm install
```

## Env

- Create [Stripe](https://stripe.com//) API key. See instructions from [here](https://stripe.com/docs/api)
- Create a environment `variable(.env.local):`

```
STRIPE_SECRET_KEY=<SECRET_KEY>
STRIPE_PUBLIC_KEY=<PUBLIC_KEY>
HOST_URL=<localhost || prod url when deployed>
```

- Start the project using the command

```
$ npm run dev
```

- Open `http://localhost:3000/` to browse through the website.

## Deployment

If you want to have production build run

```
npm run build
```
