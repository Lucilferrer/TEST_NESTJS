FROM node:20-alpine

RUN  addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

USER root
# Change the ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of a file or directory. The -R flag is used to apply the changes recursively to all files and subdirectories within the specified directory.
RUN chown -R app:app .

# change the user back to the app user
USER app

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev