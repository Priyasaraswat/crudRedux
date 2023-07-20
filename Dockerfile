FROM node:16 AS client
WORKDIR /user/src/app
COPY client/ ./client/
RUN cd client && npm install --legacy-peer-deps && npm run build

FROM node:16 AS api
WORKDIR /root/
COPY --from=client /user/src/app/client/build ./build
COPY . .
RUN npm install --legacy-peer-deps
EXPOSE 5000
CMD ["npm", "start"]