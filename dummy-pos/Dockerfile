FROM node:7
WORKDIR /source
ADD . .

ENV NODE_ENV server
RUN npm install
RUN npm run build

CMD ["node", "server.js"]