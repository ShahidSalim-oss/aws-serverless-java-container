FROM ubuntu:20.04
RUN apt update
FROM node:14 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /app/dist/coreui-free-angular /usr/share/nginx/html
