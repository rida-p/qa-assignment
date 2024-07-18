FROM cypress/included:latest
VOLUME /cypress
WORKDIR /cypress
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run"]