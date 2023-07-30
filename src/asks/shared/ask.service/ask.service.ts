import { Injectable } from '@nestjs/common';
import { Ask } from '../ask/ask';

@Injectable()
export class AskService {
    asks: Ask[] = [
        {id: 1 , ask: "Qual é a capital do Brasil?" , questions: ["Bahia" , "Rio de Janeiro"  , "Salvador" , "Brasília"] , response: "Brasília"},
        {id: 2 , ask: "Quando foi a primeira guerra mundial?" , questions: ["1914" , "1900"  , "1855" , "1939"] , response: "1914"},
    ];

    getAll() {
        return this.asks
    }

    getById(id:number) {
        const ask = this.asks.find(res => res.id == id);
        return ask
    }

    create(ask: Ask) {
        let lastid = 0;
        if(this.asks.length > 0) {
            lastid = this.asks[this.asks.length -1].id
        }
        ask.id = lastid + 1;
        this.asks.push(ask)
        return ask
    }

    update(ask: Ask) {
        let askArray = this.getById(ask.id);
        if(askArray) {
            askArray.ask = ask.ask;
            askArray.response = ask.response
        };
        return askArray
    }
    
    delete(id: number) {
        const index = this.asks.findIndex(res => res.id == id);
        this.asks.splice(index , 1);

    }
}
