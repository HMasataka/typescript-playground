import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const numberScheme = z.number();
const u = numberScheme.parse(12);

console.log(u);
