# Consume weather

# comandos

- Install dependencies

```cmd
npm install
```

- Run enviroment production

```cmd
npm run start
```

- Run enviroment development

```cmd
npm run dev
```

- Run test

```cmd
npm run test
npm run test:coverage
```

- Run linter

```cmd
npm run lint
```

- Routes

| Method | URL                    | Description                                                         |
| ------ | ---------------------- | ------------------------------------------------------------------- |
| GET    | /api/v1/location       | Returns user location                                               |
| GET    | /api/v1/current/:city  | Returns current weather with location user or city. `city`          |
| GET    | /api/v1/forecast/:city | Returns the week's weather by the user's location or a city. `city` |
| GET    | /api-doc               | swagger doc                                                         |
