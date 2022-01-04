import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostsController } from './posts.controller';
import { PostService } from './posts.service';

@Module({
  providers: [PostService, PrismaService],
  controllers: [PostsController],
})
export class PostsModule {}
