import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // Use appropriate database type (e.g., postgres, mysql)
      database: 'database.sqlite', // Path to your SQLite database file
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Load entities dynamically
      synchronize: true, // Set to false in production
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController], // Register controllers here
  providers: [AppService], // Register providers (services) here
})
export class AppModule {}


// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [], // Add imported modules here
//   controllers: [AppController], // Register controllers here
//   providers: [AppService], // Register providers (services) here
// })
// export class AppModule {}