import type { APIUser } from "discord-api-types/v10";

export type UserData = APIUser & { owner?: boolean; dev?: boolean };
