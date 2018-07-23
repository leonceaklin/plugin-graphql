import {Model as ORMModel} from "@vuex-orm/core";
import {createStore} from "./helpers";
import mockServer from "./mock-schema"
import { buildClientSchema } from 'graphql';

export class User extends ORMModel {
  static entity = 'users';

  static fields () {
    return {
      id: this.increment(0),
      name: this.string(''),
      profileId: this.number(0),
      posts: this.hasMany(Post, 'authorId'),
      comments: this.hasMany(Comment, 'authorId'),
      profile: this.belongsTo(Profile, 'profileId')
    };
  }
}

export class Profile extends ORMModel {
  static entity = 'profiles';

  static fields () {
    return {
      id: this.increment(0),
      email: this.string(''),
      age: this.number(0),
      sex: this.boolean(true),
      user: this.hasOne(User, 'profileId')
    };
  }
}

export class Video extends ORMModel {
  static entity = 'videos';
  static eagerLoad = ['comments'];

  static fields () {
    return {
      id: this.increment(null),
      content: this.string(''),
      title: this.string(''),
      authorId: this.number(0),
      otherId: this.number(0), // This is a field which ends with `Id` but doesn't belong to any relation
      ignoreMe: this.string(''),
      author: this.belongsTo(User, 'authorId'),
      comments: this.morphMany(Comment, 'subjectId', 'subjectType')
    };
  }
}

export class Post extends ORMModel {
  static entity = 'posts';
  static eagerLoad = ['comments'];

  static fields () {
    return {
      id: this.increment(null),
      content: this.string(''),
      title: this.string(''),
      authorId: this.number(0),
      otherId: this.number(0), // This is a field which ends with `Id` but doesn't belong to any relation
      published: this.boolean(true),
      author: this.belongsTo(User, 'authorId'),
      comments: this.morphMany(Comment, 'subjectId', 'subjectType')
    };
  }
}


export class Comment extends ORMModel {
  static entity = 'comments';

  static fields () {
    return {
      id: this.increment(0),
      content: this.string(''),
      authorId: this.number(0),
      author: this.belongsTo(User, 'authorId'),

      subjectId: this.number(0),
      subjectType: this.string('')
    };
  }
}

export class TariffTariffOption extends ORMModel {
  static entity = 'tariffTariffOptions';

  static primaryKey = ['tariffId', 'tariffOptionId'];

  static fields () {
    return {
      tariffId: this.number(0),
      tariffOptionId: this.number(0),
    }
  }
}

export class Tariff extends ORMModel {
  static entity = 'tariffs';
  static eagerLoad = ['tariffOptions'];

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      displayName: this.string(''),
      tariffType: this.string(''),
      slug: this.string(''),

      tariffOptions: this.belongsToMany(TariffOption, TariffTariffOption, 'tariffId',
        'tariffOptionId'),
    }
  }
}


export class TariffOption extends ORMModel {
  static entity = 'tariffOptions';
  static eagerLoad = ['tariffs'];

  static fields () {
    return {
      id: this.increment(),
      name: this.string(''),
      description: this.string(''),

      tariffs: this.belongsToMany(Tariff, TariffTariffOption, 'tariffOptionId', 'tariffId')
    }
  }
}


export async function setupMockData() {
  let store, vuexOrmGraphQL;

  [store, vuexOrmGraphQL] = createStore([
    { model: User },
    { model: Profile },
    { model: Post },
    { model: Video },
    { model: Comment },
    { model: TariffOption },
    { model: Tariff },
    { model: TariffTariffOption }
  ]);

  return [store, vuexOrmGraphQL];
}
