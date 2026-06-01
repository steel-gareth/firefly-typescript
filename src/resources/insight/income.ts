// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExpenseAPI from './expense';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;insight&quot; endpoints try to deliver sums, balances and insightful information in the broadest sense of the word.
 */
export class Income extends APIResource {
  /**
   * This endpoint gives a sum of the total income received by the user.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.income.getTotal({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  getTotal(params: IncomeGetTotalParams, options?: RequestOptions): APIPromise<IncomeGetTotalResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/income/total', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the income received by the user, grouped by
   * asset account.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.income.listByAssetAccount({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByAssetAccount(
    params: IncomeListByAssetAccountParams,
    options?: RequestOptions,
  ): APIPromise<IncomeListByAssetAccountResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/income/asset', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the income received by the user, grouped by
   * (any) category.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.income.listByCategory({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByCategory(
    params: IncomeListByCategoryParams,
    options?: RequestOptions,
  ): APIPromise<IncomeListByCategoryResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/income/category', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the income received by the user, grouped by
   * revenue account.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.income.listByRevenueAccount({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByRevenueAccount(
    params: IncomeListByRevenueAccountParams,
    options?: RequestOptions,
  ): APIPromise<IncomeListByRevenueAccountResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/income/revenue', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the income received by the user, grouped by
   * (any) tag.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.income.listByTag({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByTag(params: IncomeListByTagParams, options?: RequestOptions): APIPromise<IncomeListByTagResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/income/tag', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the income received by the user, including only
   * income with no category.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.income.listWithoutCategory({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutCategory(
    params: IncomeListWithoutCategoryParams,
    options?: RequestOptions,
  ): APIPromise<IncomeListWithoutCategoryResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/income/no-category', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the income received by the user, including only
   * income with no tag.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.income.listWithoutTag({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutTag(
    params: IncomeListWithoutTagParams,
    options?: RequestOptions,
  ): APIPromise<IncomeListWithoutTagResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/income/no-tag', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type IncomeGetTotalResponse = Array<ExpenseAPI.InsightTotalEntry>;

export type IncomeListByAssetAccountResponse = Array<ExpenseAPI.InsightGroupEntry>;

export type IncomeListByCategoryResponse = Array<ExpenseAPI.InsightGroupEntry>;

export type IncomeListByRevenueAccountResponse = Array<ExpenseAPI.InsightGroupEntry>;

export type IncomeListByTagResponse = Array<ExpenseAPI.InsightGroupEntry>;

export type IncomeListWithoutCategoryResponse = Array<ExpenseAPI.InsightTotalEntry>;

export type IncomeListWithoutTagResponse = Array<ExpenseAPI.InsightTotalEntry>;

export interface IncomeGetTotalParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: The accounts to be included in the results. If you include ID's of
   * asset accounts or liabilities, only deposits to those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface IncomeListByAssetAccountParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: The accounts to be included in the results. If you include ID's of
   * asset accounts or liabilities, only deposits to those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface IncomeListByCategoryParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: The accounts to be included in the results. If you include ID's of
   * asset accounts or liabilities, only deposits to those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Query param: The categories to be included in the results.
   */
  categories?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface IncomeListByRevenueAccountParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: The accounts to be included in the results. If you add the accounts
   * ID's of revenue accounts, only those accounts are included in the results. If
   * you include ID's of asset accounts or liabilities, only deposits to those asset
   * accounts / liabilities will be included. You can combine both asset / liability
   * and deposit account ID's. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface IncomeListByTagParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: The accounts to be included in the results. If you include ID's of
   * asset accounts or liabilities, only deposits to those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Query param: The tags to be included in the results.
   */
  tags?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface IncomeListWithoutCategoryParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: The accounts to be included in the results. If you include ID's of
   * asset accounts or liabilities, only deposits to those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface IncomeListWithoutTagParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: The accounts to be included in the results. If you include ID's of
   * asset accounts or liabilities, only deposits to those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Income {
  export {
    type IncomeGetTotalResponse as IncomeGetTotalResponse,
    type IncomeListByAssetAccountResponse as IncomeListByAssetAccountResponse,
    type IncomeListByCategoryResponse as IncomeListByCategoryResponse,
    type IncomeListByRevenueAccountResponse as IncomeListByRevenueAccountResponse,
    type IncomeListByTagResponse as IncomeListByTagResponse,
    type IncomeListWithoutCategoryResponse as IncomeListWithoutCategoryResponse,
    type IncomeListWithoutTagResponse as IncomeListWithoutTagResponse,
    type IncomeGetTotalParams as IncomeGetTotalParams,
    type IncomeListByAssetAccountParams as IncomeListByAssetAccountParams,
    type IncomeListByCategoryParams as IncomeListByCategoryParams,
    type IncomeListByRevenueAccountParams as IncomeListByRevenueAccountParams,
    type IncomeListByTagParams as IncomeListByTagParams,
    type IncomeListWithoutCategoryParams as IncomeListWithoutCategoryParams,
    type IncomeListWithoutTagParams as IncomeListWithoutTagParams,
  };
}
