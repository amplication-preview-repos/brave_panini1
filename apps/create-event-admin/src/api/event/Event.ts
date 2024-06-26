import { JsonValue } from "type-fest";

export type Event = {
  createdAt: Date;
  id: string;
  jsonData: JsonValue;
  status: string | null;
  updatedAt: Date;
};
