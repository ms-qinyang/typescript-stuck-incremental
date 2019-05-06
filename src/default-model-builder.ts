import { createModelBuilder } from "redux-advanced";

import { IDependencies } from "dependencies";

export const defaultModelBuilder = createModelBuilder()
  .dependencies<IDependencies>()
  .freeze();
