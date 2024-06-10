
# ml-playwright :performing_arts:

e2e testing Mercado Libre website with Playwright


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`USER`


## Running Tests

Run tests on headless mode:

```bash
  npx playwright test
```

Debbug and headed mode:

```bash
  npm run playwright:d
```

Skip flaky tests:

```bash
  npm run playwright-skip-flaky
```

