# README

## How to run

### local
```shell
./gradlew test
```
### docker
```shell
./run_tests test
```
## Reports

Results will be created during the test run in the `allure-results` folder

Allure can be installed here: https://allurereport.org/docs/install/

After a test run, execute the following to see the report:
```shell
allure serve allure-results
```
