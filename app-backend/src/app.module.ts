import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { BettorModule } from './modules/bettor/bettor.module';
import { MarketModule } from './modules/market/market.module';
import { School42Module } from './modules/school42/school42.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get<string>('DB_URL'),
        ssl: {
          rejectUnauthorized: false,
        },
        autoLoadEntities: true,
        extra:{
          max: 10,
          idleTimeoutMillis: 30000,
        },
        entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
        synchronize: false,
      }),
    }),
    UserModule,
    AuthModule,
    BettorModule,
    MarketModule,
    School42Module,
  ],
})
export class AppModule {}
