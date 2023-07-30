import { Module } from '@nestjs/common';
import { AsksController } from './asks.controller';
import { AskService } from './shared/ask.service/ask.service';

@Module({
    controllers: [AsksController],
    providers: [AskService]
})
export class AsksModule {}
