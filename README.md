# Flutter Talks Collection 🎥

A curated collection of Flutter talks from around the world. This repository serves as a community-driven archive of Flutter-related presentations, workshops, and discussions.

## About

Flutter Talks Collection is a comprehensive archive of Flutter-related talks from various events, conferences, and platforms. Each talk is carefully curated and categorized for easy discovery.

## 🚀 How to Submit a Talk

1. **Fork** this repository
2. **Create** your talk entry:
   - Navigate to `src/content/talks/`
   - Create a new markdown file using the template below
   - Add the talk thumbnail to `public/images/talks/`
3. **Submit** a Pull Request with your changes

### Talk Entry Template

```markdown
---
title: "Your Talk Title"
event: "Event Name (e.g., FlutterCon USA 2024)"
date: "YYYY-MM-DD"
year: "YYYY"
tags: ["tag1", "tag2", "tag3"]
thumbnail: "/images/talks/your-thumbnail.jpg"
videoUrl: "https://youtube.com/watch?v=..."
---

Brief description of the talk (2-3 sentences)
```

### Entry Requirements

Your submission should include:
- A clear title
- Event name
- Date and year
- Relevant tags
- Video URL
- Thumbnail image (if available)
- Brief description

## 🤝 Contributing

We welcome contributions from the Flutter community! Please ensure your submissions follow our guidelines and maintain high quality standards.

## 📜 License

This project is open source and available under the MIT license.

```sh
npm create astro@latest -- --template minimal
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
