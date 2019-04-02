#!/bin/sh

ssh root@198.199.67.180 <<EOF
  echo "docker pull dottjt/nfd-discord"
  docker pull dottjt/nfd-discord

  echo "echo cd /docker/letsencrypt-docker-nginx/src/discord/" 
  cd /docker/letsencrypt-docker-nginx/src/discord/ 
  
  echo "echo y | docker image prune -a"
  docker image prune -af

  echo "echo docker-compose down"
  docker-compose down 
  
  echo "echo docker-compose up -d"
  docker-compose up -d 
  
  echo "echo exit"
  exit
EOF

echo 'all done!'
