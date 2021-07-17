import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      endpoint: 'https://us1.prisma.sh/aryan-j/use-your-own-endpoint/dev',
      debug: false,
    });
  }
}
