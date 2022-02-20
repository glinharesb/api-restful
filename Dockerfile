FROM node:16.13.1-alpine

WORKDIR /usr/app
COPY . .
RUN npm install