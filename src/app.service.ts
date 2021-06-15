import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {



  getHello(): string {
    return 'Logging is completed!';
  }
}
