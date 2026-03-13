# Course App

Frontend app running on React + TypeScript + Vite.

## Folder structure for development

```text
src/
  app/
    App.tsx          # app container (connects logic + view)
  logic/
    useCounter.ts    # business logic and hooks in pure .ts files
  views/
    AppView.tsx      # presentational UI layer in .tsx
  styles/
    global.css       # global styles, variables, typography, layout base
    app.css          # styles for app/view sections
  assets/
  main.tsx           # app entry point
```

## Development commands

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run build
```

## Recommended workflow

1. Add logic to files in `src/logic`.
2. Build/extend UI in `src/views`.
3. Keep wiring in `src/app/App.tsx`.
4. Put global design tokens and base rules in `src/styles/global.css`.
5. Put page/component-specific styles in `src/styles/app.css`.
