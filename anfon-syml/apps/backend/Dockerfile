# Install NODE version 10
FROM node:10
# Create an app directory
WORKDIR /user/src/app
# Copy dependencies from package.json/package-lock.json
COPY package*.json ./
# Install dependencies from NPM installation
RUN npm install
# Copy from current workspace to container
COPY . .
# Specify the port i will look to use
EXPOSE 4000
# Run NPM start command to start API service
CMD [ "npm", "start"]
