// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as BillsAPI from './bills';
import * as AccountsAPI from './accounts';
import * as RulesAPI from './rules';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints to manage a user&#039;s bills and all related objects.
 */
export class Bills extends APIResource {
  /**
   * Creates a new bill. The data required can be submitted as a JSON body or as a
   * list of parameters.
   *
   * @example
   * ```ts
   * const billSingle = await client.bills.create({
   *   amount_max: '123.45',
   *   amount_min: '123.45',
   *   date: '2026-04-01T00:00:00+00:00',
   *   name: 'Rent',
   *   repeat_freq: 'monthly',
   * });
   * ```
   */
  create(params: BillCreateParams, options?: RequestOptions): APIPromise<BillSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/bills', {
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
   * Get a single bill.
   *
   * @example
   * ```ts
   * const billSingle = await client.bills.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: BillRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillSingle> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/bills/${id}`, {
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
   * Update existing bill.
   *
   * @example
   * ```ts
   * const billSingle = await client.bills.update('123', {
   *   name: 'Rent',
   * });
   * ```
   */
  update(id: string, params: BillUpdateParams, options?: RequestOptions): APIPromise<BillSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/bills/${id}`, {
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
   * This endpoint will list all the user's bills.
   *
   * @example
   * ```ts
   * const billArray = await client.bills.list();
   * ```
   */
  list(params: BillListParams | null | undefined = {}, options?: RequestOptions): APIPromise<BillArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/bills', {
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
   * Delete a bill. This will not delete any associated rules. Will not remove
   * associated transactions. WILL remove all associated attachments.
   *
   * @example
   * ```ts
   * await client.bills.delete('123');
   * ```
   */
  delete(
    id: string,
    params: BillDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/bills/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint will list all attachments linked to the bill.
   *
   * @example
   * ```ts
   * const attachmentArray = await client.bills.listAttachments(
   *   '123',
   * );
   * ```
   */
  listAttachments(
    id: string,
    params: BillListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/bills/${id}/attachments`, {
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
   * This endpoint will list all rules that have an action to set the bill to this
   * bill.
   *
   * @example
   * ```ts
   * const ruleArray = await client.bills.listRules('123');
   * ```
   */
  listRules(
    id: string,
    params: BillListRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleArray> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/bills/${id}/rules`, {
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
   * This endpoint will list all transactions linked to this bill.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.bills.listTransactions('123');
   * ```
   */
  listTransactions(
    id: string,
    params: BillListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/bills/${id}/transactions`, {
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

export interface BillArray {
  data: Array<BillRead>;

  meta: AccountsAPI.Meta;
}

export interface BillRead {
  id: string;

  attributes: BillRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace BillRead {
  export interface Attributes {
    /**
     * If the subscription is active.
     */
    active?: boolean;

    /**
     * The average amount that is expected for this subscription in the subscription's
     * currency.
     */
    amount_avg?: string;

    /**
     * The maximum amount that is expected for this subscription in the subscription's
     * currency.
     */
    amount_max?: string;

    /**
     * The minimum amount that is expected for this subscription in the subscription's
     * currency.
     */
    amount_min?: string;

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

    date?: string;

    /**
     * The date after which this subscription is no longer valid or applicable
     */
    end_date?: string | null;

    /**
     * The date before which the subscription must be renewed (or cancelled)
     */
    extension_date?: string | null;

    /**
     * The name of the subscription.
     */
    name?: string;

    /**
     * When the subscription is expected to be due.
     */
    next_expected_match?: string | null;

    /**
     * Formatted (locally) when the subscription is due.
     */
    next_expected_match_diff?: string | null;

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

    /**
     * Order of the subscription.
     */
    order?: number;

    /**
     * Array of past transactions when the subscription was paid.
     */
    paid_dates?: Array<Attributes.PaidDate>;

    /**
     * Array of future dates when the bill is expected to be paid. Autogenerated.
     */
    pay_dates?: Array<string>;

    /**
     * The average amount that is expected for this subscription in the
     * administration's primary currency.
     */
    pc_amount_avg?: string;

    /**
     * The maximum amount that is expected for this subscription in the
     * administration's primary currency.
     */
    pc_amount_max?: string;

    /**
     * The minimum amount that is expected for this subscription in the
     * administration's primary currency.
     */
    pc_amount_min?: string;

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
     * How often the bill must be paid.
     */
    repeat_freq?: BillsAPI.BillRepeatFrequency;

    /**
     * How often the subscription will be skipped. 1 means a bi-monthly subscription.
     */
    skip?: number;

    updated_at?: string;
  }

  export namespace Attributes {
    export interface PaidDate {
      /**
       * The amount that was paid for this subscription in the subscription's currency.
       */
      amount?: string;

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
       * Date the bill was paid.
       */
      date?: string;

      /**
       * The foreign amount that was paid for this subscription in the subscription's
       * currency.
       */
      foreign_amount?: string;

      /**
       * The amount that was paid for this subscription in the administration's primary
       * currency.
       */
      pc_amount?: string;

      /**
       * The foreign amount that was paid for this subscription in the administration's
       * primary currency.
       */
      pc_foreign_amount?: string;

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
       * ID of this subscription.
       */
      subscription_id?: string;

      /**
       * Transaction group ID of the transaction linked to this subscription.
       */
      transaction_group_id?: string;

      /**
       * Transaction journal ID of the transaction linked to this subscription.
       */
      transaction_journal_id?: string;
    }
  }
}

/**
 * How often the bill must be paid.
 */
export type BillRepeatFrequency = 'weekly' | 'monthly' | 'quarterly' | 'half-year' | 'yearly';

export interface BillSingle {
  data: BillRead;
}

export interface RuleArray {
  data: Array<RulesAPI.RuleRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface BillCreateParams {
  /**
   * Body param
   */
  amount_max: string;

  /**
   * Body param
   */
  amount_min: string;

  /**
   * Body param
   */
  date: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param: How often the bill must be paid.
   */
  repeat_freq: BillRepeatFrequency;

  /**
   * Body param: If the bill is active.
   */
  active?: boolean;

  /**
   * Body param: Use either currency_id or currency_code
   */
  currency_code?: string;

  /**
   * Body param: Use either currency_id or currency_code
   */
  currency_id?: string;

  /**
   * Body param: The date after which this bill is no longer valid or applicable
   */
  end_date?: string;

  /**
   * Body param: The date before which the bill must be renewed (or cancelled)
   */
  extension_date?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param: The group ID of the group this object is part of. NULL if no group.
   */
  object_group_id?: string | null;

  /**
   * Body param: The name of the group. NULL if no group.
   */
  object_group_title?: string | null;

  /**
   * Body param: How often the bill must be skipped. 1 means a bi-monthly bill.
   */
  skip?: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BillRetrieveParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. If it is added to the request, Firefly
   * III will calculate the appropriate payment and paid dates.
   */
  end?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD. If it is are added to the request,
   * Firefly III will calculate the appropriate payment and paid dates.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BillUpdateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param: If the bill is active.
   */
  active?: boolean;

  /**
   * Body param
   */
  amount_max?: string;

  /**
   * Body param
   */
  amount_min?: string;

  /**
   * Body param: Use either currency_id or currency_code
   */
  currency_code?: string;

  /**
   * Body param: Use either currency_id or currency_code
   */
  currency_id?: string;

  /**
   * Body param
   */
  date?: string;

  /**
   * Body param: The date after which this bill is no longer valid or applicable
   */
  end_date?: string;

  /**
   * Body param: The date before which the bill must be renewed (or cancelled)
   */
  extension_date?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param: The group ID of the group this object is part of. NULL if no group.
   */
  object_group_id?: string | null;

  /**
   * Body param: The name of the group. NULL if no group.
   */
  object_group_title?: string | null;

  /**
   * Body param: How often the bill must be paid.
   */
  repeat_freq?: BillRepeatFrequency;

  /**
   * Body param: How often the bill must be skipped. 1 means a bi-monthly bill.
   */
  skip?: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BillListParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. If it is added to the request, Firefly
   * III will calculate the appropriate payment and paid dates.
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
   * Query param: A date formatted YYYY-MM-DD. If it is are added to the request,
   * Firefly III will calculate the appropriate payment and paid dates.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BillDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BillListAttachmentsParams {
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

export interface BillListRulesParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface BillListTransactionsParams {
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

export declare namespace Bills {
  export {
    type BillArray as BillArray,
    type BillRead as BillRead,
    type BillRepeatFrequency as BillRepeatFrequency,
    type BillSingle as BillSingle,
    type RuleArray as RuleArray,
    type BillCreateParams as BillCreateParams,
    type BillRetrieveParams as BillRetrieveParams,
    type BillUpdateParams as BillUpdateParams,
    type BillListParams as BillListParams,
    type BillDeleteParams as BillDeleteParams,
    type BillListAttachmentsParams as BillListAttachmentsParams,
    type BillListRulesParams as BillListRulesParams,
    type BillListTransactionsParams as BillListTransactionsParams,
  };
}
