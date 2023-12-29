import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {
    console.log('AppController Online');
  }

  @Get('/getTime')
  getTime(): string {
    return this.appService.getTime();
  }
}
