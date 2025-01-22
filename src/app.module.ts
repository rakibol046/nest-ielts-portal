import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mdrakibolislam046:ieltsportal@ielts-portal.yzpz2.mongodb.net/portal-db?retryWrites=true&w=majority&appName=ielts-portal'),
    ConfigModule.forRoot(),
    AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
  