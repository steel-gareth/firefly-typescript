// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;charts&quot; endpoints deliver optimised data for charts and graphs.
 */
export class Category extends APIResource {
  /**
   * This endpoint returns the data required to generate a chart with basic category
   * information.
   *
   * @example
   * ```ts
   * const chartDataSets =
   *   await client.chart.category.retrieveOverview({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  retrieveOverview(
    params: CategoryRetrieveOverviewParams,
    options?: RequestOptions,
  ): APIPromise<CategoryRetrieveOverviewResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/chart/category/overview', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type CategoryRetrieveOverviewResponse = Array<AccountAPI.ChartDataSet>;

export interface CategoryRetrieveOverviewParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Category {
  export {
    type CategoryRetrieveOverviewResponse as CategoryRetrieveOverviewResponse,
    type CategoryRetrieveOverviewParams as CategoryRetrieveOverviewParams,
  };
}
