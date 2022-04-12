FROM node:14

WORKDIR /Users/91817/Documents/Kreeti/docker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]