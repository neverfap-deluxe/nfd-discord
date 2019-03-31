const { Model } = require('objection');

class DbUser extends Model {
  static get tableName() {
    return 'db_users';
  }

  static get relationMappings() {
    const AccountabilityMessage = require('./AccountabilityMessage');
    
    return {
      accountability_messages: {
        relation: Model.HasManyRelation,
        modelClass: AccountabilityMessage,
        join: {
          from: 'db_users.id',
          to: 'accountability_messages.db_users_id'
        }
      }
    };
  }
}

module.exports = DbUser;

