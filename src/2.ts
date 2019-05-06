import { defaultModelBuilder } from "default-model-builder";

import { Container, ExtractProps } from "redux-advanced";

import { ISharedModelContext } from "shared-context";

import { $$TypeOfModel1, Config1 } from "1";

export type Model1Payloads<TConfigs extends Config1[]> = {
  [P in keyof TConfigs]: TConfigs[P] extends Config1
    ? {
        type: TConfigs[P]["type"];
        props: ExtractProps<ReturnType<TConfigs[P]["getModel"]>>;
      }
    : never
};

export interface Config2<TConfigs extends Config1[] = Config1[]> {
  model1: $$TypeOfModel1<TConfigs>["type"];
  configs: TConfigs;

  fake1Async: (context: ISharedModelContext) => Promise<string>;
  fake2Async: (
    context: ISharedModelContext,
    item: Container<$$TypeOfModel1<TConfigs>["type"]>
  ) => Promise<void>;
}

export function createModel2<TConfigs extends Config1[] = Config1[]>(
  config: Config2<TConfigs>
) {
  type Model1Payload = Model1Payloads<typeof config["configs"]>[number];

  return defaultModelBuilder
    .state({
      arr: [] as string[],

      a: "",
      b: "",

      x: false,
      y: false
    })
    .selectors({
      a: ({ state, getContainer }) => {
        const container = getContainer(config.model1, state.a);
        return container.isRegistered ? container : null;
      },
      b: ({ state, getContainer }) => {
        const container = getContainer(config.model1, state.b);
        return container.isRegistered ? container : null;
      },
      c: ({ state, getContainer }) => {
        const container = getContainer(
          config.model1,
          state.arr[state.arr.length - 1]
        );
        return container.isRegistered ? container : null;
      }
    })
    .selectors({
      d: ({ state, getContainer }) => {
        return (
          state.arr
            .map((e) => getContainer(config.model1, e).getters.a)
            .indexOf(true) >= 0
        );
      }
    })
    .reducers({
      e(state, id: string) {
        //
      },
      f(state) {
        //
      },
      g(state, payload: { id: string; index: number }) {
        //
      },
      h(state) {
        //
      },
      i(state, payload: { id: string }) {
        //
      },
      j(state) {
        //
      }
    })
    .effects({
      k: async (
        { getState, actions, dependencies, getContainer, key },
        payload: Model1Payload & {
          index?: number;
        }
      ) => {
        //
      },
      l: async (
        { getState, actions, getContainer },
        payload: { id?: string; force?: boolean }
      ) => {
        //
      },
      m: async (
        { dependencies, getContainer, key },
        payload: { id: string }
      ) => {
        //
      },
      n: async (
        { dependencies, getContainer, key },
        payload: { id: string }
      ) => {
        //
      },
      o: async ({ getters }) => {
        //
      }
    })
    .effects({
      p: async (
        { getState, actions },
        payload: { index: number; force?: boolean }
      ) => {
        //
      }
    })
    .effects({
      q: async ({ getState, actions }, payload: { force?: boolean }) => {
        //
      }
    })
    .effects({
      r: async ({ actions }, payload: Model1Payload & { force?: boolean }) => {
        //
      }
    })
    .build();
}
