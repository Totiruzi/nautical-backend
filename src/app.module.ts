import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users';
import { DatabaseModule } from './database';
import { AuthModule } from './auth';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            validationSchema: Joi.object({
                PORT: Joi.number().required(),
                MONGODB_URI: Joi.string().required(),
                JWT_EXPIRES_IN: Joi.number().required(),
                JWT_SECRET: Joi.string().required(),
            }),
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            autoSchemaFile: true,
            driver: ApolloDriver,
        }),
        UsersModule,
        DatabaseModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
