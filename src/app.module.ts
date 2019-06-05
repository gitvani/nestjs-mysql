import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/keys';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoController } from './photo/photo.controller';
import { PhotoService } from './photo/photo.service';
import { PhotoModule } from './photo/photo.module';

// const defaultOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'Admin@123',
//   synchronize: true,
// };

@Module({
  imports: [
    PhotoModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Admin@123',
        database: 'dulinow',
        entities: [__dirname + '/**/*.entity{.ts,.js}', __dirname + '/**/**/*.entity{.ts,.js}'],
        synchronize: true,
      }
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
