import { Module } from '@nestjs/common';

//Services
import { AppService } from './app.service';

//Controllers
import { AppController } from './app.controller';

//Files Modules
import { AsksModule } from './asks/asks.module';

//Lib Modules
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: `.developement.env`}),
    MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
    AsksModule
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
