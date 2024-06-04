FROM node:alpine3.19
WORKDIR /app
COPY  package*.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD [ "node", "server/app.js" ]