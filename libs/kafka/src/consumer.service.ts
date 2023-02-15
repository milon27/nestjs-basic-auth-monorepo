import { OnApplicationShutdown } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics, Kafka } from 'kafkajs';


@Injectable()
export class KafkaConsumerService implements OnApplicationShutdown {
    constructor(private configService: ConfigService) { }

    private readonly kafka = new Kafka({
        brokers: [this.configService.get<string>('KAFKA_BROKER')]
    })
    private readonly consumers: Consumer[] = []

    async consume(topics: ConsumerSubscribeTopics, config: ConsumerRunConfig) {
        const consumer = this.kafka.consumer({ groupId: "dev-guide-app" });
        await consumer.connect()
        await consumer.subscribe(topics)
        await consumer.run(config)
        this.consumers.push(consumer)
    }

    async onApplicationShutdown() {
        for (const consumer of this.consumers) {
            await consumer.disconnect()
        }
    }

}
