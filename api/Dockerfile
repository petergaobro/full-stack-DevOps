
ARG NODE_VERSION=20.16.0

# Use an official Node.js runtime as a parent image
FROM node:${NODE_VERSION}-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json to the working directory
COPY package*.json ./

# Install the application's dependencies
# some of the package will not be installed in container, don't know why, so I have to copy the node_modules from local to container
# RUN npm install

# Copy the rest of the application code to the working directory
COPY build ./build
# COPY public ./public
COPY .env ./
COPY node_modules ./node_modules

# Expose port to the outside world
EXPOSE 8080

# Define the command to run the application
CMD ["npm", "start"]
