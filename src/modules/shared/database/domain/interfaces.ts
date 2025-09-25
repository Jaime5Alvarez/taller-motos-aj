export interface IDatabaseClient<T> {
  getSession: () => T;
}
