# Use Node LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port (use 7000 now)
EXPOSE 7000

# Start app
CMD ["npm", "run", "dev"]