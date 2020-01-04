### STAGE 1: Build ###
FROM node:10.18.0-alpine3.11 AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
#RUN npm run build --configuration=development
RUN npm install -g @angular/cli
RUN ng build -c development

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
