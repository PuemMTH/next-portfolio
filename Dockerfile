# Set the base image. This image contains a LTS Node version.
FROM node:20-alpine

# Set working directory. All the path will be relative to WORKDIR.
WORKDIR /app

# Copy package.json and (optionally) package-lock.json before other files
COPY package.json ./

# Install dependencies using npm install
RUN npm install

# Copy all files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run the start script, this will start the Node.js server
CMD ["npm", "start"]