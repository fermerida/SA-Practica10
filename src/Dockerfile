# set base image (host OS)
FROM node:12

# set the working directory in the container
WORKDIR /usr/src

# copy the dependencies file to the working directory
COPY package*.json ./


# install dependencies
RUN npm install

# copy the content of the local src directory to the working directory
COPY . .

EXPOSE 8080
CMD [ "node", "ESB.js" ]