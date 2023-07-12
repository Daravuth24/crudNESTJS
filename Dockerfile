# Use the official Node.js image as the base
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your NestJS application is running on
EXPOSE 3000

# Set the command to run your application
CMD [ "npm", "run", "start:prod" ]
