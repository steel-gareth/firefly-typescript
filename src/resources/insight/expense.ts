// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;insight&quot; endpoints try to deliver sums, balances and insightful information in the broadest sense of the word.
 */
export class Expense extends APIResource {
  /**
   * This endpoint gives a sum of the total expenses made by the user.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.expense.getTotal({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  getTotal(params: ExpenseGetTotalParams, options?: RequestOptions): APIPromise<ExpenseGetTotalResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/total', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, grouped by asset
   * account.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.expense.listByAssetAccount({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByAssetAccount(
    params: ExpenseListByAssetAccountParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListByAssetAccountResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/asset', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, grouped by (any)
   * bill.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.expense.listByBill({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByBill(
    params: ExpenseListByBillParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListByBillResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/bill', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, grouped by (any)
   * budget.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.expense.listByBudget({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByBudget(
    params: ExpenseListByBudgetParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListByBudgetResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/budget', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, grouped by (any)
   * category.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.expense.listByCategory({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByCategory(
    params: ExpenseListByCategoryParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListByCategoryResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/category', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, grouped by
   * expense account.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.expense.listByExpenseAccount({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByExpenseAccount(
    params: ExpenseListByExpenseAccountParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListByExpenseAccountResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/expense', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, grouped by (any)
   * tag.
   *
   * @example
   * ```ts
   * const insightGroupEntries =
   *   await client.insight.expense.listByTag({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listByTag(params: ExpenseListByTagParams, options?: RequestOptions): APIPromise<ExpenseListByTagResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/tag', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, including only
   * expenses with no bill.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.expense.listWithoutBill({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutBill(
    params: ExpenseListWithoutBillParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListWithoutBillResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/no-bill', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, including only
   * expenses with no budget.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.expense.listWithoutBudget({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutBudget(
    params: ExpenseListWithoutBudgetParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListWithoutBudgetResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/no-budget', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, including only
   * expenses with no category.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.expense.listWithoutCategory({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutCategory(
    params: ExpenseListWithoutCategoryParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListWithoutCategoryResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/no-category', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint gives a summary of the expenses made by the user, including only
   * expenses with no tag.
   *
   * @example
   * ```ts
   * const insightTotalEntries =
   *   await client.insight.expense.listWithoutTag({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   * ```
   */
  listWithoutTag(
    params: ExpenseListWithoutTagParams,
    options?: RequestOptions,
  ): APIPromise<ExpenseListWithoutTagResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/insight/expense/no-tag', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface InsightGroupEntry {
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
   * The amount spent or earned between start date and end date, a number defined as
   * a string, for this object and all asset accounts.
   */
  difference?: string;

  /**
   * The amount spent or earned between start date and end date, a number as a float,
   * for this object and all asset accounts. May have rounding errors.
   */
  difference_float?: number;

  /**
   * This is the name of the object.
   */
  name?: string;
}

export interface InsightTotalEntry {
  /**
   * The currency code of the expenses listed for this expense account.
   */
  currency_code?: string;

  /**
   * The currency ID of the expenses listed for this expense account.
   */
  currency_id?: string;

  /**
   * The amount spent between start date and end date, defined as a string, for this
   * expense account and all asset accounts.
   */
  difference?: string;

  /**
   * The amount spent between start date and end date, defined as a string, for this
   * expense account and all asset accounts. This number is a float (double) and may
   * have rounding errors.
   */
  difference_float?: number;
}

export type ExpenseGetTotalResponse = Array<InsightTotalEntry>;

export type ExpenseListByAssetAccountResponse = Array<InsightGroupEntry>;

export type ExpenseListByBillResponse = Array<InsightGroupEntry>;

export type ExpenseListByBudgetResponse = Array<InsightGroupEntry>;

export type ExpenseListByCategoryResponse = Array<InsightGroupEntry>;

export type ExpenseListByExpenseAccountResponse = Array<InsightGroupEntry>;

export type ExpenseListByTagResponse = Array<InsightGroupEntry>;

export type ExpenseListWithoutBillResponse = Array<InsightTotalEntry>;

export type ExpenseListWithoutBudgetResponse = Array<InsightTotalEntry>;

export type ExpenseListWithoutCategoryResponse = Array<InsightTotalEntry>;

export type ExpenseListWithoutTagResponse = Array<InsightTotalEntry>;

export interface ExpenseGetTotalParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListByAssetAccountParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListByBillParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Query param: The bills to be included in the results.
   */
  bills?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListByBudgetParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Query param: The budgets to be included in the results.
   */
  budgets?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListByCategoryParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
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

export interface ExpenseListByExpenseAccountParams {
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
   * ID's of expense accounts, only those accounts are included in the results. If
   * you include ID's of asset accounts or liabilities, only withdrawals from those
   * asset accounts / liabilities will be included. You can combine both asset /
   * liability and expense account ID's. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListByTagParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
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

export interface ExpenseListWithoutBillParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListWithoutBudgetParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListWithoutCategoryParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExpenseListWithoutTagParams {
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
   * asset accounts or liabilities, only withdrawals from those asset accounts /
   * liabilities will be included. Other account ID's will be ignored.
   */
  accounts?: Array<number>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Expense {
  export {
    type InsightGroupEntry as InsightGroupEntry,
    type InsightTotalEntry as InsightTotalEntry,
    type ExpenseGetTotalResponse as ExpenseGetTotalResponse,
    type ExpenseListByAssetAccountResponse as ExpenseListByAssetAccountResponse,
    type ExpenseListByBillResponse as ExpenseListByBillResponse,
    type ExpenseListByBudgetResponse as ExpenseListByBudgetResponse,
    type ExpenseListByCategoryResponse as ExpenseListByCategoryResponse,
    type ExpenseListByExpenseAccountResponse as ExpenseListByExpenseAccountResponse,
    type ExpenseListByTagResponse as ExpenseListByTagResponse,
    type ExpenseListWithoutBillResponse as ExpenseListWithoutBillResponse,
    type ExpenseListWithoutBudgetResponse as ExpenseListWithoutBudgetResponse,
    type ExpenseListWithoutCategoryResponse as ExpenseListWithoutCategoryResponse,
    type ExpenseListWithoutTagResponse as ExpenseListWithoutTagResponse,
    type ExpenseGetTotalParams as ExpenseGetTotalParams,
    type ExpenseListByAssetAccountParams as ExpenseListByAssetAccountParams,
    type ExpenseListByBillParams as ExpenseListByBillParams,
    type ExpenseListByBudgetParams as ExpenseListByBudgetParams,
    type ExpenseListByCategoryParams as ExpenseListByCategoryParams,
    type ExpenseListByExpenseAccountParams as ExpenseListByExpenseAccountParams,
    type ExpenseListByTagParams as ExpenseListByTagParams,
    type ExpenseListWithoutBillParams as ExpenseListWithoutBillParams,
    type ExpenseListWithoutBudgetParams as ExpenseListWithoutBudgetParams,
    type ExpenseListWithoutCategoryParams as ExpenseListWithoutCategoryParams,
    type ExpenseListWithoutTagParams as ExpenseListWithoutTagParams,
  };
}
