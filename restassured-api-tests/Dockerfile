#FROM openjdk:24-slim-bullseye AS container
##FROM gradle AS container
#VOLUME /source
#WORKDIR /apitest
##COPY hom* /mydir/
#COPY * /apitest
#RUN pwd
#RUN ls
# RUN microdnf install findutils
#RUN ["./gradlew", "test"]
#ENTRYPOINT ["./gradlew", "test"]
#RUN ["./gradlew", "test"]
#RUN gradle test
#COPY /apitest/allure-results /source/allure-results
#CMD ./gradlew test
FROM gradle:latest AS BUILD
WORKDIR /apitest
COPY . .
ENTRYPOINT ["gradle"]
#RUN gradlew test
#COPY /apitest/allure-results /source/allure-results