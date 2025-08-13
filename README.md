# 📌 React 19 Task Management Board

A modern **Task Management** application built with **React 19**, demonstrating the latest React features, clean architecture, and best practices for a scalable front‑end project.

---

## 🚀 Features

- **React 19 Latest Hooks:**
  - `useTransition` — Smooth UI updates
  - `useActionState` & `useFormStatus` — Form submission feedback
- **React Router DOM v7:**
  - Nested Routes with `<Outlet />`
  - Layout Routes
  - Private/Protected Routes
  - Data Loaders for prefetching
- **TanStack React Query v5:**
  - `queryClient.ensureQueryData()` in `loader`
  - `useSuspenseQuery()` to consume cached + prefetched data
- **Zod** for schema validation
- **React Hook Form** for form state and error handling
- **Tailwind CSS** for utility‑first styling
- **shadcn/ui** (optional) for ready‑made UI components
- **sonner** / **react-hot-toast** for toast notifications
- LocalStorage‑based Authentication Context (mock auth)
- Scalable **feature‑based folder structure**

---

## 📂 Folder Structure

---

## ⚙️ Tech Stack

| Tech                         | Purpose                                 |
| ---------------------------- | --------------------------------------- |
| **React 19**                 | Component library                       |
| **TypeScript**               | Strong typing                           |
| **React Router DOM v7**      | Routing, loaders, protected routes      |
| **TanStack React Query v5**  | Data fetching, caching, cache hydration |
| **Zod**                      | Validation schemas                      |
| **react-hook-form**          | Form handling                           |
| **Tailwind CSS**             | Styles                                  |
| **shadcn/ui** (optional)     | UI components                           |
| **sonner / react-hot-toast** | Toast messages                          |
| **Vite**                     | Build + dev environment                 |

---

## 🗂 Key Design Patterns

- **Feature-based Architecture** — each domain (tasks, users, auth) has its own folder for queries, hooks, and components
- **Query Key Factory** — centralised query keys for safe cache usage
- **Loader → ensureQueryData → useSuspenseQuery** — to prefetch in route loader & read in component
- **Context + PrivateRoute** — simple localStorage based auth
- **Zod + react-hook-form** — for typed validation
- **Optimistic UI** with `useTransition` / `useActionState`

---

## 📦 Installation

Clone repository
git clone <your-repo-url>
cd task-board

Install dependencies
npm install

Start development server
npm run dev

---

## 🚏 Data Loading Flow

1. When navigating to `/dashboard`, the **loader** runs:

→ Reads the same cached data, avoiding new network request (until stale).

---

## 🔒 Auth Flow

- Login → store username in `localStorage` via `AuthContext`
- Protected routes wrapped in `PrivateRoute`
- Logout → remove from storage + redirect home

---

## 📝 Available Scripts

| Command           | Action                           |
| ----------------- | -------------------------------- |
| `npm run dev`     | Run dev server                   |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build locally |

---

## ✨ Future Improvements

- Replace mock API with real backend
- Add drag‑and‑drop for task ordering
- Mutation + optimistic updates using React Query

---

## 📄 License

This project is open‑source — feel free to use & modify.
