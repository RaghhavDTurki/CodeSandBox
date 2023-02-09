FROM node:16-alpine3.11
WORKDIR '/app'

COPY package.json .
RUN npm install
RUN npm build
COPY . .

CMD ["npm","start"]
