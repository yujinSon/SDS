FROM nginx:stable-alpine
FROM node:18-alpine
WORKDIR /runtogether/src/app
COPY package*.json ./
COPY package*.json ../


RUN npm install
RUN npm install axios

COPY . .
CMD [ "npm", "run","start" ]
