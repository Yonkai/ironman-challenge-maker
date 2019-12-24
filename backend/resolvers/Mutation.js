const Mutation = {Mutation:{
      createDraft(root, args, context, info) {
        return context.prisma.createPost({
          title: args.title,
          author: {
            connect: { id: args.userId },
          },
        })
      },
      publish(root, args, context) {
        return context.prisma.updatePost({
          where: { id: args.postId },
          data: { published: true },
        })
      },
      createUser(root, args, context) {
        return context.prisma.createUser({ name: args.name })
      },
      async createFake(root,args,context,info){
        return await context.prisma.createFake({ ...args }, info)
      },
      User: {
        posts(root, args, context) {
          return context.prisma
            .user({
              id: root.id,
            })
            .posts()
        },
      },
      Post: {
        author(root, args, context) {
          return context.prisma
            .post({
              id: root.id,
            })
            .author()
        },
      },
}}

module.exports = Mutation