This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Instalation

1. npm install
2. npm start

## Live page

## Save data

All data is saving to localStorage.

## REST API

{{base_url}}:
/create - form that save user data to localStorage as field "user", type: {"name": string, "desiredJob": string, "about": string}

/login - not implemented, only UI and that's all

/jobs - input with opportunity to find job and list of fetched jobs

/job-detail - implemented as modal window with detail to checked job

/like - (Favorite) list of liked jobs

## Custom hooks

1. useLiked() - to create liked state. Return 2 parameters - {liked, handleLiked}. Liked - array of liked jobs. HandleLiked(job) - get object of type Job as argument and add or remove it from liked
