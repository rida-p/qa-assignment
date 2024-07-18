docker run -v $(pwd):/cypress -w /cypress  -it $(docker build .) bash
