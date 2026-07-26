# 🚀 The Ultimate 7-Day React Gauntlet

![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-19.[x].[x]-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6)

This is the **Ultimate 7-Day gauntlet**. I have compressed every single topic from raw JavaScript prerequisites to React 19.[x].[x]’s newest APIs, enterprise architecture, under-the-hood mechanics, and interview prep into 7 extreme days.

---

## 📅 Course Breakdown

### <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" width="28" height="28" align="center" /> Day 1: Foundations, Core React, & TypeScript (The Engine Room)
*Before you build, you must master the atoms that React uses.*

#### ⚡ Advanced JavaScript (ES2024+)
- **Execution Context, Lexical Scoping, Closures** (crucial for hooks).
- **Event Loop** (Microtasks vs. Macrotasks), Promises, Async/Await.
- **Array/Object Destructuring**, Spread/Rest operators.
- `Map`, `Set`, `WeakMap`, `WeakSet`.
- **ES Modules** (static `import/export`) vs Dynamic `import()`.

#### 📘 TypeScript for Enterprise React
- **Basic types**, Interfaces vs Types.
- **Generics**, Utility Types (`Partial`, `Omit`, `Pick`, `Record`).
- **Typing React Components:** standard functions vs `React.FC`.
- **Typing Props, Children, Event Handlers** (`React.ChangeEvent`, `React.MouseEvent`).
- **Discriminated Unions** for component variants.

#### ⚛️ JSX & Rendering Fundamentals
- **What is JSX?** How Babel/SWC compiles it to `React.createElement`.
- **Functional Components** (Class components are dead, except Error Boundaries).
- **Props:** Passing, spreading, `children`, render props pattern.
- **State:** `useState` (lazy initialization, functional updates, state batching).
- **Immutable state update patterns.**
- **Event Handling:** Synthetic Events, DOM event pooling (history), passing arguments.
- **Lists & Keys:** Why `key` is needed (reconciliation identity), index as key anti-pattern.
- **Conditional Rendering:** `&&`, ternaries, early returns, IIFEs.

#### 🏗️ Refs & DOM
- `useRef`: DOM access vs mutable value persistence.
- **Forwarding Refs** (Legacy v18) vs **React 19 Refs as Props** (no `forwardRef` needed).
- `useImperativeHandle` (exposing specific functions to parent).

---

### <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" width="28" height="28" align="center" /> Day 2: The Hook Ecosystem & React 19.[x].[x] Paradigms
*All hooks, old and new, up to version 19.[x].[x].*

#### 🎣 Classic Hooks (Deep Dive)
- `useEffect`: Mount, update, unmount, cleanup functions, dependency arrays.
- **Stale closures** in `useEffect` and how to fix them.
- `useContext`: Context creation, Provider pattern, performance pitfalls (re-rendering all consumers).
- `useReducer`: Complex state, action dispatchers, `useReducer` vs `useState`.
- `useMemo` & `useCallback` (and why the React Compiler makes them obsolete).
- `useLayoutEffect` vs `useEffect` (blocking the paint).
- `useDebugValue` (for custom hooks in DevTools).
- `useId` (SSR-safe unique IDs).

#### ✨ React 19 / 19.[x].[x] New Hooks & APIs
- `use` API: Reading promises and context conditionally within conditionals/loops.
- `useActionState` (formerly `useFormState`): Managing async form submissions.
- `useFormStatus`: Pending state of parent `<form>` without prop drilling.
- `useOptimistic`: Instant UI updates before server confirmation (and rollback on error).
- `useSyncExternalStore`: Subscribing to external stores (Redux/Zustand internals).
- **React 19.[x].[x] exclusive:** `useEffectEvent` (extracting non-reactive event logic out of `useEffect` to avoid dependency array hell).

#### 🎭 React 19.[x].[x] `<Activity>` Component
- Replacing `display: none` hacks. Preserving component state when hidden using `mode="hidden" | "visible"`.

