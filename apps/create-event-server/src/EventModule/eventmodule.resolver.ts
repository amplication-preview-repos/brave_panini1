import * as graphql from "@nestjs/graphql";
import { EventDataInput } from "../eventModule/EventDataInput";
import { EventModuleService } from "./eventmodule.service";

export class EventModuleResolver {
  constructor(protected readonly service: EventModuleService) {}

  @graphql.Mutation(() => String)
  async AddEvent(
    @graphql.Args()
    args: EventDataInput
  ): Promise<string> {
    return this.service.AddEvent(args);
  }

  @graphql.Query(() => String)
  async CreateEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateEvent(args);
  }
}
