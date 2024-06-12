import { Query, Resolver } from '@nestjs/graphql';
import { Employee } from './employee';

@Resolver()
export class EmployeeResolver {
  @Query(() => [Employee], { nullable: false })
  employees(): Employee[] {
    return [
      { _id: '1', name: 'Sawayo' },
      { _id: '2', name: 'infoniqa' },
    ];
  }
}
