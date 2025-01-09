# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.11.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

# Node.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"


# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package.json package-lock.json ./
RUN npm install

# Copy the app files and build folder
COPY . .
# RUN npm run build

# Expose the app port
EXPOSE 3003

# Start the app
CMD ["npm", "start"]

# Install node modules
# COPY --link package-lock.json package.json ./
# RUN npm ci --include=dev

# Copy application code
# COPY --link . .

# Build application
# RUN npm run build

# Remove development dependencies
# RUN npm prune --omit=dev


# Final stage for app image
# FROM base

# Copy built application
# COPY --from=build /app /app
# COPY package.json package-lock.json ./

# # Install all dependencies
# RUN npm install

# Start the server by default, this can be overwritten at runtime
# EXPOSE 3000
# CMD [ "npm", "run", "start" ]
