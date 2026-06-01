// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RecurrencesAPI from './recurrences';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Use these endpoints to manage the user&#039;s recurring transactions, trigger the creation of transactions and manage the settings.
 */
export class Recurrences extends APIResource {
  /**
   * Creates a new recurring transaction. The data required can be submitted as a
   * JSON body or as a list of parameters.
   *
   * @example
   * ```ts
   * const recurrenceSingle = await client.recurrences.create({
   *   first_date: '2026-04-30',
   *   repeat_until: '2026-04-30',
   *   repetitions: [{ moment: '3', type: 'weekly' }],
   *   title: 'Rent',
   *   transactions: [
   *     {
   *       amount: '123.45',
   *       description: 'Rent for the current month',
   *       destination_id: '258',
   *       source_id: '913',
   *     },
   *   ],
   *   type: 'withdrawal',
   * });
   * ```
   */
  create(params: RecurrenceCreateParams, options?: RequestOptions): APIPromise<RecurrenceSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/recurrences', {
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
   * Get a single recurring transaction.
   *
   * @example
   * ```ts
   * const recurrenceSingle = await client.recurrences.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(
    id: string,
    params: RecurrenceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecurrenceSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/recurrences/${id}`, {
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
   * Update existing recurring transaction.
   *
   * @example
   * ```ts
   * const recurrenceSingle = await client.recurrences.update(
   *   '123',
   * );
   * ```
   */
  update(id: string, params: RecurrenceUpdateParams, options?: RequestOptions): APIPromise<RecurrenceSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/recurrences/${id}`, {
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
   * List all recurring transactions.
   *
   * @example
   * ```ts
   * const recurrenceArray = await client.recurrences.list();
   * ```
   */
  list(
    params: RecurrenceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecurrenceArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/recurrences', {
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
   * Delete a recurring transaction. Transactions created by the recurring
   * transaction will not be deleted.
   *
   * @example
   * ```ts
   * await client.recurrences.delete('123');
   * ```
   */
  delete(
    id: string,
    params: RecurrenceDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/recurrences/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List all transactions created by a recurring transaction, optionally limited to
   * the date ranges specified.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.recurrences.listTransactions('123');
   * ```
   */
  listTransactions(
    id: string,
    params: RecurrenceListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/recurrences/${id}/transactions`, {
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
   * Trigger the creation of a transaction for a specific recurring transaction. All
   * recurrences have a set of future occurrences. For those moments, you can trigger
   * the creation of the transaction. That means the transaction will be created NOW,
   * instead of on the indicated date. The transaction will be dated to _today_.
   *
   * So, if you recurring transaction that occurs every Monday, you can trigger the
   * creation of a transaction for Monday in two weeks, today. On that Monday two
   * weeks from now, no transaction will be created. Instead, the transaction is
   * created right now, and dated _today_.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.recurrences.triggerTransaction('123', {
   *     date: '2019-12-27',
   *   });
   * ```
   */
  triggerTransaction(
    id: string,
    params: RecurrenceTriggerTransactionParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { date, 'X-Trace-Id': xTraceID } = params;
    return this._client.post(path`/v1/recurrences/${id}/trigger`, {
      query: { date },
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

export type AccountTypeProperty =
  | 'Default account'
  | 'Cash account'
  | 'Asset account'
  | 'Expense account'
  | 'Revenue account'
  | 'Initial balance account'
  | 'Beneficiary account'
  | 'Import account'
  | 'Reconciliation account'
  | 'Loan'
  | 'Debt'
  | 'Mortgage';

export interface RecurrenceArray {
  data: Array<RecurrenceRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface RecurrenceRead {
  id: string;

  attributes: RecurrenceRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace RecurrenceRead {
  export interface Attributes {
    /**
     * If the recurrence is even active.
     */
    active?: boolean;

    /**
     * Whether or not to fire the rules after the creation of a transaction.
     */
    apply_rules?: boolean;

    created_at?: string;

    /**
     * Not to be confused with the description of the actual transaction(s) being
     * created.
     */
    description?: string;

    /**
     * First time the recurring transaction will fire. Must be after today.
     */
    first_date?: string;

    /**
     * Last time the recurring transaction has fired.
     */
    latest_date?: string | null;

    notes?: string | null;

    /**
     * Max number of created transactions. Use either this field or repeat_until.
     */
    nr_of_repetitions?: number | null;

    /**
     * Date until the recurring transaction can fire. Use either this field or
     * repetitions.
     */
    repeat_until?: string | null;

    repetitions?: Array<Attributes.Repetition>;

    title?: string;

    transactions?: Array<Attributes.Transaction>;

    type?: RecurrencesAPI.RecurrenceTransactionType;

    updated_at?: string;
  }

  export namespace Attributes {
    export interface Repetition {
      /**
       * Information that defined the type of repetition.
       *
       * - For 'daily', this is empty.
       * - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday).
       * - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is
       *   the week in the month, and the second number is the day in the week (between 1
       *   and 7). '2,3' means: the 2nd Wednesday of the month
       * - For 'monthly' it is the day of the month (1 - 31)
       * - For yearly, it is a full date, ie '2026-04-01'. The year you use does not
       *   matter.
       */
      moment: string;

      /**
       * The type of the repetition. ndom means: the n-th weekday of the month, where you
       * can also specify which day of the week.
       */
      type: RecurrencesAPI.RecurrenceRepetitionType;

      id?: string;

      created_at?: string;

      /**
       * Auto-generated repetition description.
       */
      description?: string;

      /**
       * Array of future dates when the repetition will apply to. Auto generated.
       */
      occurrences?: Array<string>;

      /**
       * How many occurrences to skip. 0 means skip nothing. 1 means every other.
       */
      skip?: number;

      updated_at?: string;

      /**
       * How to respond when the recurring transaction falls in the weekend. Possible
       * values:
       *
       * 1. Do nothing, just create it
       * 2. Create no transaction.
       * 3. Skip to the previous Friday.
       * 4. Skip to the next Monday.
       */
      weekend?: number;
    }

    export interface Transaction {
      /**
       * Amount of the transaction.
       */
      amount: string;

      description: string;

      id?: string;

      /**
       * The budget ID for this transaction.
       */
      budget_id?: string;

      /**
       * The name of the budget to be used. If the budget name is unknown, the ID will be
       * used or the value will be ignored.
       */
      budget_name?: string | null;

      /**
       * Category ID for this transaction.
       */
      category_id?: string;

      /**
       * Category name for this transaction.
       */
      category_name?: string;

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

      destination_iban?: string | null;

      /**
       * ID of the destination account. Submit either this or destination_name.
       */
      destination_id?: string;

      /**
       * Name of the destination account. Submit either this or destination_id.
       */
      destination_name?: string;

      destination_type?: RecurrencesAPI.AccountTypeProperty;

      /**
       * Foreign amount of the transaction.
       */
      foreign_amount?: string | null;

      foreign_currency_code?: string | null;

      /**
       * Number of decimals in the currency
       */
      foreign_currency_decimal_places?: number | null;

      foreign_currency_id?: string | null;

      foreign_currency_name?: string | null;

      foreign_currency_symbol?: string | null;

      /**
       * Indicates whether the object has a currency setting. If false, the object uses
       * the administration's primary currency.
       */
      object_has_currency_setting?: boolean;

      /**
       * Amount of the transaction in primary currency.
       */
      pc_amount?: string;

      /**
       * Foreign amount of the transaction.
       */
      pc_foreign_amount?: string | null;

      piggy_bank_id?: string | null;

      piggy_bank_name?: string | null;

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

      source_iban?: string | null;

      /**
       * ID of the source account. Submit either this or source_name.
       */
      source_id?: string;

      /**
       * Name of the source account. Submit either this or source_id.
       */
      source_name?: string;

      source_type?: RecurrencesAPI.AccountTypeProperty;

      subscription_id?: string | null;

      subscription_name?: string | null;

      /**
       * Array of tags.
       */
      tags?: Array<string> | null;
    }
  }
}

/**
 * The type of the repetition. ndom means: the n-th weekday of the month, where you
 * can also specify which day of the week.
 */
export type RecurrenceRepetitionType = 'daily' | 'weekly' | 'ndom' | 'monthly' | 'yearly';

export interface RecurrenceSingle {
  data: RecurrenceRead;
}

export type RecurrenceTransactionType = 'withdrawal' | 'transfer' | 'deposit';

export interface RecurrenceCreateParams {
  /**
   * Body param: First time the recurring transaction will fire. Must be after today.
   */
  first_date: string;

  /**
   * Body param: Date until the recurring transaction can fire. Use either this field
   * or repetitions.
   */
  repeat_until: string | null;

  /**
   * Body param
   */
  repetitions: Array<RecurrenceCreateParams.Repetition>;

  /**
   * Body param
   */
  title: string;

  /**
   * Body param
   */
  transactions: Array<RecurrenceCreateParams.Transaction>;

  /**
   * Body param
   */
  type: RecurrenceTransactionType;

  /**
   * Body param: If the recurrence is even active.
   */
  active?: boolean;

  /**
   * Body param: Whether or not to fire the rules after the creation of a
   * transaction.
   */
  apply_rules?: boolean;

  /**
   * Body param: Not to be confused with the description of the actual transaction(s)
   * being created.
   */
  description?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param: Max number of created transactions. Use either this field or
   * repeat_until.
   */
  nr_of_repetitions?: number | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace RecurrenceCreateParams {
  export interface Repetition {
    /**
     * Information that defined the type of repetition.
     *
     * - For 'daily', this is empty.
     * - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday).
     * - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is
     *   the week in the month, and the second number is the day in the week (between 1
     *   and 7). '2,3' means: the 2nd Wednesday of the month
     * - For 'monthly' it is the day of the month (1 - 31)
     * - For yearly, it is a full date, ie '2026-04-01'. The year you use does not
     *   matter.
     */
    moment: string;

    /**
     * The type of the repetition. ndom means: the n-th weekday of the month, where you
     * can also specify which day of the week.
     */
    type: RecurrencesAPI.RecurrenceRepetitionType;

    /**
     * How many occurrences to skip. 0 means skip nothing. 1 means every other.
     */
    skip?: number;

    /**
     * How to respond when the recurring transaction falls in the weekend. Possible
     * values:
     *
     * 1. Do nothing, just create it
     * 2. Create no transaction.
     * 3. Skip to the previous Friday.
     * 4. Skip to the next Monday.
     */
    weekend?: number;
  }

  export interface Transaction {
    /**
     * Amount of the transaction.
     */
    amount: string;

    description: string;

    /**
     * ID of the destination account.
     */
    destination_id: string;

    /**
     * ID of the source account.
     */
    source_id: string;

    /**
     * Optional.
     */
    bill_id?: string | null;

    /**
     * The budget ID for this transaction.
     */
    budget_id?: string;

    /**
     * Category ID for this transaction.
     */
    category_id?: string;

    /**
     * Submit either a currency_id or a currency_code.
     */
    currency_code?: string;

    /**
     * Submit either a currency_id or a currency_code.
     */
    currency_id?: string;

    /**
     * Foreign amount of the transaction.
     */
    foreign_amount?: string | null;

    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     */
    foreign_currency_code?: string | null;

    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     */
    foreign_currency_id?: string | null;

    /**
     * Optional.
     */
    piggy_bank_id?: string | null;

    /**
     * Array of tags.
     */
    tags?: Array<string> | null;
  }
}

export interface RecurrenceRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RecurrenceUpdateParams {
  /**
   * Body param: If the recurrence is even active.
   */
  active?: boolean;

  /**
   * Body param: Whether or not to fire the rules after the creation of a
   * transaction.
   */
  apply_rules?: boolean;

  /**
   * Body param: Not to be confused with the description of the actual transaction(s)
   * being created.
   */
  description?: string;

  /**
   * Body param: First time the recurring transaction will fire.
   */
  first_date?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param: Max number of created transactions. Use either this field or
   * repeat_until.
   */
  nr_of_repetitions?: number | null;

  /**
   * Body param: Date until when the recurring transaction can fire. After that date,
   * it's basically inactive. Use either this field or repetitions.
   */
  repeat_until?: string | null;

  /**
   * Body param
   */
  repetitions?: Array<RecurrenceUpdateParams.Repetition>;

  /**
   * Body param
   */
  title?: string;

  /**
   * Body param
   */
  transactions?: Array<RecurrenceUpdateParams.Transaction>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace RecurrenceUpdateParams {
  export interface Repetition {
    /**
     * Information that defined the type of repetition.
     *
     * - For 'daily', this is empty.
     * - For 'weekly', it is day of the week between 1 and 7 (Monday - Sunday).
     * - For 'ndom', it is '1,2' or '4,5' or something else, where the first number is
     *   the week in the month, and the second number is the day in the week (between 1
     *   and 7). '2,3' means: the 2nd Wednesday of the month
     * - For 'monthly' it is the day of the month (1 - 31)
     * - For yearly, it is a full date, ie '2026-04-01'. The year you use does not
     *   matter.
     */
    moment?: string;

    /**
     * How many occurrences to skip. 0 means skip nothing. 1 means every other.
     */
    skip?: number;

    /**
     * The type of the repetition. ndom means: the n-th weekday of the month, where you
     * can also specify which day of the week.
     */
    type?: RecurrencesAPI.RecurrenceRepetitionType;

    /**
     * How to respond when the recurring transaction falls in the weekend. Possible
     * values:
     *
     * 1. Do nothing, just create it
     * 2. Create no transaction.
     * 3. Skip to the previous Friday.
     * 4. Skip to the next Monday.
     */
    weekend?: number;
  }

  export interface Transaction {
    id: string;

    /**
     * Amount of the transaction.
     */
    amount?: string;

    /**
     * Optional.
     */
    bill_id?: string | null;

    /**
     * The budget ID for this transaction.
     */
    budget_id?: string;

    /**
     * Category ID for this transaction.
     */
    category_id?: string;

    /**
     * Submit either a currency_id or a currency_code.
     */
    currency_code?: string;

    /**
     * Submit either a currency_id or a currency_code.
     */
    currency_id?: string;

    description?: string;

    /**
     * ID of the destination account. Submit either this or destination_name.
     */
    destination_id?: string;

    /**
     * Foreign amount of the transaction.
     */
    foreign_amount?: string | null;

    /**
     * Submit either a foreign_currency_id or a foreign_currency_code, or neither.
     */
    foreign_currency_id?: string | null;

    piggy_bank_id?: string | null;

    /**
     * ID of the source account. Submit either this or source_name.
     */
    source_id?: string;

    /**
     * Array of tags.
     */
    tags?: Array<string> | null;
  }
}

export interface RecurrenceListParams {
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

export interface RecurrenceDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RecurrenceListTransactionsParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. Both the start and end date must be
   * present.
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
   * Query param: A date formatted YYYY-MM-DD. Both the start and end date must be
   * present.
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

export interface RecurrenceTriggerTransactionParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. This is the date for which you want
   * the recurrence to fire. You can take the date from the list of occurrences in
   * the recurring transaction.
   */
  date: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Recurrences {
  export {
    type AccountTypeProperty as AccountTypeProperty,
    type RecurrenceArray as RecurrenceArray,
    type RecurrenceRead as RecurrenceRead,
    type RecurrenceRepetitionType as RecurrenceRepetitionType,
    type RecurrenceSingle as RecurrenceSingle,
    type RecurrenceTransactionType as RecurrenceTransactionType,
    type RecurrenceCreateParams as RecurrenceCreateParams,
    type RecurrenceRetrieveParams as RecurrenceRetrieveParams,
    type RecurrenceUpdateParams as RecurrenceUpdateParams,
    type RecurrenceListParams as RecurrenceListParams,
    type RecurrenceDeleteParams as RecurrenceDeleteParams,
    type RecurrenceListTransactionsParams as RecurrenceListTransactionsParams,
    type RecurrenceTriggerTransactionParams as RecurrenceTriggerTransactionParams,
  };
}
