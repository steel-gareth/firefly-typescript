// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Firefly } from '../client';

export abstract class APIResource {
  protected _client: Firefly;

  constructor(client: Firefly) {
    this._client = client;
  }
}
