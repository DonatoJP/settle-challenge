FROM node:14
ENV EXEC_MODE=production

RUN apt-get -q update && apt-get -qy install netcat

WORKDIR /usr/app
COPY package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000
RUN chmod +x ./bin/*

ENTRYPOINT [ "./bin/docker-entrypoint.sh" ]