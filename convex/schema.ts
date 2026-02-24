import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // This creates a table named "messages"
  messages: defineTable({
    body: v.string(),
    author: v.string(),
  }),
});
