FROM node:16 AS build-stage

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .

RUN npm run build

FROM nginx

COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
