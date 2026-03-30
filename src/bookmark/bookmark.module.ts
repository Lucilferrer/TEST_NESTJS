import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';

@Module({
        // controllers: [AuthController],
        // imports: [PrismaService],
        providers: [BookmarkService],
        controllers: [BookmarkController]
})
export class BookmarkModule {}
