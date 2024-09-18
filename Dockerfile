FROM node:18.17.1

WORKDIR /app
RUN npm install -g vite
COPY package*.json .

RUN npm install


COPY . .

ENV VITE_SERVER_URL=http://51.21.85.174:4000/api/v1

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]