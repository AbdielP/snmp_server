FROM node:12

WORKDIR /snmp_server_node

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node","server.js"]