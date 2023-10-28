import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule as ConfigModuleDb, TypeOrmConfigService } from './config';

@Module({
  imports: [
    ConfigModuleDb,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local', '.env.prod'],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeOrmConfigService,
      inject: [ConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
