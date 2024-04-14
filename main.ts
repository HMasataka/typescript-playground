import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const numberScheme = z.number();
const n = numberScheme.parse(12);

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  tel: z.string(),
});
type user = z.infer<typeof userSchema>;

const u: user = { name: "hoge", age: 66, tel: "xxx-xxxx-xxxx" };
const uu = userSchema.parse(u);

console.log(n);
console.log(u);
console.log(uu);