#### 🛠️ Custom Hooks
- **Rules of Hooks** (top-level only, rules of conditional execution).
- **Architecture:** Extracting logic (e.g., `useDebounce`, `useFetch`, `useIntersectionObserver`).

---

### <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" width="28" height="28" align="center" /> Day 3: React Server Components (RSC), Actions & Server-Side
*The biggest paradigm shift in modern React.*

#### 🖥️ React Server Components (RSC) Architecture
- **Server vs Client components** (`'use client'` and `'use server'` directives).
- **Data fetching** directly in Server Components.
- Passing serialized data from Server to Client components.
- **Anti-patterns:** You cannot use hooks, events, or browser APIs in Server Components.

#### 🔌 Server Actions & Mutations
- Invoking Server Functions from Client Components.
- **Progressive enhancement** (forms working without JS).
- Integrating with `useActionState` and `useFormStatus`.

#### 🚀 React 19.[x].[x] Server/SSR Enhancements
- `cacheSignal`: Aborting server requests if the cache is invalidated.
- **Partial Pre-rendering (React DOM):** Static HTML shell + streamed dynamic holes in the same route.
- **Batching Suspense Boundaries** for SSR.
- **SSR:** Native Web Streams support for Node.js.

#### ⏳ Concurrent React Features
- `Suspense`: Fallback UI, cascading suspense, Suspense for Data Fetching.
- `useTransition`: Marking state updates as non-urgent (keeps UI responsive).
- `useDeferredValue`: Deferring expensive renders (e.g., search filtering).

---

### <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" width="28" height="28" align="center" /> Day 4: Enterprise State, Routing, Styling & UI Architecture
*How to structure massive applications.*

#### 🗄️ Server State (Data Fetching)
- **TanStack Query (React Query):** `queryClient`, `useQuery`, `useMutation`.
- Caching, Stale Time, Garbage Collection, Query Invalidation.
- Optimistic updates with TanStack Query.
- Infinite queries, SSR prefetching & Hydration.

#### 🧠 Client State Management
- **Redux Toolkit (RTK) & RTK Query** (Legacy enterprise standard).
- **Zustand** (Modern lightweight state).
- **Jotai** (Atomic state management for fine-grained re-renders).

#### 🔗 URL State
- Managing state via search params (`nuqs` library).

#### 🛣️ Routing (Meta-frameworks)
- **Next.js App Router:** Layouts, Templates, Route Groups, Loading/Error UI.
- **Next.js Route Handlers** (API building).
- **React Router v7 (Remix):** Framework mode vs Library mode.
- **TanStack Start:** Vite-based, type-safe RSC alternative to Next.js.

#### 🎨 Styling in the RSC Era
- **Tailwind CSS** (utility-first, JIT compilation).
- **CSS Modules** (native, RSC compatible).
- Why CSS-in-JS (Styled Components) is dead for RSCs.

#### 🧩 UI Architecture & Design Systems
- **Headless UI** (Radix UI, React Aria) for strict accessibility (WAI-ARIA).
- **Shadcn UI** pattern (copy-paste ownership vs NPM dependencies).
- **Compound Components pattern** (e.g., `<Select><SelectTrigger><SelectContent>`).
- **Storybook:** Component isolation, visual testing, documentation.

---

### <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" width="28" height="28" align="center" /> Day 5: Extreme Performance, Profiling & The React Compiler
*Making enterprise apps lightning-fast.*

#### ⚙️ The React Compiler (Forget)
- How it auto-memoizes components and values at build time.
- **Rules of React:** Side-effect free rendering, immutability.
- Identifying compiler violations.

#### 🔬 Under the Hood (Virtual DOM & Fiber)
- **What is a Fiber node?** (Linked-list tree, work loops).
- **Time-slicing:** How React pauses/resumes rendering to keep the main thread free.
- **The Reconciliation Algorithm:** O(n) heuristic, key-based diffing.
- **Re-render triggers:** State change, Parent re-render, Context change.

