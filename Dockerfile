FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npm install --omit=dev

EXPOSE 3600
CMD [ "npm", "start" ]