# Next js Directus Starter

Next.js 13 starter for building apps with Directus CMS Radix UI and Tailwind CSS.

## Usage

```bash
git clone https://github.com/fredygerman/next-js-directus-starter.git
```

### Change directory

```bash
cd next-js-directus-starter
```

### Install Dependencies

```bash
pnpm install
```

### Start Directus CMS

Make sure your Directus CMS is running and you have created a project.

### Define Environment Variables

```bash
cp .env.example .env
```

Note : Make sure all the environment variables are defined in your .env file.

For the DIRECTUS_DEFAULT_ROLE_ID you can use the default role id from your directus project.
For DIRECTUS_USER_CREATOR_TOKEN you need to create a user and a static token in your directus project.

### Start the development server

```bash
pnpm run dev
```

### You can now view the app in your browser at http://localhost:3000 🚀

## Features

- Next.js 13 App Directory
- Directus CMS
- Radix UI Primitives
- Tailwind CSS
- Icons from [Lucide](https://lucide.dev)
- Themes with next-themes and Tailwind CSS
- Tailwind CSS class sorting, merging and linting.
- Next js Server Side Components (SSC) & Client Side Components (CSC)
- Next js Form Actions

## Roadmap

- [✅] Add Login and Register
- [ ] Add Analytics
- [ ] Add Installation Instructions Documentation
- [ ] Add Dashboard Page
- [ ] Add Simple Blog
- [ ] Add SEO
- [ ] Add Auth Guard
- [ ] Add Password Reset and Forgot Password
- [ ] Add User Profile
- [ ] Add User Settings

## Customizations and configurations.

- Site Config (site.ts) for Site Information configuration (i.e Name, Title, Nav Bar items, Links etc).
- Response Messages Config (messages.ts) for Creating user friendly response messages.
- [@t3-oss/env-nextjs](https://create.t3.gg/en/usage/env-variables) For Environment Variables configuration. (env.mjs)
- and other config files. (tailwind.config.js, postcss.config.js, next.config, prettier.config.js)

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).
