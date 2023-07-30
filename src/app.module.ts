import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsksController } from './asks/asks.controller';
import { AskService } from './asks/shared/ask.service/ask.service';
import { AsksModule } from './asks/asks.module';

@Module({
  imports: [AsksModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}
