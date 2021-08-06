import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      debug: (process.env.NODE_ENV === 'development' && true) || false,
      playground: (process.env.NODE_ENV === 'development' && true) || false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
