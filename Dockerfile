FROM node:20-buster
WORKDIR /usr/src/app

# npm operation
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# expose port
EXPOSE 3000

# Start the server using the production option
CMD [ "npm", "run", "start:prod" ]