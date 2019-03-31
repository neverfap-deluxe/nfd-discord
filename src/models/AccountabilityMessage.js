const { Model } = require('objection');

class AccountabilityMessage extends Model {
  static get tableName() {
    return 'accountability_messages';
  }

  static get relationMappings() {
    const DbUser = require('./DbUser');

    return {
      db_user: {
        relation: Model.BelongsToOneRelation,
        modelClass: DbUser,
        join: {
          from: 'accountability_messages.db_users_id',
          to: 'db_users.id'
        }
      }
    };
  }
}

module.exports = AccountabilityMessage;

