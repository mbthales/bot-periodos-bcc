import { Message, Role } from "discord.js";

export const addRoleToUser = (msg: Message, role: Role) => {
  msg.guild?.members.cache.get(msg.author.id)?.roles.add(role);
};

export const replyMessage = (msg: Message, text: string) => {
  msg.reply({ content: text });
};
