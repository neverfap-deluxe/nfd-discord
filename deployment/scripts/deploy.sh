#!/bin/sh

SERVER_ROOT_FOLDER=/docker/letsencrypt-docker-nginx/src/discord
CLIENT_ROOT_FOLDER=/Users/julius.reade/Code/PER/nfd-discord

cp $CLIENT_ROOT_FOLDER/deployment/environment/.env.production $CLIENT_ROOT_FOLDER/deployment/docker/prod-build/.env
cd $CLIENT_ROOT_FOLDER/deployment/docker/prod-build

docker-compose build
docker push dottjt/nfd-discord

rm $CLIENT_ROOT_FOLDER/deployment/docker/prod-build/.env

# nginx docker-compose.yml file
echo 'COMMAND: echo scp nginx/docker-compose.yml'
scp -r ${CLIENT_ROOT_FOLDER}/deployment/docker/prod/docker-compose.yml root@198.199.67.180:/${SERVER_ROOT_FOLDER}/docker-compose.yml

# .env file
echo 'COMMAND: echo scp deployment/environment/.env.production'
scp -r ${CLIENT_ROOT_FOLDER}/deployment/environment/.env.production root@198.199.67.180:/${SERVER_ROOT_FOLDER}/.env

# # nginx.conf file
# echo 'echo rsync nginx/nginx.conf'
# scp -r ${ROOT_FOLDER}/deployment/nginx-prod.conf root@198.199.67.180:/etc/nginx/sites-available/datareade.juliusreade.com

# # datareadeWebhookServer folder
# echo 'echo rsync nginx/.env'
# scp -r ${ROOT_FOLDER}/deployment/datareadeWebhookServer root@198.199.67.180:/docker/letsencrypt-docker-nginx/src/

ssh root@198.199.67.180 <<EOF
  # echo "COMMAND: ln -s /etc/nginx/sites-available/discord-graphql-server.com /etc/nginx/sites-enabled/discord-graphql-server.com"
  # ln -s /etc/nginx/sites-available/discord-graphql-server.com /etc/nginx/sites-enabled/discord-graphql-server.com

  # echo "COMMAND: sudo systemctl restart nginx"
  # sudo systemctl restart nginx

  # NOTE: This removes all images without a container.
  echo "COMMAND: echo y | docker image prune -a"
  docker image prune -af

  echo "COMMAND: docker pull dottjt/nfd-discord:latest"
  docker pull dottjt/nfd-discord:latest

  echo "COMMAND: echo cd /docker/letsencrypt-docker-nginx/src/discord/"
  cd /docker/letsencrypt-docker-nginx/src/discord/

  echo "COMMAND: echo docker-compose down"
  docker-compose down

  echo "COMMAND: echo docker-compose up -d"
  docker-compose up -d

  echo "COMMAND: echo exit"
  exit
EOF


# echo "echo cd /docker/letsencrypt-docker-nginx/src/webhookServer/"
# cd /docker/letsencrypt-docker-nginx/src/webhookServer/

# echo "npm run stop"
# npm run stop

# echo "npm i"
# npm i

# echo "npm run start"
# npm run start

# echo "echo exit"
# exit


# echo "echo cd /docker/letsencrypt-docker-nginx/src/webhookServer/"
# cd /docker/letsencrypt-docker-nginx/src/webhookServer/

# echo "npm run stop"
# npm run stop

# echo "npm i"
# npm i

# echo "npm run start"
# npm run start

# echo "echo exit"
# exit

# # OLD

# # nginx docker-compose.yml file
# echo 'echo rsync nginx/docker-compose.yml'
# rsync -r --delete-after --quiet ./nginx/docker-compose.yml root@198.199.67.180:/docker/letsencrypt-docker-nginx/src/discord/docker-compose.yml

# # .env file
# echo 'echo rsync nginx/.env'
# rsync -r --delete-after --quiet ./nginx/.env root@198.199.67.180:/docker/letsencrypt-docker-nginx/src/discord/.env

# ssh root@198.199.67.180 <<EOF
#   echo "docker pull dottjt/nfd-discord"
#   docker pull dottjt/nfd-discord

#   echo "echo cd /docker/letsencrypt-docker-nginx/src/discord/"
#   cd /docker/letsencrypt-docker-nginx/src/discord/

#   echo "echo y | docker image prune -a"
#   docker image prune -af

#   echo "echo docker-compose down"
#   docker-compose down

#   echo "echo docker-compose up -d"
#   docker-compose up -d

#   echo "echo exit"
#   exit
# EOF

# git add .
# git commit -m "$1"
# git push

# echo 'all done!'
