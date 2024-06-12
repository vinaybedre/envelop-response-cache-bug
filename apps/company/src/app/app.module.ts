import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CompanyResolver } from './presentation/company.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: { federation: 2 },
    }),
  ],
  providers: [CompanyResolver],
})
export class AppModule {}
