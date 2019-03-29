const { Model } = require('objection');

class AccountabilityMessage extends Model {
  static get tableName() {
    return 'accountability_message';
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

module.exports = AccountabilityMessage;

