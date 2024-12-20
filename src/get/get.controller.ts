import {
  Body,
  Headers,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { GetService } from './get.service';

@Injectable()
@Controller('get')
export class GetController {
  constructor(private readonly getService: GetService) {}

  @Get('teacher')
  async getTeacher(@Query('name') name: string) {
    return await this.getService.getTeacher(name);
  }
}
