export type HealthStatus = "ENABLED" | "DISABLED";

export interface ServiceStatusItem {
  readonly name: string;
  readonly state: HealthStatus;
}
