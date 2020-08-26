FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/toolbox-server
WORKDIR /srv/app/toolbox-server

COPY package.json /srv/app/toolbox-server
COPY package-lock.json /srv/app/toolbox-server

RUN npm install

COPY . /srv/app/toolbox-server


CMD ["npm", "run", "dev"]