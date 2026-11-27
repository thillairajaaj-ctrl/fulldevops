FROM node:20-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --omit=dev
COPY app.js ./
USER node
EXPOSE 3000
CMD ["node", "app.js"]