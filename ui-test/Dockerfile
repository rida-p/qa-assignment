FROM cypress/included:latest
VOLUME /test
WORKDIR /test
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run"]