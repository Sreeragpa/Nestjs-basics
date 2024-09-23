import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './logging.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggingMiddleware)
      .forRoutes(AppController)
      // .forRoutes({ path: 'cats', method: RequestMethod.GET }); Another way to apply middleware for specific path and method
  }
  
}


// There is no place for middleware in the @Module() decorator. Instead, we set them up using the configure() method of the module class.
    // Modules that include middleware have to implement the NestModule interface. 
    // Let's set up the LoggerMiddleware at the AppModule level.