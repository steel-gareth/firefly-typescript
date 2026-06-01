// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;charts&quot; endpoints deliver optimised data for charts and graphs.
 */
export class Account extends APIResource {
  /**
   * This endpoint returns the data required to generate a chart with basic asset
   * account balance information. This is used on the dashboard.
   *
   * @example
   * ```ts
   * const chartDataSets =
   *   await client.chart.account.retrieveOverview({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  retrieveOverview(
    params: AccountRetrieveOverviewParams,
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveOverviewResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/chart/account/overview', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface ChartDataPoint {
  /**
   * The key is the label of the value, so for example: '2018-01-01' => 13 or
   * 'Groceries' => -123.
   */
  key?: string;
}

export interface ChartDataSet {
  /**
   * The currency code of the currency associated with this object.
   */
  currency_code?: string;

  currency_decimal_places?: number;

  /**
   * The currency ID of the currency associated with this object.
   */
  currency_id?: string;

  /**
   * The currency name of the currency associated with this object.
   */
  currency_name?: string;

  currency_symbol?: string;

  date?: string;

  end_date?: string;

  /**
   * The actual entries for this data set. They 'key' value is the label for the data
   * point. The value is the actual (numerical) value.
   */
  entries?: unknown;

  /**
   * This is the title of the current set. It can refer to an account, a budget or
   * another object (by name).
   */
  label?: string;

  /**
   * The actual entries for this data set. They 'key' value is the label for the data
   * point. The value is the actual (numerical) value.
   */
  pc_entries?: unknown;

  /**
   * Period of the chart.
   */
  period?: '1D' | '1W' | '1M' | '3M' | '1Y' | 'custom';

  /**
   * The currency code of the administration's primary currency.
   */
  primary_currency_code?: string;

  /**
   * The currency decimal places of the administration's primary currency.
   */
  primary_currency_decimal_places?: number;

  /**
   * The currency ID of the administration's primary currency.
   */
  primary_currency_id?: string;

  /**
   * The currency name of the administration's primary currency.
   */
  primary_currency_name?: string;

  /**
   * The currency symbol of the administration's primary currency.
   */
  primary_currency_symbol?: string;

  start_date?: string;

  /**
   * Indicated the type of chart that is expected to be rendered. You can safely
   * ignore this if you want.
   */
  type?: string;

  /**
   * Used to indicate the Y axis for this data set. Is usually between 0 and 1 (left
   * and right side of the chart).
   */
  yAxisID?: number;
}

export type AccountRetrieveOverviewResponse = Array<ChartDataSet>;

export interface AccountRetrieveOverviewParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

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

export declare namespace Account {
  export {
    type ChartDataPoint as ChartDataPoint,
    type ChartDataSet as ChartDataSet,
    type AccountRetrieveOverviewResponse as AccountRetrieveOverviewResponse,
    type AccountRetrieveOverviewParams as AccountRetrieveOverviewParams,
  };
}
