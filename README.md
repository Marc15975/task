# Task

A modern full-stack task management application built with a monorepo architecture using **Turborepo**, **pnpm**, and **TypeScript**.

Task provides a centralized platform for creating, organizing, updating, and tracking tasks, with a clear separation between the frontend, backend, and shared types.

## ✨ Features

- Create and manage tasks
- Update task information and status
- Delete tasks
- Track pending and completed activities
- Full-stack architecture
- Shared TypeScript types between applications
- Monorepo architecture with Turborepo
- Centralized dependency management with pnpm

## 🏗️ Project Structure

```text
task/
├── apps/
│   ├── client/          # Frontend application
│   └── server/          # Backend API
│
├── packages/
│   └── types/           # Shared TypeScript types
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

The project follows a monorepo architecture, allowing the frontend and backend to share common packages while keeping each application independently organized.

## 🛠️ Tech Stack

### Frontend

- TypeScript
- Next.js
- React

### Backend

- Node.js
- TypeScript

### Monorepo

- Turborepo
- pnpm

### Shared Packages

- TypeScript shared types

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- pnpm

You can install pnpm globally with:

```bash
npm install -g pnpm
```

### Installation

Clone the repository:

```bash
git clone https://github.com/Marc15975/task.git
```

Navigate to the project directory:

```bash
cd task
```

Install all workspace dependencies:

```bash
pnpm install
```

## ⚙️ Environment Variables

Some applications inside the monorepo may require environment variables.

Create the corresponding environment files based on the provided `.env.example` files.

For example:

```bash
cp apps/client/.env.example apps/client/.env.local
```

Never commit `.env` or `.env.local` files containing credentials or sensitive information.

## 💻 Development

Run the project in development mode:

```bash
pnpm dev
```

Turborepo will execute the development scripts for the applications configured in the workspace.

You can also run applications individually using pnpm filters.

Example:

```bash
pnpm --filter client dev
```

## 📦 Shared Types

The project includes a shared package located at:

```text
packages/types
```

This package allows the frontend and backend to share TypeScript interfaces and types, helping maintain consistent data structures across the application.

Example architecture:

```text
Frontend
    │
    │
    ▼
Backend API
    │
    │
    ▼
Database

Frontend ─────┐
              ├──► @task/types
Backend ──────┘
```

This approach reduces duplicated type definitions and improves type safety across the entire application.

## 🧩 Monorepo Architecture

The project uses **Turborepo** to manage multiple applications and packages from a single repository.

```text
                  ┌─────────────────┐
                  │    Turborepo    │
                  └────────┬────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
          ┌───▼────┐               ┌────▼───┐
          │ Client │               │ Server │
          └───┬────┘               └────┬───┘
              │                         │
              └────────────┬────────────┘
                           │
                    ┌──────▼──────┐
                    │ Shared Types │
                    └─────────────┘
```

This architecture makes it easier to:

- Share code between applications
- Maintain consistent TypeScript types
- Manage dependencies
- Scale the project
- Run development and build tasks efficiently

## 📜 Available Scripts

Common commands:

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build the project
pnpm build

# Run linting
pnpm lint
```

Available commands may vary depending on the scripts configured inside each workspace.

## 🎯 Project Purpose

This project was created to build a scalable full-stack task management system while applying modern software development practices such as:

- Monorepo architecture
- Type-safe development
- Separation of concerns
- Shared packages
- Modern frontend and backend development
- Scalable project organization

## 👨‍💻 Author

**Marc15975**

GitHub: `@Marc15975`

## 📄 License

This project is currently intended for educational and portfolio purposes.
