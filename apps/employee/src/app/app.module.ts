import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EmployeeResolver } from './presentation/employee.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: true,
      introspection: true,
      autoSchemaFile: { federation: 2 },
    }),
  ],
  providers: [EmployeeResolver],
})
export class AppModule {}
