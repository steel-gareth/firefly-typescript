// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CurrenciesAPI from './currencies';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints to manage the currencies in Firefly III. Depending on the user&#039;s role you can also disable and enable them, or add new ones.
 */
export class Primary extends APIResource {
  /**
   * Get the primary currency of the current administration. This replaces what was
   * called "the user's default currency" although they are essentially the same.
   *
   * @example
   * ```ts
   * const currencySingle =
   *   await client.currencies.primary.retrieve();
   * ```
   */
  retrieve(
    params: PrimaryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrenciesAPI.CurrencySingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get('/v1/currencies/primary', {
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Make this currency the primary currency for the current financial
   * administration. If the currency is not enabled, it will be enabled as well.
   *
   * @example
   * ```ts
   * const currencySingle =
   *   await client.currencies.primary.makePrimary('USD');
   * ```
   */
  makePrimary(
    code: string,
    params: PrimaryMakePrimaryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrenciesAPI.CurrencySingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post(path`/v1/currencies/${code}/primary`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/vnd.api+json',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export interface PrimaryRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface PrimaryMakePrimaryParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Primary {
  export {
    type PrimaryRetrieveParams as PrimaryRetrieveParams,
    type PrimaryMakePrimaryParams as PrimaryMakePrimaryParams,
  };
}
