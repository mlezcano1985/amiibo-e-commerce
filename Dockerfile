FROM node:16-bullseye as builder
WORKDIR /app
COPY . .
RUN npm i && npm run build

FROM node:16-bullseye as deps
WORKDIR /app
COPY ./package.json ./
RUN npm i --production

FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY package.json next.config.js ./
CMD ["npm", "start"]