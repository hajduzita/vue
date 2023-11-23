export interface ServiceStatusEmptyState {
  readonly status: "notAsked";
}

export interface ServiceStatusLoadingState {
  readonly status: "loading";
}

export interface ServiceStatusFetchedState {
  readonly status: "result";
  readonly services: any;
}

export interface ServiceStatusErrorState {
  readonly status: "error";
}

export type ServiceStatusState =
  | ServiceStatusEmptyState
  | ServiceStatusLoadingState
  | ServiceStatusFetchedState
  | ServiceStatusErrorState;
