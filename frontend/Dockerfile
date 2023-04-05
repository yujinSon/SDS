FROM nginx:stable-alpine
FROM node:16.13.0-alpine
WORKDIR /runtogether/src/app
COPY package*.json ./
COPY package*.json ../

# 
RUN npm install
RUN npm install axios
RUN npm install react-wordcloud --force

COPY . .
CMD [ "npm", "run","start" ]
