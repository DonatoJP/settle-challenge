FROM node:14

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./src

EXPOSE 3000

ENTRYPOINT [ "node", "src/index.js" ]