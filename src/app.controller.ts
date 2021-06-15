import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MyLogger } from './logging/mylogger.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly myLogger: MyLogger) { }

  @Get()
  getHello(): string {
    this.myLogger.log('This Logging is log');
    this.myLogger.error('This Logging is error', "message for errors");
    this.myLogger.warn('This Logging is warning');
    this.myLogger.debug('This Logging is debug');
    this.myLogger.verbose('This Logging is verbose');

    return this.appService.getHello();
  }
}
