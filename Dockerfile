FROM mhart/alpine-node:latest
MAINTAINER Dan Jellesma

ARG VCS_REF
ARG BUILD_DATE

RUN npm i http-server -g

RUN mkdir /public
WORKDIR /public
COPY ./public ./public
COPY ./build ./build

EXPOSE 8080
CMD ["http-server","build"]