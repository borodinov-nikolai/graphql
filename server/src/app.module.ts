import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { CategoriesModule } from './categories/categories.module';
import { AuthModule } from './auth/auth.module';
import { DbModule } from './db/db.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';



@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env'
  }),
  JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    installSubscriptionHandlers: true,
    sortSchema: true,
    context: ({ req, res }) => ({ req, res }), 
  }),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, 'uploads'),
  }),
  CategoriesModule,
  AuthModule,
  DbModule,
  UsersModule,
  ProductsModule,
  UploadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
