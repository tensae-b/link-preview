
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

import getLink from "./parsing.js"


fastify.get("/", async function handler(request, reply) {
  
    const url= request.query.url;
    const res = await getLink(url);
  
    reply.send(res);
  });
  
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  