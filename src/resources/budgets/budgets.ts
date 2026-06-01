// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BudgetsAPI from './budgets';
import * as AccountsAPI from '../accounts';
import * as AvailableBudgetsAPI from '../available-budgets';
import * as LimitsAPI from './limits';
import {
  BudgetLimitArray,
  BudgetLimitRead,
  BudgetLimitSingle,
  LimitCreateParams,
  LimitDeleteParams,
  LimitList0Params,
  LimitList1Params,
  LimitListTransactionsParams,
  LimitRetrieveParams,
  LimitUpdateParams,
  Limits,
} from './limits';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints to manage a user&#039;s budgets and get info on the related objects, like limits.
 */
export class Budgets extends APIResource {
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);

  /**
   * Creates a new budget. The data required can be submitted as a JSON body or as a
   * list of parameters.
   *
   * @example
   * ```ts
   * const budgetSingle = await client.budgets.create({
   *   name: 'Bills',
   * });
   * ```
   */
  create(params: BudgetCreateParams, options?: RequestOptions): APIPromise<BudgetSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/budgets', {
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
   * Get a single budget. If the start date and end date are submitted as well, the
   * "spent" array will be updated accordingly.
   *
   * @example
   * ```ts
   * const budgetSingle = await client.budgets.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: BudgetRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BudgetSingle> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/budgets/${id}`, {
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
   * Update existing budget. This endpoint cannot be used to set budget amount
   * limits.
   *
   * @example
   * ```ts
   * const budgetSingle = await client.budgets.update('123', {
   *   name: 'Bills',
   * });
   * ```
   */
  update(id: string, params: BudgetUpdateParams, options?: RequestOptions): APIPromise<BudgetSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/budgets/${id}`, {
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
   * List all the budgets the user has made. If the start date and end date are
   * submitted as well, the "spent" array will be updated accordingly.
   *
   * @example
   * ```ts
   * const budgets = await client.budgets.list();
   * ```
   */
  list(
    params: BudgetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BudgetListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/budgets', {
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
   * Delete a budget. Transactions will not be deleted.
   *
   * @example
   * ```ts
   * await client.budgets.delete('123');
   * ```
   */
  delete(
    id: string,
    params: BudgetDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/budgets/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists all attachments.
   *
   * @example
   * ```ts
   * const attachmentArray =
   *   await client.budgets.listAttachments('123');
   * ```
   */
  listAttachments(
    id: string,
    params: BudgetListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/budgets/${id}/attachments`, {
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
   * Get all transactions linked to a budget, possibly limited by start and end
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.budgets.listTransactions('123');
   * ```
   */
  listTransactions(
    id: string,
    params: BudgetListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/budgets/${id}/transactions`, {
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
   * Get all transactions NOT linked to a budget, possibly limited by start and end
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.budgets.listTransactionsWithoutBudget();
   * ```
   */
  listTransactionsWithoutBudget(
    params: BudgetListTransactionsWithoutBudgetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/budgets/transactions-without-budget', {
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

/**
 * Period for the auto budget
 */
export type AutoBudgetPeriod = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'half-year' | 'yearly' | null;

/**
 * The type of auto-budget that Firefly III must create.
 */
export type AutoBudgetType = 'reset' | 'rollover' | 'none' | null;

export interface BudgetRead {
  id: string;

  attributes: BudgetRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace BudgetRead {
  export interface Attributes {
    name: string;

    active?: boolean;

    /**
     * The amount for the auto-budget, if set.
     */
    auto_budget_amount?: string | null;

    /**
     * Period for the auto budget
     */
    auto_budget_period?: BudgetsAPI.AutoBudgetPeriod | null;

    /**
     * The type of auto-budget that Firefly III must create.
     */
    auto_budget_type?: BudgetsAPI.AutoBudgetType | null;

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

    notes?: string | null;

    /**
     * The group ID of the group this object is part of. NULL if no group.
     */
    object_group_id?: string | null;

    /**
     * The order of the group. At least 1, for the highest sorting.
     */
    object_group_order?: number | null;

    /**
     * The name of the group. NULL if no group.
     */
    object_group_title?: string | null;

    /**
     * Indicates whether the object has a currency setting. If false, the object uses
     * the administration's primary currency.
     */
    object_has_currency_setting?: boolean;

    order?: number;

    /**
     * The amount for the auto-budget, if set in the primary currency of the
     * administration.
     */
    pc_auto_budget_amount?: string | null;

    /**
     * Information on how much was spent in this budget. Is only filled in when the
     * start and end date are submitted. It is converted to the primary currency of the
     * administration.
     */
    pc_spent?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

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
     * Information on how much was spent in this budget. Is only filled in when the
     * start and end date are submitted.
     */
    spent?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    updated_at?: string;
  }
}

export interface BudgetSingle {
  data: BudgetRead;
}

export interface BudgetListResponse {
  data: Array<BudgetRead>;

  meta: AccountsAPI.Meta;
}

export interface BudgetCreateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  active?: boolean;

  /**
   * Body param
   */
  auto_budget_amount?: string | null;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  auto_budget_currency_code?: string | null;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  auto_budget_currency_id?: string | null;

  /**
   * Body param: Period for the auto budget
   */
  auto_budget_period?: AutoBudgetPeriod | null;

  /**
   * Body param: The type of auto-budget that Firefly III must create.
   */
  auto_budget_type?: AutoBudgetType | null;

  /**
   * Body param: Whether or not to fire the webhooks that are related to this event.
   */
  fire_webhooks?: boolean;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BudgetRetrieveParams {
  /**
   * Query param: A date formatted YYYY-MM-DD, to get info on how much the user has
   * spent.
   */
  end?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD, to get info on how much the user has
   * spent.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BudgetUpdateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  active?: boolean;

  /**
   * Body param
   */
  auto_budget_amount?: string | null;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  auto_budget_currency_code?: string | null;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  auto_budget_currency_id?: string | null;

  /**
   * Body param: Period for the auto budget
   */
  auto_budget_period?: AutoBudgetPeriod | null;

  /**
   * Body param: The type of auto-budget that Firefly III must create.
   */
  auto_budget_type?: AutoBudgetType | null;

  /**
   * Body param: Whether or not to fire the webhooks that are related to this event.
   */
  fire_webhooks?: boolean;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param
   */
  order?: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BudgetListParams {
  /**
   * Query param: A date formatted YYYY-MM-DD, to get info on how much the user has
   * spent. You must submit both start and end.
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
   * Query param: A date formatted YYYY-MM-DD, to get info on how much the user has
   * spent. You must submit both start and end.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BudgetDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BudgetListAttachmentsParams {
  /**
   * Query param: Number of items per page. The default pagination is per 50 items.
   */
  limit?: number;

  /**
   * Query param: Page number. The default pagination is per 50 items.
   */
  page?: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BudgetListTransactionsParams {
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
   * Query param
   */
  type?: AccountsAPI.TransactionTypeFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BudgetListTransactionsWithoutBudgetParams {
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

Budgets.Limits = Limits;

export declare namespace Budgets {
  export {
    type AutoBudgetPeriod as AutoBudgetPeriod,
    type AutoBudgetType as AutoBudgetType,
    type BudgetRead as BudgetRead,
    type BudgetSingle as BudgetSingle,
    type BudgetListResponse as BudgetListResponse,
    type BudgetCreateParams as BudgetCreateParams,
    type BudgetRetrieveParams as BudgetRetrieveParams,
    type BudgetUpdateParams as BudgetUpdateParams,
    type BudgetListParams as BudgetListParams,
    type BudgetDeleteParams as BudgetDeleteParams,
    type BudgetListAttachmentsParams as BudgetListAttachmentsParams,
    type BudgetListTransactionsParams as BudgetListTransactionsParams,
    type BudgetListTransactionsWithoutBudgetParams as BudgetListTransactionsWithoutBudgetParams,
  };

  export {
    Limits as Limits,
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
