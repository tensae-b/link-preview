
export const routes=(fastify, options)=>{
    fastify.get('/', async function(request, reply) {
         return {hello: 'Homelander'} 
    })
}