import { Module } from '@nestjs/common';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkService } from './bookmark/bookmark.service';

@Module({
  imports: [AuthModule, BookmarkModule, PrismaModule],
  providers: [PrismaService, BookmarkService],
})
export class AppModule {}
