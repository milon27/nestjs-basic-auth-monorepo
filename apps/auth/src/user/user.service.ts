import { KafkaProducerService } from '@app/kafka';
import { KafkaTopicDefine } from '@app/kafka/kafka.define';
import { PrismaService } from '@app/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService, private producer: KafkaProducerService) { }

    async getUserById(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId
            }
        })
        //produce user object
        if (user) {
            const data = JSON.stringify(user)
            await this.producer.produceMessage({
                topic: KafkaTopicDefine.AUTH_GET_USER,
                messages: [{
                    value: data
                }]
            })
        }
        return user
    }
}
