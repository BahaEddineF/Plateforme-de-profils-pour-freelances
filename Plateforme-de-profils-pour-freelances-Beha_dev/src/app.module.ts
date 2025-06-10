import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

// import { FreelanceModule } from './freelance/freelance.module';
// import { SkillModule } from './skill/skill.module';
// import { SocialLinkModule } from './social-link/social-link.module';
import { SocialLinkModule } from './social-link/social-link.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', // Remplace par ton mot de passe si nécessaire
      database: 'projet_freelance',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ⚠️ désactive en production !
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // ✅ Ajouté ici
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),

    SocialLinkModule,

    // FreelanceModule,
    // SkillModule,
    // SocialLinkModule,
  ],
})
export class AppModule {}
