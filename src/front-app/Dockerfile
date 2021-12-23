FROM node:14

WORKDIR /usr/app

COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ]