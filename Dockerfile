# set base image (host OS)
FROM NodeJS

ADD . /app

# set the working directory in the container
WORKDIR /app

# copy the dependencies file to the working directory
COPY requirements.txt .

# install dependencies
RUN npm install

# copy the content of the local src directory to the working directory
COPY . .

CMD [ "node src/ESB" ]