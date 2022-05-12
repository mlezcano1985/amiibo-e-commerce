FROM node:16-alpine as builder
WORKDIR /app
COPY . .
RUN npm i
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED  1
RUN npm run build

FROM node:16-alpine as deps
WORKDIR /app
COPY ./package*.json ./
RUN npm i --production

FROM node:16-alpine
WORKDIR /app
COPY --from=builder --chown=node:node /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY package.json next.config.js ./
CMD ["npm", "start"]