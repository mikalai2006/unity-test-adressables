FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5555
# RUN npm run ts-build
CMD ["node", "index.js"]