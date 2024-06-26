import { Event as TEvent } from "../api/event/Event";

export const EVENT_TITLE_FIELD = "status";

export const EventTitle = (record: TEvent): string => {
  return record.status?.toString() || String(record.id);
};
