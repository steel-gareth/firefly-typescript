// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { MoreConflicting } from '../client';

export abstract class APIResource {
  protected _client: MoreConflicting;

  constructor(client: MoreConflicting) {
    this._client = client;
  }
}
