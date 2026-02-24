import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// 1. Mutation: This writes data to the database
export const send = mutation({
  args: { body: v.string(), author: v.string() },
  handler: async (ctx, args) => {
    const messageId = await ctx.db.insert("messages", {
      body: args.body,
      author: args.author,
    });
    return messageId;
  },
});

// 2. Query: This reads data from the database
export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});
