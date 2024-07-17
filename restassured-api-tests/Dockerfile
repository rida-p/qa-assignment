#FROM openjdk:24-slim-bullseye AS container
FROM gradle AS container
#VOLUME /apitest
WORKDIR /apitest
#COPY . .
# RUN microdnf install findutils
#RUN ["./gradlew", "test"]
ENTRYPOINT ["./gradlew", "test"]
#RUN ["./gradlew", "test"]
#RUN gradle test
#COPY /apitest/allure-results /source/allure-results
CMD ./gradlew test