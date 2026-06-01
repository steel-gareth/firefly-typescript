// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExpenseAPI from './expense';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;insight&quot; endpoints try to deliver sums, balances and insightful information in the broadest sense of the word.
 */
export class Transfer extends APIResource {
  /**
   * This endpoint gives a sum of the total amount transfers made by the user.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.transfer.getTotal({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  getTotal(params: TransferGetTotalParams, options?: RequestOptions): APIPromise<TransferGetTotalResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/transfer/total', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the transfers made by the user, grouped by
   * asset account or lability.
   *
   * @example
   * ```ts
   * const response =
   *   await client.insight.transfer.listByAssetAccount({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByAssetAccount(
    params: TransferListByAssetAccountParams,
    options?: RequestOptions,
  ): APIPromise<TransferListByAssetAccountResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/transfer/asset', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the transfers made by the user, grouped by
   * (any) category.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.transfer.listByCategory({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByCategory(
    params: TransferListByCategoryParams,
    options?: RequestOptions,
  ): APIPromise<TransferListByCategoryResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/transfer/category', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the transfers created by the user, grouped by
   * (any) tag.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.transfer.listByTag({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByTag(
    params: TransferListByTagParams,
    options?: RequestOptions,
  ): APIPromise<TransferListByTagResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/transfer/tag', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the transfers made by the user, including only
   * transfers with no category.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.transfer.listWithoutCategory({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutCategory(
    params: TransferListWithoutCategoryParams,
    options?: RequestOptions,
  ): APIPromise<TransferListWithoutCategoryResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/transfer/no-category', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the transfers made by the user, including only
   * transfers with no tag.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.transfer.listWithoutTag({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutTag(
    params: TransferListWithoutTagParams,
    options?: RequestOptions,
  ): APIPromise<TransferListWithoutTagResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/transfer/no-tag', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type TransferGetTotalResponse = Array<ExpenseAPI.InsightTotalEntry>;

export type TransferListByAssetAccountResponse =
  Array<TransferListByAssetAccountResponse.TransferListByAssetAccountResponseItem>;

export namespace TransferListByAssetAccountResponse {
  export interface TransferListByAssetAccountResponseItem {
    /**
     * This ID is a reference to the original object.
     */
    id?: string;

    /**
     * The currency code of the expenses listed for this account.
     */
    currency_code?: string;

    /**
     * The currency ID of the expenses listed for this account.
     */
    currency_id?: string;

    /**
     * The total amount transferred between start date and end date, a number defined
     * as a string, for this asset account.
     */
    difference?: string;

    /**
     * The total amount transferred between start date and end date, a number as a
     * float, for this asset account. May have rounding errors.
     */
    difference_float?: number;

    /**
     * The total amount transferred TO this account between start date and end date, a
     * number defined as a string, for this asset account.
     */
    in?: string;

    /**
     * The total amount transferred FROM this account between start date and end date,
     * a number as a float, for this asset account. May have rounding errors.
     */
    in_float?: number;

    /**
     * This is the name of the object.
     */
    name?: string;

    /**
     * The total amount transferred FROM this account between start date and end date,
     * a number defined as a string, for this asset account.
     */
    out?: string;

    /**
     * The total amount transferred TO this account between start date and end date, a
     * number as a float, for this asset account. May have rounding errors.
     */
    out_float?: number;
  }
}

export type TransferListByCategoryResponse = Array<ExpenseAPI.InsightGroupEntry>;

export type TransferListByTagResponse = Array<ExpenseAPI.InsightGroupEntry>;

export type TransferListWithoutCategoryResponse = Array<ExpenseAPI.InsightTotalEntry>;

export type TransferListWithoutTagResponse = Array<ExpenseAPI.InsightTotalEntry>;

export interface TransferGetTotalParams {
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
   * asset accounts or liabilities, only transfers between those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransferListByAssetAccountParams {
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
   * asset accounts or liabilities, only transfers between those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransferListByCategoryParams {
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
   * asset accounts or liabilities, only transfers between those asset accounts /
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

export interface TransferListByTagParams {
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
   * asset accounts or liabilities, only transfers between those asset accounts /
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

export interface TransferListWithoutCategoryParams {
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
   * asset accounts or liabilities, only transfers between those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransferListWithoutTagParams {
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
   * asset accounts or liabilities, only transfers from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Transfer {
  export {
    type TransferGetTotalResponse as TransferGetTotalResponse,
    type TransferListByAssetAccountResponse as TransferListByAssetAccountResponse,
    type TransferListByCategoryResponse as TransferListByCategoryResponse,
    type TransferListByTagResponse as TransferListByTagResponse,
    type TransferListWithoutCategoryResponse as TransferListWithoutCategoryResponse,
    type TransferListWithoutTagResponse as TransferListWithoutTagResponse,
    type TransferGetTotalParams as TransferGetTotalParams,
    type TransferListByAssetAccountParams as TransferListByAssetAccountParams,
    type TransferListByCategoryParams as TransferListByCategoryParams,
    type TransferListByTagParams as TransferListByTagParams,
    type TransferListWithoutCategoryParams as TransferListWithoutCategoryParams,
    type TransferListWithoutTagParams as TransferListWithoutTagParams,
  };
}
