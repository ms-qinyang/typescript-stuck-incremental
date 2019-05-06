import { ISharedModelContext } from "shared-context";

import { Container, Model } from "redux-advanced";

import { defaultModelBuilder } from "default-model-builder";

export interface Config1<
  TType extends string = string,
  TModel extends Model = Model
> {
  type: TType;
  getModel: () => TModel;

  fake: (context: ISharedModelContext, container: Container<TModel>) => boolean;
  fakeAsync: (
    context: ISharedModelContext,
    container: Container<TModel>
  ) => Promise<boolean>;
}

export function createModel1<TConfigs extends Config1[] = Config1[]>(
  configs: TConfigs
) {
  return defaultModelBuilder
    .props({
      type: undefined! as TConfigs[number]["type"],

      str1: "",
      str2: ""
    })
    .state(({ props }) => ({
      type: props.type,

      str1: props.str1,
      str2: props.str2
    }))
    .selectors((createSelector) => ({
      config: createSelector(
        ({ state }) => state.type,
        (type): TConfigs[number] => configs.find((e) => e.type === type)!
      )
    }))
    .selectors({
      container: ({ getters, state, getContainer }) =>
        getContainer(getters.config.getModel(), state.str2)
    })
    .selectors({
      a: ({ getters, dependencies, getContainer, key }) => {
        return getters.config.fake(
          {
            dependencies,
            getContainer,

            key
          },
          getters.container
        );
      },
      b: ({ getters, dependencies, getContainer, key }) => {
        return getters.config.fake(
          {
            dependencies,
            getContainer,

            key
          },
          getters.container
        );
      }
    })
    .effects({
      c: async ({ getters, dependencies, getContainer, key }) => {
        await getters.config.fakeAsync(
          {
            dependencies,
            getContainer,

            key
          },
          getters.container
        );
      },
      d: async ({ getters, dependencies, getContainer, key }) => {
        await getters.config.fakeAsync(
          {
            dependencies,
            getContainer,

            key
          },
          getters.container
        );
      },
      e: async ({ getters, dependencies, getContainer, key }) => {
        await getters.config.fakeAsync(
          {
            dependencies,
            getContainer,

            key
          },
          getters.container
        );
      },
      f: async ({ getters, dependencies, getContainer, key }) => {
        return await getters.config.fakeAsync(
          {
            dependencies,
            getContainer,

            key
          },
          getters.container
        );
      },
      g: async ({ getters, dependencies, getContainer, key }) => {
        await getters.config.fakeAsync(
          {
            dependencies,
            getContainer,

            key
          },
          getters.container
        );
      }
    })
    .build();
}

export class $$TypeOfModel1<TConfigs extends Config1[]> {
  public get type() {
    return createModel1<TConfigs>(undefined!);
  }
}
