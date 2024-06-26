import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  jsonData?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
