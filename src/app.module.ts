import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  controllers: [AppController],
  providers: [AppService,{
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  imports: [UsersModule, 
    DatabaseModule, 
    EmployeesModule,
    ThrottlerModule.forRoot([{
      name:'short',
      ttl: 60,
      limit: 3,
    },{
      name:'long',
      ttl: 6000,
      limit: 100,
    }])
  ]
})
export class AppModule {}

