export class WooCommerceError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
  }
}
