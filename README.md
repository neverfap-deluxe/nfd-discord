# NeverFap Deluxe Discord Server / GraphQL Server

This NeverFap Deluxe Discord Server is a Node.js Discord API which serves all the logic for the NeverFap Deluxe Bot in our lovely Discord Server.
Since all the Discord database data is attached to it, the server also hosts the GraphQL API for The NeverFap Deluxe League, which is the conceptual front-end of the server.

The bot does a heap of different things, but largely it's designed to track your #accountability posting.

Released under the [GNU GPLv3 licence](https://github.com/neverfap-deluxe/nfd-discord/blob/master/LICENSE).

## Tech

Backend: Node.js, Koa, Discord.js, Postgres, GraphQL, PM2
Deployment: Travis CI, Docker, Digital Ocean

## Develop Build Instructions

It's not too bad. Here is how I've decided to configure it.

### Step 1. Setup Let's Encrypt.

<!-- https://www.humankode.com/ssl/how-to-set-up-free-ssl-certificates-from-lets-encrypt-using-docker-and-nginx -->

- `ssh root@198.199.67.180`
- `cd /docker/letsencrypt-docker-nginx/src/letsencrypt`
- `mv docker-compose.yml && mv nginx.conf`
- `sudo docker-compose up -d`

### Step 2. Create Prod Env

- `touch /nginx/.env`
- `populate it`

### Step 3. Move relevant files to server

- `mkdir /docker/letsencrypt-docker-nginx/src/datareade`
- `mv docker-compose && nginx-xml


## Database Setup Instructions
- `psql`
- `CREATE DATABASE nfd_discord;`
- `CREATE USER nfd WITH ENCRYPTED PASSWORD 'nfd';`
- `GRANT ALL PRIVILEGES ON DATABASE nfd_discord TO nfd;`
