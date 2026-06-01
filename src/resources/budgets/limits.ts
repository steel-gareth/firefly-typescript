// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from '../accounts';
import * as AvailableBudgetsAPI from '../available-budgets';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints to manage a user&#039;s budgets and get info on the related objects, like limits.
 */
export class Limits extends APIResource {
  /**
   * Store a new budget limit under this budget.
   *
   * @example
   * ```ts
   * const budgetLimitSingle =
   *   await client.budgets.limits.create('123', {
   *     amount: '123.45',
   *     end: '2026-04-30',
   *     start: '2026-04-01',
   *   });
   * ```
   */
  create(id: string, params: LimitCreateParams, options?: RequestOptions): APIPromise<BudgetLimitSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post(path`/v1/budgets/${id}/limits`, {
      body,
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

  /**
   * Get single budget limit.
   *
   * @example
   * ```ts
   * const budgetLimitSingle =
   *   await client.budgets.limits.retrieve(1, { id: '123' });
   * ```
   */
  retrieve(
    limitID: number,
    params: LimitRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<BudgetLimitSingle> {
    const { id, 'X-Trace-Id': xTraceID } = params;
    return this._client.get(path`/v1/budgets/${id}/limits/${limitID}`, {
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

  /**
   * Update existing budget limit.
   *
   * @example
   * ```ts
   * const budgetLimitSingle =
   *   await client.budgets.limits.update('123', { id: '123' });
   * ```
   */
  update(
    limitID: string,
    params: LimitUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BudgetLimitSingle> {
    const { id, 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/budgets/${id}/limits/${limitID}`, {
      body,
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

  /**
   * Delete a budget limit.
   *
   * @example
   * ```ts
   * await client.budgets.limits.delete('123', { id: '123' });
   * ```
   */
  delete(limitID: string, params: LimitDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id, 'X-Trace-Id': xTraceID } = params;
    return this._client.delete(path`/v1/budgets/${id}/limits/${limitID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get all budget limits for this budget and the money spent, and money left. You
   * can limit the list by submitting a date range as well. The "spent" array for
   * each budget limit is NOT influenced by the start and end date of your query, but
   * by the start and end date of the budget limit itself.
   *
   * @example
   * ```ts
   * const budgetLimitArray = await client.budgets.limits.list0(
   *   '123',
   * );
   * ```
   */
  list0(
    id: string,
    params: LimitList0Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BudgetLimitArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/budgets/${id}/limits`, {
      query,
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

  /**
   * Get all budget limits for for this date range.
   *
   * @example
   * ```ts
   * const budgetLimitArray = await client.budgets.limits.list1({
   *   end: '2026-04-30',
   *   start: '2026-04-01',
   * });
   * ```
   */
  list1(params: LimitList1Params, options?: RequestOptions): APIPromise<BudgetLimitArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/budget-limits', {
      query,
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

  /**
   * List all the transactions within one budget limit. The start and end date are
   * dictated by the budget limit.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.budgets.limits.listTransactions('123', {
   *     id: '123',
   *   });
   * ```
   */
  listTransactions(
    limitID: string,
    params: LimitListTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { id, 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get(path`/v1/budgets/${id}/limits/${limitID}/transactions`, {
      query,
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

export interface BudgetLimitArray {
  data: Array<BudgetLimitRead>;

  meta: AccountsAPI.Meta;
}

export interface BudgetLimitRead {
  id: string;

  attributes: BudgetLimitRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace BudgetLimitRead {
  export interface Attributes {
    amount?: string;

    /**
     * The budget ID of the associated budget.
     */
    budget_id?: string;

    created_at?: string;

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

    /**
     * End date of the budget limit.
     */
    end?: string;

    /**
     * Some notes for this specific budget limit.
     */
    notes?: string | null;

    /**
     * Indicates whether the object has a currency setting. If false, the object uses
     * the administration's primary currency.
     */
    object_has_currency_setting?: boolean;

    /**
     * The amount of this budget limit in the user's primary currency, if the original
     * amount is in a different currency.
     */
    pc_amount?: string | null;

    /**
     * Amount(s) spent in the primary currency in the database for this budget limit.
     */
    pc_spent?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * Period of the budget limit. Only used when auto-generated by auto-budget.
     */
    period?: string | null;

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

    /**
     * Amount(s) spent in the currencies in the database for this budget limit.
     */
    spent?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * Start date of the budget limit.
     */
    start?: string;

    updated_at?: string;
  }
}

export interface BudgetLimitSingle {
  data: BudgetLimitRead;
}

export interface LimitCreateParams {
  /**
   * Body param
   */
  amount: string;

  /**
   * Body param: End date of the budget limit.
   */
  end: string;

  /**
   * Body param: Start date of the budget limit.
   */
  start: string;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * primary currency.
   */
  currency_code?: string;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * primary currency.
   */
  currency_id?: string;

  /**
   * Body param: Whether or not to fire the webhooks that are related to this event.
   */
  fire_webhooks?: boolean;

  /**
   * Body param: Some notes for this specific budget limit.
   */
  notes?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LimitRetrieveParams {
  /**
   * Path param: The ID of the budget. The budget limit MUST be associated to the
   * budget ID.
   */
  id: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LimitUpdateParams {
  /**
   * Path param: The ID of the budget. The budget limit MUST be associated to the
   * budget ID.
   */
  id: string;

  /**
   * Body param
   */
  amount?: string;

  /**
   * Body param: The currency code of the currency associated with this object.
   */
  currency_code?: string;

  /**
   * Body param: The currency ID of the currency associated with this object.
   */
  currency_id?: string;

  /**
   * Body param: The currency name of the currency associated with this object.
   */
  currency_name?: string;

  /**
   * Body param: End date of the budget limit.
   */
  end?: string;

  /**
   * Body param: Whether or not to fire the webhooks that are related to this event.
   */
  fire_webhooks?: boolean;

  /**
   * Body param: Some notes for this specific budget limit.
   */
  notes?: string | null;

  /**
   * Body param: Start date of the budget limit.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LimitDeleteParams {
  /**
   * Path param: The ID of the budget. The budget limit MUST be associated to the
   * budget ID.
   */
  id: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LimitList0Params {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LimitList1Params {
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

export interface LimitListTransactionsParams {
  /**
   * Path param: The ID of the budget. The budget limit MUST be associated to the
   * budget ID.
   */
  id: string;

  /**
   * Query param: Number of items per page. The default pagination is per 50 items.
   */
  limit?: number;

  /**
   * Query param: Page number. The default pagination is per 50 items.
   */
  page?: number;

  /**
   * Query param
   */
  type?: AccountsAPI.TransactionTypeFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Limits {
  export {
    type BudgetLimitArray as BudgetLimitArray,
    type BudgetLimitRead as BudgetLimitRead,
    type BudgetLimitSingle as BudgetLimitSingle,
    type LimitCreateParams as LimitCreateParams,
    type LimitRetrieveParams as LimitRetrieveParams,
    type LimitUpdateParams as LimitUpdateParams,
    type LimitDeleteParams as LimitDeleteParams,
    type LimitList0Params as LimitList0Params,
    type LimitList1Params as LimitList1Params,
    type LimitListTransactionsParams as LimitListTransactionsParams,
  };
}
