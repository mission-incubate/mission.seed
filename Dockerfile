FROM keymetrics/pm2:latest-alpine

ENV NODE_ENV production
WORKDIR /usr/src/app

# Bundle APP files
COPY ["package.json", "package-lock.json*", "pm2.json", ".env",  "./"]
COPY build build/

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Show current folder structure in logs
RUN ls -al 
#-R

# Expose the listening port of your app
EXPOSE 3000

CMD [ "pm2-runtime", "start", "pm2.json" ]
