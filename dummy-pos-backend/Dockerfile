FROM mhart/alpine-node:6.10.1
WORKDIR /source
ADD . .

ENV PORT 3000
RUN npm install

CMD ["npm", "start"]