import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

@Injectable()
export class TypeOrmConfigService {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('MYSQL_HOST'),
      port: parseInt(this.configService.get('MYSQL_PORT')),
      username: this.configService.get('MYSQL_USER'),
      password: this.configService.get('MYSQL_PASSWORD'),
      database: this.configService.get('MYSQL_DB'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true
    }
  }
}
