// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { EmceesProdTesting5 } from '../client';

export abstract class APIResource {
  protected _client: EmceesProdTesting5;

  constructor(client: EmceesProdTesting5) {
    this._client = client;
  }
}
