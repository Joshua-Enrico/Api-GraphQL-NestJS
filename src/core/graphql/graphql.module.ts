import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/core/graphql/api-schema.gql'),
            formatError: (error) => {
                const graphQLFormattedError = {
                  message:
                    error.extensions?.exception?.code || error.message,
                  code:
                    error.extensions?.code || "SERVER_ERROR",
                  name: error.extensions?.exception?.code || error.name,
                };
                return graphQLFormattedError;
              },
        })
    ]
})
export class GraphqlModule {}
