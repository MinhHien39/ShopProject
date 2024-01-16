FROM node:20

# Set the working directory
RUN mkdir /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Copy the rest of the application files to the container
ADD . .

# Install dependencies
RUN npm install

EXPOSE 3000