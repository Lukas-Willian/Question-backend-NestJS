import { Injectable } from '@nestjs/common';
import { Ask } from '../ask/ask';
import {InjectModel} from "@nestjs/mongoose"
import { Model } from 'mongoose';

@Injectable()
export class AskService {
    constructor(@InjectModel("Ask") private readonly askModel: Model<Ask>) {}

    async getAll() {
        return await this.askModel.find().lean().exec()
    }

    async getById(id: string) {
        return await this.askModel.findOne({_id: id}).lean().exec()
    }

    async create(ask: Ask) {
        const createAsk = new this.askModel(ask);
        return await createAsk.save() 
    }

    async update(id: string , ask: Ask) {
         await this.askModel.updateOne({_id: id} , {
            $set: ask
         }).exec();
         return this.getById(id)
    }
    
    async delete(id: string) {
        return await this.askModel.findOneAndDelete({_id: id}).exec();

    }
}
