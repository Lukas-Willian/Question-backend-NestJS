import { Module } from '@nestjs/common';
import { AsksController } from './asks.controller';
import { AskService } from './shared/ask.service/ask.service';

//File ModulesS
import { MongooseModule } from '@nestjs/mongoose';

//Schemas
import { askSchema } from './schemas/ask.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Ask" , schema: askSchema}])
    ],
    controllers: [AsksController],
    providers: [AskService]
})
export class AsksModule {}
