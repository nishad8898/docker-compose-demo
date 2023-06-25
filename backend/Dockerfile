FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i -g pnpm nodemon && pnpm i
EXPOSE 4000
CMD [ "npm","start" ]
