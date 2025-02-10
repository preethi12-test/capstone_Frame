# capillary-test-automation

### Steps to run loyaltyware-integration tests

- Create a `.env` file inside `packages/backend`

    ```
    CAP_CLUSTER=
    HOST=
    ```

- Install dependencies

    ```
    yarn install
    ```

- Run the tests

    ```
    nx e2e backend
    ```

### Steps to run frontend-web tests

- Create a `.env` file inside `packages/frontend/web`

    ```
    BASE_URL=
    HEADLESS=false
    ```

- Install dependencies

    ```
    yarn install
    ```

- Run the tests

    ```
    nx e2e healthcare-frontend-web
    ```

### Steps to run frontend-mobile-android tests

- Create a folder `assets` in the workspace root and add the `app.apk`

- Install dependencies

    ```
    yarn install
    ```

- Run the tests

    ```
    nx run healthcare-frontend-mobile:android-tests
    ```
