
# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if using npm) or yarn.lock (if using yarn)
COPY package*.json ./

# Install app dependencies
# RUN npm install --production

RUN command -v yarn
RUN yarn install --frozen-lockfile


# Copy the rest of the application code
COPY . .


# Expose the port that Next.js uses (usually 3000)
ENV PORT 3000
EXPOSE 3000

# # Build the Next.js application
# RUN npm run build


# Start the Next.js server
CMD ["yarn", "dev"]
