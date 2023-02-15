import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'libs/config/configuration';
import { KafkaConsumerService } from './consumer.service';
import { KafkaProducerService } from './producer.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] })],
  providers: [KafkaProducerService, KafkaConsumerService],
  exports: [KafkaProducerService, KafkaConsumerService],
})
export class KafkaModule { }
