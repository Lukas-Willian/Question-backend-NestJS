import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AskService } from './shared/ask.service/ask.service';
import { Ask } from './shared/ask/ask';

@Controller('asks')
export class AsksController {
    constructor(
        private askService: AskService
        ) {};

        @Get()
        async getAll() : Promise<Ask[]> {
            return this.askService.getAll();
        }

        @Get(":id")
        async getById(@Param("id") id: string) : Promise<Ask> {
            return this.askService.getById(id);
        }
        
        @Post()
        async create(@Body() ask: Ask): Promise<Ask> {
            return this.askService.create(ask)
        }

        @Put(":id")
        async update(@Param("id") id:string , @Body() ask: Ask): Promise<Ask> {
            return this.askService.update(id , ask)
        } 

        @Delete(":id")
        async delete(@Param("id") id:string) {
            this.askService.delete(id);
        }
}
