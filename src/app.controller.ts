import { Controller, Get } from '@nestjs/common';
import { ZodResponse } from 'nestjs-zod';
import { MainDto } from './dto';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @ZodResponse({ type: MainDto })
  getHello() {
    return {} as unknown as MainDto;
  }
}
