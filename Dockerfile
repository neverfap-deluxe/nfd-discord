# FROM node:10.12.0-alpine as build-deps
FROM keymetrics/pm2:latest-alpine as build-deps

ENV NODE_ENV=production
ENV NODE_PATH=/usr/src/app/api/node_modules
ENV PATH=/usr/src/app/api/node_modules/.bin:$PATH

WORKDIR /usr/src/app/api
COPY package.json /tmp/api/
RUN cd /tmp/api && npm install
RUN cp -a /tmp/api/node_modules /usr/src/app/api

COPY . .

EXPOSE 2000
EXPOSE 2001
CMD [ "npm", "run", "deploy" ]
# CMD [ "npm", "run", "deploy" ]
