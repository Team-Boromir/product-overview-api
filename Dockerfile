FROM node:12-alpine
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
RUN apk add --no-cache python3 g++ make
WORKDIR /product-overview-api
COPY . .
RUN npm install --production
CMD ["node", "server/app.js"]