// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints deliver general system information, version- and meta information.
 */
export class Batch extends APIResource {
  /**
   * summary: Finish a batch of unprocessed transactions.
   *
   * @example
   * ```ts
   * await client.batch.finish();
   * ```
   */
  finish(params: BatchFinishParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post('/v1/batch/finish', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface BatchFinishParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Batch {
  export { type BatchFinishParams as BatchFinishParams };
}
