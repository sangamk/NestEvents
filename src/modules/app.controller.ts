import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {

  @EventPattern('changelog_get_event')
  async somethingElse(data: any) {
    console.log('event received');
    console.log(data);
  }

  @MessagePattern({ cmd: 'changelog_get_message' })
  somethingElseMessage(data: any) {
    console.log('message received');
    console.log(data);
    return 'message received';
  }
}
