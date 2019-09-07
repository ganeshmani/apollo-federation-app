FROM node:latest

RUN mkdir -p /usr/src/userapp

WORKDIR /usr/src/userapp

COPY package.json /usr/src/userapp

RUN npm install

COPY . /usr/src/userapp

EXPOSE 4001

CMD ["npm","run","dev"]

