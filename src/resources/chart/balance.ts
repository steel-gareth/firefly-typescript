// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;charts&quot; endpoints deliver optimised data for charts and graphs.
 */
export class Balance extends APIResource {
  /**
   * This endpoint returns the data required to generate a chart with balance
   * information.
   *
   * @example
   * ```ts
   * const chartDataSets =
   *   await client.chart.balance.retrieveBalance({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  retrieveBalance(
    params: BalanceRetrieveBalanceParams,
    options?: RequestOptions,
  ): APIPromise<BalanceRetrieveBalanceResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/chart/balance/balance', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type BalanceRetrieveBalanceResponse = Array<AccountAPI.ChartDataSet>;

export interface BalanceRetrieveBalanceParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: Limit the chart to these asset accounts or liabilities. Only asset
   * accounts and liabilities will be accepted. Other types will be silently dropped.
   *
   * This list of accounts will be OVERRULED by the `preselected` parameter.
   */
  accounts?: Array<number>;

  /**
   * Query param: Optional period to group the data by. If not provided, it will
   * default to '1M' or whatever is deemed relevant for the range provided.
   *
   * If you want to know which periods are available, see the enums or get the
   * configuration value: `GET /api/v1/configuration/firefly.valid_view_ranges`
   */
  period?: '1D' | '1W' | '1M' | '3M' | '6M' | '1Y';

  /**
   * Query param: Optional set of preselected accounts to limit the chart to. This
   * may be easier than submitting all asset accounts manually, for example. If you
   * want to know which selection are available, see the enums here or get the
   * configuration value: `GET /api/v1/configuration/firefly.preselected_accounts`
   *
   * - `empty`: do not do a pre-selection
   * - `all`: select all asset and all liability accounts
   * - `assets`: select all asset accounts
   * - `liabilities`: select all liability accounts
   *
   * If no accounts are found, the user's "frontpage accounts" preference will be
   * used. If that is empty, all asset accounts will be used.
   */
  preselected?: 'empty' | 'all' | 'assets' | 'liabilities';

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Balance {
  export {
    type BalanceRetrieveBalanceResponse as BalanceRetrieveBalanceResponse,
    type BalanceRetrieveBalanceParams as BalanceRetrieveBalanceParams,
  };
}
