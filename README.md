# Nextjs, Stripe API, and [FakeStoreApi](https://fakestoreapi.com/)

DEMO 👉🏻 [Here](https://shop-nextjs-jlb2o2euf-fyerball.vercel.app/).

NextJS application that uses Fake Store Api to display products and Stripe Api for the check out process. I used Netlify Identity for authentication.

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
