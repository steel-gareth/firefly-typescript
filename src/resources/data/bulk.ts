// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;data&quot;-endpoints manage generic Firefly III and user-specific data.
 */
export class Bulk extends APIResource {
  /**
   * Allows you to update transactions in bulk.
   *
   * @example
   * ```ts
   * await client.data.bulk.updateTransactions({
   *   query: 'query',
   * });
   * ```
   */
  updateTransactions(params: BulkUpdateTransactionsParams, options?: RequestOptions): APIPromise<void> {
    const { query, 'X-Trace-Id': xTraceID } = params;
    return this._client.post('/v1/data/bulk/transactions', {
      query: { query },
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface BulkUpdateTransactionsParams {
  /**
   * Query param: The JSON query.
   */
  query: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Bulk {
  export { type BulkUpdateTransactionsParams as BulkUpdateTransactionsParams };
}
