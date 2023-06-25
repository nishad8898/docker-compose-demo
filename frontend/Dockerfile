FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm i -g pnpm && pnpm i
EXPOSE 3000
CMD [ "npm","run","dev" ]
