import { Query, Resolver } from '@nestjs/graphql';
import { Company } from './company';

@Resolver()
export class CompanyResolver {
  @Query(() => [Company], { nullable: false })
  companies(): Company[] {
    return [
      { _id: '1', name: 'Sawayo' },
      { _id: '2', name: 'infoniqa' },
    ];
  }
}
