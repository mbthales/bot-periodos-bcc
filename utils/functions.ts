import { Message, Role } from "discord.js";

function addRoleToUser(msg: Message, role: Role) {
  msg.guild?.members.cache.get(msg.author.id)?.roles.add(role);
}

function replyMessage(msg: Message, text: string) {
  msg.reply({ content: text });
}

export { addRoleToUser, replyMessage };
