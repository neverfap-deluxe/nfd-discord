import { Client, ClientUser } from "discord.js";
import logger from '../util/logger';

const onReady = (client: Client, resolve) =>
  () => {
    const juliusReade: ClientUser | null = client.user;
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(juliusReade?.username + ' - (' + juliusReade?.id + ')');
    resolve('Connected');
  };

export default onReady;
