import { Injectable } from "@nestjs/common";
import { EventDataInput } from "../eventModule/EventDataInput";

@Injectable()
export class EventModuleService {
  constructor() {}
  async AddEvent(args: EventDataInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
