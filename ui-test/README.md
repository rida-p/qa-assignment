# README

## How to run

### local

Running the tests

```shell
npm run headless
```

Opening Cypress GUI 
```shell
npm run dev
```

### docker
```shell
./run_tests headless
```
## Reporting

- Each spec file gets its own `json` test result file created during the test run in the `report/mochawesome-specs` folder
- To generate a HTML report that can be viewed in a browser:

    ```shell
    npm run report:generate
    ```

A shortcut to clean the test result folder is also provided (for *nix systems only)

```shell
    npm run reports:clean
    ```

