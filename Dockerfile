#FROM ubuntu:20.04
#RUN apt update
FROM node:14 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --from=build /usr/local/app/dist/coreui-free-angular-admin-template-master /usr/share/nginx/html
EXPOSE 80