#### 🏎️ Performance Optimization Techniques
- **Code Splitting:** `React.lazy`, dynamic imports, route-level splitting.
- **List Virtualization:** Rendering 10,000+ rows using `@tanstack/react-virtual`.
- **Debouncing and Throttling** heavy computations and API calls.
- **Image/Asset optimization:** `preload`, `preinit`, `prefetchDNS` (React 19 APIs).

#### 📊 Profiling & Core Web Vitals
- **React DevTools Profiler:** Flamegraphs, Ranked charts.
- **React 19.[x].[x] "Performance Tracks":** Finer-grained render attribution in DevTools.
- **Core Web Vitals:** LCP (Largest Contentful Paint), INP (Interaction to Next Paint), CLS (Cumulative Layout Shift).

#### 🧹 Memory Management
- Identifying and fixing memory leaks in single-page apps (cleaning up event listeners, AbortController for fetches).

---

### <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Jest.svg" width="28" height="28" align="center" /> Day 6: Architecture, Testing & Security
*Enterprise standards for robust codebases.*

#### 🏢 Enterprise Architecture
- **Monorepos:** Turborepo or Nx (workspace setup, shared UI packages, task caching).
- **Micro-frontends:** Webpack Module Federation (sharing React apps across independent teams).
- **Authentication:** NextAuth/Auth.js, JWTs, HTTP-only cookies, Server vs Client session validation.
- **Feature Flags:** Gating features for A/B testing or gradual rollouts.

#### 🧪 Testing
- **Unit Testing:** Vitest or Jest (testing pure functions, reducers, hooks).
- **Component Testing:** React Testing Library (RTL). Testing behavior over implementation details (`getByRole`, `userEvent`).
- **Mocking:** Mock Service Worker (MSW) for intercepting network requests.
- **End-to-End (E2E) Testing:** Playwright or Cypress (testing user flows across the whole app).

#### 🔒 Security
- **Cross-Site Scripting (XSS):** Why React escapes variables, danger of `dangerouslySetInnerHTML`.
- **Cross-Site Request Forgery (CSRF)** & CORS configuration.
- **Content Security Policy (CSP)** headers.
- **Server Action security:** Validating origins, encrypting closure data.

---

### <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/GithubActions-Dark.svg" width="28" height="28" align="center" /> Day 7: System Design, CI/CD & Senior Interview Mastery
*The final boss: landing the job and deploying the app.*

#### 📐 Frontend System Design (Interview Scenarios)
- **Autocomplete/Search Component:** Debouncing, caching previous searches, aborting outdated fetches (`AbortController`), keyboard navigation (accessibility).
- **Enterprise Data Table:** Server-side pagination, sorting, filtering, virtualization, row selection state management.
- **Multi-step Form Wizard:** Global vs local state, validation per step, caching drafts to `localStorage`, preventing data loss on refresh.
- **Real-time Chat App:** WebSockets vs Server-Sent Events (SSE), optimistic UI, message ordering, infinite scroll for history.

#### 💬 Classic Interview Code Questions
- Implement `useDebounce` or `useThrottle` from scratch.
- Implement `usePrevious` hook.
- Fixing a `setInterval` that logs stale state.
- Fixing a race condition in a rapid `useEffect` data fetcher.
- Debounce vs Throttle (theory and use cases).

#### 🔄 CI/CD & Deployment
- **GitHub Actions:** YAML pipelines for Linting -> Type Checking -> Unit Tests -> E2E Tests -> Build.
- Branch protection rules and PR checks.
- **Dockerizing** a React application (multi-stage builds).
- **Deployment targets:** Vercel (edge), AWS Amplify, or self-hosted Node servers.
- **Environment variable management** (build-time vs runtime).

---

<div align="center">
  <br />
  <strong>Your Challenge:</strong> If you can read the docs, build a small prototype, and explain the trade-offs for <em>every single bullet point</em> on this list within 7 days, you will be operating at a Senior React 19.[x].[x] level. Good luck, brother. Go build.
  <br />
</div>
