# NoteShare

### Migration

Go to nestjs folder
`cd ./apps/api`
Actually this works only with `npm`

```bash
npm run migration:generate --name="Exemple"
npm run migration:create --name="Exemple"
npm run migration:run
npm run migration:revert
```

### Shadui

Go to web folder
`cd ./apps/web`

`pnpm dlx shadcn@latest add button`

move automaticly added package from libs/package.json to global package.json
