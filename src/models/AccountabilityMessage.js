const { Model } = require('objection');

class AccountabilityMessage extends Model {
  static get tableName() {
    return 'accountability_message';
  }

  static get relationMappings() {
    const DbUser = require('./DbUser');

    return {
      children: {
        relation: Model.BelongsToOneRelation,
        modelClass: DbUser,
        join: {
          from: 'accountability_message.db_user_id',
          to: 'persons.id'
        }
      }
    };
  }
}

module.exports = AccountabilityMessage;

