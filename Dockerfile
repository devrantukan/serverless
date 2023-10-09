FROM node
ENV NPM_CONFIG_LOGLEVEL warn
EXPOSE 3001
WORKDIR /usr/src/app
ADD package.json /usr/src/app
ADD . /usr/src/app
RUN ls -al && sh -c pwd && yarn add next-translate && yarn install && yarn build && yarn start
ENTRYPOINT ["npm", "start"]