// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionsAPI from './transactions';
import * as AccountsAPI from './accounts';
import * as PiggyBanksAPI from './piggy-banks';
import * as TransactionJournalsAPI from './transaction-journals';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * The most-used endpoints in Firefly III, these endpoints are used to manage the user&#039;s transactions.
 */
export class Transactions extends APIResource {
  /**
   * Creates a new transaction. The data required can be submitted as a JSON body or
   * as a list of parameters.
   *
   * @example
   * ```ts
   * const transactionSingle = await client.transactions.create({
   *   transactions: [
   *     {
   *       amount: '123.45',
   *       date: '2026-04-01T00:00:00+00:00',
   *       description: 'Vegetables',
   *       type: 'withdrawal',
   *     },
   *   ],
   * });
   * ```
   */
  create(
    params: TransactionCreateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionJournalsAPI.TransactionSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/transactions', {
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
   * Get a single transaction.
   *
   * @example
   * ```ts
   * const transactionSingle =
   *   await client.transactions.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: TransactionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionJournalsAPI.TransactionSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/transactions/${id}`, {
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
   * Update an existing transaction.
   *
   * @example
   * ```ts
   * const transactionSingle = await client.transactions.update(
   *   '123',
   * );
   * ```
   */
  update(
    id: string,
    params: TransactionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionJournalsAPI.TransactionSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/transactions/${id}`, {
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
   * List all the user's transactions.
   *
   * @example
   * ```ts
   * const transactionArray = await client.transactions.list();
   * ```
   */
  list(
    params: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/transactions', {
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
   * Delete a transaction.
   *
   * @example
   * ```ts
   * await client.transactions.delete('123');
   * ```
   */
  delete(
    id: string,
    params: TransactionDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/transactions/${id}`, {
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
   *   await client.transactions.listAttachments('123');
   * ```
   */
  listAttachments(
    id: string,
    params: TransactionListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/transactions/${id}/attachments`, {
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
   * Lists all piggy bank events.
   *
   * @example
   * ```ts
   * const piggyBankEventArray =
   *   await client.transactions.listPiggyBankEvents('123');
   * ```
   */
  listPiggyBankEvents(
    id: string,
    params: TransactionListPiggyBankEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PiggyBanksAPI.PiggyBankEventArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/transactions/${id}/piggy-bank-events`, {
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

export type TransactionTypeProperty =
  | 'withdrawal'
  | 'deposit'
  | 'transfer'
  | 'reconciliation'
  | 'opening balance';

export interface TransactionCreateParams {
  /**
   * Body param
   */
  transactions: Array<TransactionCreateParams.Transaction>;

  /**
   * Body param: Whether or not to apply rules when submitting transaction.
   */
  apply_rules?: boolean;

  /**
   * Body param: Break if the submitted transaction exists already.
   */
  error_if_duplicate_hash?: boolean;

  /**
   * Body param: Whether or not to fire the webhooks that are related to this event.
   */
  fire_webhooks?: boolean;

  /**
   * Body param: Title of the transaction if it has been split in more than one
   * piece. Empty otherwise.
   */
  group_title?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace TransactionCreateParams {
  export interface Transaction {
    /**
     * Amount of the transaction.
     */
    amount: string;

    /**
     * Date of the transaction
     */
    date: string;

    /**
     * Description of the transaction.
     */
    description: string;

    type: TransactionsAPI.TransactionTypeProperty;

    /**
     * Optional. Use either this or the bill_name
     */
    bill_id?: string | null;

    /**
     * Optional. Use either this or the bill_id
     */
    bill_name?: string | null;

    book_date?: string | null;

    /**
     * The budget ID for this transaction.
     */
    budget_id?: string | null;

    /**
     * The name of the budget to be used. If the budget name is unknown, the ID will be
     * used or the value will be ignored.
     */
    budget_name?: string | null;

    /**
     * The category ID for this transaction.
     */
    category_id?: string | null;

    /**
     * The name of the category to be used. If the category is unknown, it will be
     * created. If the ID and the name point to different categories, the ID overrules
     * the name.
     */
    category_name?: string | null;

    /**
     * Currency code. Default is the source account's currency, or the user's financial
     * administration's primary currency. The value you submit may be overruled by the
     * source or destination account.
     */
    currency_code?: string | null;

    /**
     * Currency ID. Default is the source account's currency, or the user's financial
     * administration's currency. The value you submit may be overruled by the source
     * or destination account.
     */
    currency_id?: string | null;

    /**
     * ID of the destination account. For a deposit or a transfer, this must always be
     * an asset account. For withdrawals this must be an expense account.
     */
    destination_id?: string | null;

    /**
     * Name of the destination account. You can submit the name instead of the ID. For
     * everything except transfers, the account will be auto-generated if unknown, so
     * submitting a name is enough.
     */
    destination_name?: string | null;

    due_date?: string | null;

    /**
     * Reference to external ID in other systems.
     */
    external_id?: string | null;

    /**
     * External, custom URL for this transaction.
     */
    external_url?: string | null;

    /**
     * The amount in a foreign currency.
     */
    foreign_amount?: string | null;

    /**
     * Currency code of the foreign currency. Default is NULL. Can be used instead of
     * the foreign_currency_id, but this or the ID is required when submitting a
     * foreign amount.
     */
    foreign_currency_code?: string | null;

    /**
     * Currency ID of the foreign currency. Default is null. Is required when you
     * submit a foreign amount.
     */
    foreign_currency_id?: string | null;

    interest_date?: string | null;

    /**
     * Reference to internal reference of other systems.
     */
    internal_reference?: string | null;

    invoice_date?: string | null;

    notes?: string | null;

    /**
     * Order of this entry in the list of transactions.
     */
    order?: number | null;

    payment_date?: string | null;

    /**
     * Optional. Use either this or the piggy_bank_name
     */
    piggy_bank_id?: number | null;

    /**
     * Optional. Use either this or the piggy_bank_id
     */
    piggy_bank_name?: string | null;

    process_date?: string | null;

    /**
     * If the transaction has been reconciled already. When you set this, the amount
     * can no longer be edited by the user.
     */
    reconciled?: boolean;

    /**
     * SEPA Batch ID
     */
    sepa_batch_id?: string | null;

    /**
     * SEPA Clearing Code
     */
    sepa_cc?: string | null;

    /**
     * SEPA Creditor Identifier
     */
    sepa_ci?: string | null;

    /**
     * SEPA Country
     */
    sepa_country?: string | null;

    /**
     * SEPA end-to-end Identifier
     */
    sepa_ct_id?: string | null;

    /**
     * SEPA Opposing Account Identifier
     */
    sepa_ct_op?: string | null;

    /**
     * SEPA mandate identifier
     */
    sepa_db?: string | null;

    /**
     * SEPA External Purpose indicator
     */
    sepa_ep?: string | null;

    /**
     * ID of the source account. For a withdrawal or a transfer, this must always be an
     * asset account. For deposits, this must be a revenue account.
     */
    source_id?: string | null;

    /**
     * Name of the source account. For a withdrawal or a transfer, this must always be
     * an asset account. For deposits, this must be a revenue account. Can be used
     * instead of the source_id. If the transaction is a deposit, the source_name can
     * be filled in freely: the account will be created based on the name.
     */
    source_name?: string | null;

    /**
     * Array of tags.
     */
    tags?: Array<string> | null;
  }
}

export interface TransactionRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransactionUpdateParams {
  /**
   * Body param: Whether or not to apply rules when submitting transaction.
   */
  apply_rules?: boolean;

  /**
   * Body param: Whether or not to fire the webhooks that are related to this event.
   */
  fire_webhooks?: boolean;

  /**
   * Body param: Title of the transaction if it has been split in more than one
   * piece. Empty otherwise.
   */
  group_title?: string | null;

  /**
   * Body param
   */
  transactions?: Array<TransactionUpdateParams.Transaction>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace TransactionUpdateParams {
  export interface Transaction {
    /**
     * Amount of the transaction.
     */
    amount?: string;

    /**
     * Optional. Use either this or the bill_name
     */
    bill_id?: string | null;

    /**
     * Optional. Use either this or the bill_id
     */
    bill_name?: string | null;

    book_date?: string | null;

    /**
     * The budget ID for this transaction.
     */
    budget_id?: string | null;

    /**
     * The category ID for this transaction.
     */
    category_id?: string | null;

    /**
     * The name of the category to be used. If the category is unknown, it will be
     * created. If the ID and the name point to different categories, the ID overrules
     * the name.
     */
    category_name?: string | null;

    /**
     * Currency code. Default is the source account's currency, or the user's financial
     * administration's primary currency. Can be used instead of currency_id.
     */
    currency_code?: string | null;

    /**
     * Currency ID. Default is the source account's currency, or the user's financial
     * administration's primary currency. Can be used instead of currency_code.
     */
    currency_id?: string | null;

    /**
     * Date of the transaction
     */
    date?: string;

    /**
     * Description of the transaction.
     */
    description?: string;

    destination_iban?: string | null;

    /**
     * ID of the destination account. For a deposit or a transfer, this must always be
     * an asset account. For withdrawals this must be an expense account.
     */
    destination_id?: string | null;

    /**
     * Name of the destination account. You can submit the name instead of the ID. For
     * everything except transfers, the account will be auto-generated if unknown, so
     * submitting a name is enough.
     */
    destination_name?: string | null;

    due_date?: string | null;

    /**
     * Reference to external ID in other systems.
     */
    external_id?: string | null;

    /**
     * External, custom URL for this transaction.
     */
    external_url?: string | null;

    /**
     * The amount in a foreign currency.
     */
    foreign_amount?: string | null;

    /**
     * Currency code of the foreign currency. Default is NULL. Can be used instead of
     * the foreign_currency_id, but this or the ID is required when submitting a
     * foreign amount.
     */
    foreign_currency_code?: string | null;

    /**
     * Currency ID of the foreign currency. Default is null. Is required when you
     * submit a foreign amount.
     */
    foreign_currency_id?: string | null;

    interest_date?: string | null;

    /**
     * Reference to internal reference of other systems.
     */
    internal_reference?: string | null;

    invoice_date?: string | null;

    notes?: string | null;

    /**
     * Order of this entry in the list of transactions.
     */
    order?: number | null;

    payment_date?: string | null;

    process_date?: string | null;

    /**
     * If the transaction has been reconciled already. When you set this, the amount
     * can no longer be edited by the user.
     */
    reconciled?: boolean;

    /**
     * SEPA Batch ID
     */
    sepa_batch_id?: string | null;

    /**
     * SEPA Clearing Code
     */
    sepa_cc?: string | null;

    /**
     * SEPA Creditor Identifier
     */
    sepa_ci?: string | null;

    /**
     * SEPA Country
     */
    sepa_country?: string | null;

    /**
     * SEPA end-to-end Identifier
     */
    sepa_ct_id?: string | null;

    /**
     * SEPA Opposing Account Identifier
     */
    sepa_ct_op?: string | null;

    /**
     * SEPA mandate identifier
     */
    sepa_db?: string | null;

    /**
     * SEPA External Purpose indicator
     */
    sepa_ep?: string | null;

    source_iban?: string | null;

    /**
     * ID of the source account. For a withdrawal or a transfer, this must always be an
     * asset account. For deposits, this must be a revenue account.
     */
    source_id?: string | null;

    /**
     * Name of the source account. For a withdrawal or a transfer, this must always be
     * an asset account. For deposits, this must be a revenue account. Can be used
     * instead of the source_id. If the transaction is a deposit, the source_name can
     * be filled in freely: the account will be created based on the name.
     */
    source_name?: string | null;

    /**
     * Array of tags.
     */
    tags?: Array<string> | null;

    /**
     * Transaction journal ID of current transaction (split).
     */
    transaction_journal_id?: string;

    type?: TransactionsAPI.TransactionTypeProperty;
  }
}

export interface TransactionListParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. This is the end date of the selected
   * range (inclusive).
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
   * Query param: A date formatted YYYY-MM-DD. This is the start date of the selected
   * range (inclusive).
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

export interface TransactionDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransactionListAttachmentsParams {
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

export interface TransactionListPiggyBankEventsParams {
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

export declare namespace Transactions {
  export {
    type TransactionTypeProperty as TransactionTypeProperty,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionDeleteParams as TransactionDeleteParams,
    type TransactionListAttachmentsParams as TransactionListAttachmentsParams,
    type TransactionListPiggyBankEventsParams as TransactionListPiggyBankEventsParams,
  };
}
