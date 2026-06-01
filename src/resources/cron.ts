// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * These endpoints deliver general system information, version- and meta information.
 */
export class Cron extends APIResource {
  /**
   * Firefly III has one endpoint for its various cron related tasks. Send a GET to
   * this endpoint to run the cron. The cron requires the CLI token to be present.
   * The cron job will fire for all users.
   *
   * @example
   * ```ts
   * const response = await client.cron.run(
   *   'd5ea6b5fb774618dd6ad6ba6e0a7f55c',
   * );
   * ```
   */
  run(
    cliToken: string,
    params: CronRunParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CronRunResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/cron/${cliToken}`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface CronResultRow {
  /**
   * If the cron job ran into some kind of an error, this value will be true.
   */
  job_errored?: boolean | null;

  /**
   * This value tells you if this specific cron job actually fired. It may not fire.
   * Some cron jobs only fire every 24 hours, for example.
   */
  job_fired?: boolean | null;

  /**
   * This value tells you if this specific cron job actually did something. The job
   * may fire but not change anything.
   */
  job_succeeded?: boolean | null;

  /**
   * If the cron job ran into some kind of an error, this value will be the error
   * message. The success message if the job actually ran OK.
   */
  message?: string | null;
}

export interface CronRunResponse {
  auto_budgets?: CronResultRow;

  recurring_transactions?: CronResultRow;

  telemetry?: CronResultRow;
}

export interface CronRunParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. This can be used to make the cron job
   * pretend it's running on another day.
   */
  date?: string;

  /**
   * Query param: Forces the cron job to fire, regardless of whether it has fired
   * before. This may result in double transactions or weird budgets, so be careful.
   */
  force?: boolean;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Cron {
  export {
    type CronResultRow as CronResultRow,
    type CronRunResponse as CronRunResponse,
    type CronRunParams as CronRunParams,
  };
}
