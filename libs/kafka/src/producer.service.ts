import { OnModuleInit } from '@nestjs/common';
import { OnApplicationShutdown } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Kafka, Producer, ProducerRecord } from 'kafkajs';

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnApplicationShutdown {

    constructor(private configService: ConfigService) { }

    private readonly kafka = new Kafka({
        brokers: [this.configService.get<string>('KAFKA_BROKER')]
    })
    private readonly producer: Producer = this.kafka.producer()

    async onModuleInit() {
        try {
            await this.producer.connect()
            console.log('KAFKA Producer connection success');
        } catch (error) {
            console.log(`KAFKA Producer connection failed`, error);
        }
    }

    async produceMessage(record: ProducerRecord) {
        await this.producer.send(record)
    }

    async onApplicationShutdown() {
        await this.producer.disconnect()
    }
}
