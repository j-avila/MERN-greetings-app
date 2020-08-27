FROM node:10.21.0-alpine

RUN mkdir -p /srv/app/toolbox-client
WORKDIR /srv/app/toolbox-client

COPY package.json /srv/app/toolbox-client
COPY package-lock.json /srv/app/toolbox-client

RUN npm install

COPY . /srv/app/toolbox-client


CMD ["npm", "start"]