#docker run -it $(docker build .) ./gradlew test && ls
#docker run -it $(DOCKER_BUILDKIT=1 docker build --output out .)
#docker run -v ./:/apitest -it $(docker build .) bash ls /apitest


#docker run -v ./:/apitest $(docker build .) bash


#docker run -v $(pwd ):/apitest -w /apitest -it $(docker build .) bash
#docker run -v $(pwd):/apitest -w /apitest $(docker build .) bash ./gradlew test

docker run -v $(pwd):/apitest -w /apitest $(docker build .) bash ls

#docker run -v ./:/apitest -it $(docker build .) bash