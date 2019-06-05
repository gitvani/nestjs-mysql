import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';
import { Photo } from './photo/photo.entity';
import { User } from './user/user.entity';

const defaultOptions: any = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Admin@123',
  synchronize: true,
};

@Module({
  imports: [
    PhotoModule,
    TypeOrmModule.forRoot(
      {
        ...defaultOptions,
        database: 'photo',
        entities: [Photo],
      },
    ),
    TypeOrmModule.forRoot(
      {
        ...defaultOptions,
        database: 'user',
        entities: [User],
      },
    ),


  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule { }
