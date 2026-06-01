// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AvailableBudgetsAPI from './available-budgets';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints to manage the total available amount that the user has made available to themselves. Used in periodic budgeting.
 */
export class AvailableBudgets extends APIResource {
  /**
   * Get a single available budget, by ID.
   *
   * @example
   * ```ts
   * const availableBudget =
   *   await client.availableBudgets.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: AvailableBudgetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvailableBudgetRetrieveResponse> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/available-budgets/${id}`, {
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
   * Firefly III calculates the total amount of money budgeted in so-called
   * "available budgets". This endpoint returns all of these amounts and the periods
   * for which they are calculated.
   *
   * @example
   * ```ts
   * const availableBudgetArray =
   *   await client.availableBudgets.list();
   * ```
   */
  list(
    params: AvailableBudgetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvailableBudgetArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/available-budgets', {
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

export interface ArrayEntryWithCurrencyAndSum {
  currency_code?: string;

  /**
   * Number of decimals supported by the currency
   */
  currency_decimal_places?: number;

  currency_id?: string;

  currency_symbol?: string;

  /**
   * The amount earned, spent or transferred.
   */
  sum?: string;
}

export interface AvailableBudgetArray {
  data: Array<AvailableBudgetRead>;

  meta: AccountsAPI.Meta;
}

export interface AvailableBudgetRead {
  id: string;

  attributes: AvailableBudgetRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace AvailableBudgetRead {
  export interface Attributes {
    /**
     * The amount of this available budget in the currency of this available budget.
     */
    amount?: string;

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
     * End date of the available budget.
     */
    end?: string;

    /**
     * Indicates whether the object has a currency setting. If false, the object uses
     * the administration's primary currency.
     */
    object_has_currency_setting?: boolean;

    /**
     * The amount of this available budget in the primary currency (pc) of this
     * administration.
     */
    pc_amount?: string;

    /**
     * The amount spent in budgets in the primary currency (pc) of this administration.
     */
    pc_spent_in_budgets?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * The amount spent outside of budgets in the primary currency (pc) of this
     * administration.
     */
    pc_spent_outside_budgets?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

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

    spent_in_budgets?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    spent_outside_budgets?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * Start date of the available budget.
     */
    start?: string;

    updated_at?: string;
  }
}

export interface AvailableBudgetRetrieveResponse {
  data: AvailableBudgetRead;
}

export interface AvailableBudgetRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AvailableBudgetListParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end?: string;

  /**
   * Query param: Number of items per page. The default pagination is per 50 items.
   */
  limit?: number;

  /**
   * Query param: Page number. The default pagination is per 50 items.
   */
  page?: number;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace AvailableBudgets {
  export {
    type ArrayEntryWithCurrencyAndSum as ArrayEntryWithCurrencyAndSum,
    type AvailableBudgetArray as AvailableBudgetArray,
    type AvailableBudgetRead as AvailableBudgetRead,
    type AvailableBudgetRetrieveResponse as AvailableBudgetRetrieveResponse,
    type AvailableBudgetRetrieveParams as AvailableBudgetRetrieveParams,
    type AvailableBudgetListParams as AvailableBudgetListParams,
  };
}
