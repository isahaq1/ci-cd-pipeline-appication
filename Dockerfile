FROM node:alpine3.20
WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "node", "server/app.js" ]