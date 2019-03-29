const { Model } = require('objection');

class DbUser extends Model {
  static get tableName() {
    return 'db_user';
  }

  // Incorrect
  static get relationMappings() {
    return {
      children: {
        relation: Model.HasManyRelation,
        modelClass: Person,
        join: {
          from: 'persons.id',
          to: 'persons.parentId'
        }
      }
    };
  }
}

module.exports = DbUser;

