import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';

@Module({
  imports : [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsResolver, CatsService ]
})
export class CatsModule {}
