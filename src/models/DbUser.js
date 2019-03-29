const { Model } = require('objection');

class DbUser extends Model {
  static get tableName() {
    return 'db_user';
  }

  static get relationMappings() {
    const AccountabilityMessage = require('./AccountabilityMessage');
    
    return {
      children: {
        relation: Model.HasManyRelation,
        modelClass: AccountabilityMessage,
        join: {
          from: 'db_user.id',
          to: 'accountability_message.db_user_id'
        }
      }
    };
  }
}

module.exports = DbUser;

