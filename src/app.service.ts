import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';

@Injectable()
export class AppService {
  getTime(): string {
    return String(DateTime.now().toMillis());
  }
}
