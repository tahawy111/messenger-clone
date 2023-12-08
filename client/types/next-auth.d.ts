import type { User } from "@prisma/client";
import type { Session } from "next-auth";
import type { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: User;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
