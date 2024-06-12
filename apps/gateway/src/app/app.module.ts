import {
  YogaGatewayDriver,
  YogaGatewayDriverConfig,
} from '@graphql-yoga/nestjs-federation';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { useResponseCache } from '@graphql-yoga/plugin-response-cache';
// import Redis from 'ioredis';
// import { createRedisCache } from '@envelop/response-cache-redis';
// const redis = new Redis('redis://localhost:6379');

// const cache = createRedisCache({ redis });

@Module({
  imports: [
    GraphQLModule.forRoot<YogaGatewayDriverConfig>({
      driver: YogaGatewayDriver,
      gateway: {
        serviceList: [
          { name: 'company', url: 'http://localhost:4001/graphql' },
          { name: 'employee', url: 'http://localhost:4002/graphql' },
        ],
      },
      server: {
        graphiql: true,
        plugins: [
          useResponseCache({
            session: () => null,
            ttl: 1_000 * 60,
            // cache: cache as any,
            includeExtensionMetadata: true,
          }),
        ],
      },
    }),
  ],
})
export class AppModule {}
