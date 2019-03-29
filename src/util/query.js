
// NOTE: No idea of query is correct, at all.
const getDbUserOtherwiseCreate = async (discordUser) => {
  try {
    const dbUser = await DiscordUser.query().findOne({ discordId: discordUser.id });

    if (dbUser) {
      return dbUser;
    } else {
      const dbUser = await DiscordUser.query().insert({ discordId: discordUser.id });
      return dbUser;
    }
  } catch (error) {
    console.log(error);
    throw new Error('Could not find or create dbUser');
  }
}
