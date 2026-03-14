# 🌪️ vortex-devkit

The all-in-one developer toolkit for modern web applications. `vortex-devkit` provides strongly-typed React hooks, async helpers, RAG/AI utilities, browser interactors, and general developer utilities—all bundled with zero configuration and 100% tree-shakeable exports.

## 📦 Installation

```bash
npm install vortex-devkit
```

## 🚀 Why vortex-devkit?

*   **Tree-shakeable**: Import exactly what you need without bloating your bundle.
*   **TypeScript native**: Built with strict TS for flawless autocomplete and type safety.
*   **Modern tooling**: Outputs to CJS, ESM, and DTS via `tsup`.
*   **AI-First**: Includes niche utilities specifically designed for LLMs, chatbots, and RAG pipelines.

---

## 🛠️ Subpath Modules

To keep your application bundle infinitely small, `vortex-devkit` supports subpath imports.

### 🤖 AI Utilities (`vortex-devkit/ai`)
Tools for building modern LLM applications.

```typescript
import { chunkText, streamText, estimateTokens } from 'vortex-devkit/ai';

// Split large documents for RAG vectors
const chunks = chunkText(documentContent, 500);

// Consume LLM Response Streams
const res = await fetch('/api/chat');
for await (const chunk of streamText(res)) {
  console.log(chunk);
}
```

### ⚡ Async Utilities (`vortex-devkit/async`)
Wrangle promises and control execution flow.

```typescript
import { retry, sleep, timeoutPromise, debounce } from 'vortex-devkit/async';

// Retry a failing request up to 3 times
const data = await retry(fetchDashboardData, 3);

// Timeout a long-running request after 5 seconds
await timeoutPromise(generateReport(), 5000);
```

### 🎣 React Hooks (`vortex-devkit/hooks`)
Universal hooks for standard UI patterns.

```tsx
import { useClickOutside, useLocalStorage, useTypewriter } from 'vortex-devkit/hooks';

// Animate AI responses
const text = useTypewriter("Hello human...", { speed: 30 });

// Close dropdowns easily
const popupRef = useRef(null);
useClickOutside(popupRef, () => setOpen(false));
```

### 🌐 Browser Utilities (`vortex-devkit/browser`)
Safe DOM wrappers and file handlers.

```typescript
import { copyToClipboard, downloadFile, getDeviceType } from 'vortex-devkit/browser';

await copyToClipboard("npm install vortex-devkit");
downloadFile(reportCSV, "report.csv", "text/csv");
```

### 🏗️ Core Base (`vortex-devkit/core`)
Base primitives and assertions for foundational logic.

```typescript
import { isBrowser, assert } from 'vortex-devkit/core';

// Environment checks
if (isBrowser) {
  console.log("Running in browser environment");
}

// Invariant assertions
assert(user != null, "User must be authenticated");
```

### 🧰 Utilities (`vortex-devkit/utils`)
```typescript
import { cn, logger, timeAgo, safeParseJSON, prettyJSON } from 'vortex-devkit/utils';

// Tailwind Merge 
const classes = cn("px-4 bg-red-500", !error && "bg-green-500");

// Safe parsing without try/catch blocks
const { data, error } = safeParseJSON(str);

// Human readable times
console.log(timeAgo(new Date(Date.now() - 3600000))); // "1 hour ago"
```

---

## 🚀 Upcoming Features
- [ ] `vortex-devkit` CLI for scaffolding standard Next.js configurations.
- [ ] Built-in Zod schema validators for standard Env configurations.

## License
MIT
