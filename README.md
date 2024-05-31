# Aspire Challenge

This project is a part of Aspire App's frontend challlenge.
The project focuses on creating a web application (inspired by the real Aspire application).

Only the Cards view / page is implemented as part of the challenge.

- Live Demo: [https://aspire-challenge-manas94guptas-projects.vercel.app/cards](https://aspire-challenge-manas94guptas-projects.vercel.app/cards)
- GitHub Repo: [https://github.com/manas94gupta/aspire-challenge](https://github.com/manas94gupta/aspire-challenge)

## How to setup and run locally

- Clone the git repository
- Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

- Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/cards](http://localhost:3000/cards) on your browser to see the app.

## Available Scripts

- `lint` - Runs the linter
- `build` - Builds the app for production
- `seed-data` - Creates seed data for cards

## Tech Stack

- React + Next (Alternatives considered: Vite + React): as a metaframework for the project
- TypeScript: for type-checking
- Tailwind CSS: for styling
- Radix UI: for headless UI components
- Faker.js: for generating fake cards data
- Zod: for data validation

## Tasks List and their status

- [x] Desktop view
- [ ] Mobile view
- [x] Should use an API architecture, where dummy data can be returned from the APIs
- [x] At the start up of the application, some cards should be already available
- [x] Loading state for components
- [x] 404 page
- [x] Add new card
  - open a modal to add a new card
  - The expiration date and
    card number will be randomly generated by the system
  - The card will be appended in the carousel together with the other cards
- [x] Freeze/Unfreeze card
  - On click of the freeze card, the card will get the frozen status
  - The frozen card will look different from the others
  - The freeze button will toggle to “unfreeze” for the frozen card
- [x] Form Validation
- [ ] Tests
- [x] Use of TypeScript, with appropriate types/interfaces
- [x] Use of Tailwind CSS
- [x] Use of any standard UI component library / CSS framework
- [x] Use of a modern JS framework/libraries (React)
- [x] Pixel perfect version of the CSS challenge
- [x] Code optimized for high performance
- [x] Simple and consistent code style, following best practices

## Folder Structure

```bash
.
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── public
│ ├── assets
│ └── favicon.ico
├── src
│ ├── app
│ ├── components
│ ├── data
│ ├── hooks
│ ├── lib
│ ├── providers
│ └── styles
├── tailwind.config.ts
└── tsconfig.json
```

- On the root level there are all the config files like `next-env.d.ts`, `next.config.mjs`, `package.json`, `pnpm-lock.yaml`, `postcss.config.mjs`, `tailwind.config.ts`, and `tsconfig.json`.
- `public` dir holds the static assets like images, favicon, etc.
- `src` dir contains all the source code files of the project
  - `app` dir contains all the routes and pages. The application follows the Next.js routing convention i.e. all the directories and files inside the `app` dir are treated as routes.
  - `components` dir contains all the reusable components like buttons, forms, etc.
  - `hooks` dir contains all the custom hooks used in the project.
  - `providers` dir contains all the react context providers used in the project.
  - `lib` dir contains all the custom libraries used in the project.
  - `styles` dir contains all the custom styles used in the project.
  - `data` dir contains all the data related files like data schema, API endpoints, etc.
