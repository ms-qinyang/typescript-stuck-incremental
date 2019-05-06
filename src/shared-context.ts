import { GetContainer } from "redux-advanced";

import { IDependencies } from "dependencies";

export interface ISharedModelContext {
  dependencies: IDependencies;
  getContainer: GetContainer;

  key: string;
}
