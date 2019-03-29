FROM node:10.12.0-alpine as build-deps

ENV NODE_ENV=production
ENV NODE_PATH=/usr/src/app/api/node_modules
ENV TYPEORM_CONNECTION=postgres
# ENV TYPEORM_HOST=172.26.0.2
# ENV TYPEORM_HOST=watashi-api
# ENV TYPEORM_USERNAME=deploy
# ENV TYPEORM_PASSWORD=deploy
# ENV TYPEORM_DATABASE=watashi_api
# ENV TYPEORM_PORT=5432
# ENV TYPEORM_SYNCHRONIZE=true
# ENV TYPEORM_LOGGING=false
# ENV TYPEORM_ENTITIES=src/entity/**/*.ts
# ENV TYPEORM_MIGRATIONS=src/migration/**/*.ts
# ENV TYPEORM_SUBSCRIBERS=src/subscriber/**/*.ts


ENV PATH=/usr/src/app/api/node_modules/.bin:$PATH

WORKDIR /usr/src/app/api
COPY package.json yarn.lock /tmp/api/
RUN cd /tmp/api && yarn
RUN cp -a /tmp/api/node_modules /usr/src/app/api

COPY . .

EXPOSE 2000
CMD [ "yarn", "start" ]
