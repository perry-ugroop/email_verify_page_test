FROM node:8

WORKDIR /email_verify/
COPY ./assets/ ./assets
COPY ./layouts/ ./layouts
COPY ./lib/ ./lib
COPY ./views/ ./views
COPY ./config.js ./
COPY ./index.js ./
COPY ./package.json ./
COPY ./package.json ./
COPY ./package-lock.json ./

RUN ls -l

RUN npm install

CMD npm run start

EXPOSE 4000

