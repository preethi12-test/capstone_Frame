# healthcare-frontend-web

### Steps to run the tests

- Install deps:

    ```
    npx playwright install --with-deps
    ```

- Execute Smoke Tests:

    - On All browsers

        ```
        nx run smoke
        ```

    - Chrome

        ```
        nx run smoke-chrome
        ```

    - Firefox

        ```
        nx run smoke-firefox
        ```

    - Webkit
        ```
        nx run smoke-webkit
        ```
