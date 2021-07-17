import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client'

@Resolver()
export class MessagesResolver {
  constructor(private readonly prisma: PrismaClient) {}

  @Query()
  messages() {
    return this.prisma.query.messages(args);
  }

  @Mutation()
  createMessage(@Args('description') description: string) {
    const id = this.messagesThatReallyShouldBeInADb.length;
    const newMessage = { id, description };
    this.messagesThatReallyShouldBeInADb.push(newMessage);
    return newMessage;
  }
}
