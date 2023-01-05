import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/user.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nest-db:dINSWjcVzIOWQwqE@cluster0.y15gb9w.mongodb.net/?retryWrites=true&w=majority'
    ),
    MongooseModule.forFeature([{name: 'user', schema:UserSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
