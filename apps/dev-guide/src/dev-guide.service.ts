import { KafkaConsumerService } from '@app/kafka/consumer.service';
import { KafkaTopicDefine } from '@app/kafka/kafka.define';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { EachMessagePayload } from 'kafkajs';

@Injectable()
export class DevGuideService implements OnModuleInit {
  constructor(private readonly consumer: KafkaConsumerService) { }

  async onModuleInit() {
    await this.consumer.consume({ topics: [KafkaTopicDefine.AUTH_GET_USER] }, {
      eachMessage: async (payload: EachMessagePayload) => {
        console.log("===>", { topic: payload.topic, message: JSON.parse(payload.message.value.toString()) });
      }
    })
  }

  getHello(): string {
    // we will get current user id form auth service.
    return 'Hello World!';
  }
}
