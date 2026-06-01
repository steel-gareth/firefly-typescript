// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AttachmentsAPI from './attachments';
import * as RecurrencesAPI from './recurrences';
import * as TransactionLinksAPI from './transaction-links';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * The most-used endpoints in Firefly III, these endpoints are used to manage the user&#039;s transactions.
 */
export class TransactionJournals extends APIResource {
  /**
   * Get a single transaction by underlying journal (split).
   *
   * @example
   * ```ts
   * const transactionSingle =
   *   await client.transactionJournals.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: TransactionJournalRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/transaction-journals/${id}`, {
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
   * Delete an individual journal (split) from a transaction.
   *
   * @example
   * ```ts
   * await client.transactionJournals.delete('123');
   * ```
   */
  delete(
    id: string,
    params: TransactionJournalDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/transaction-journals/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Lists all the transaction links for an individual journal (a split). Don't use
   * the group ID, you need the actual underlying journal (the split).
   *
   * @example
   * ```ts
   * const transactionLinkArray =
   *   await client.transactionJournals.listLinks('123');
   * ```
   */
  listLinks(
    id: string,
    params: TransactionJournalListLinksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionLinksAPI.TransactionLinkArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/transaction-journals/${id}/links`, {
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

export interface TransactionRead {
  id: string;

  attributes: TransactionRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace TransactionRead {
  export interface Attributes {
    transactions: Array<Attributes.Transaction>;

    created_at?: string;

    /**
     * Title of the transaction if it has been split in more than one piece. Empty
     * otherwise.
     */
    group_title?: string | null;

    updated_at?: string;

    /**
     * User ID
     */
    user?: string;
  }

  export namespace Attributes {
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

      /**
       * ID of the destination account. For a deposit or a transfer, this must always be
       * an asset account. For withdrawals this must be an expense account.
       */
      destination_id: string | null;

      /**
       * ID of the source account. For a withdrawal or a transfer, this must always be an
       * asset account. For deposits, this must be a revenue account.
       */
      source_id: string | null;

      type: TransactionsAPI.TransactionTypeProperty;

      /**
       * The associated subscription ID for this transaction. `bill` refers to the OLD
       * name for subscriptions and this field will be removed.
       */
      bill_id?: string | null;

      /**
       * The associated subscription name for this transaction. `bill` refers to the OLD
       * name for subscriptions and this field will be removed.
       */
      bill_name?: string | null;

      book_date?: string | null;

      /**
       * The budget ID for this transaction.
       */
      budget_id?: string | null;

      /**
       * The name of the budget used.
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
       * Currency code for the currency of this transaction.
       */
      currency_code?: string;

      /**
       * Number of decimals used in this currency.
       */
      currency_decimal_places?: number;

      /**
       * Currency ID for the currency of this transaction.
       */
      currency_id?: string;

      /**
       * Currency name for the currency of this transaction.
       */
      currency_name?: string;

      /**
       * Currency symbol for the currency of this transaction.
       */
      currency_symbol?: string;

      /**
       * The balance of the destination account. This is the balance in the account's
       * currency which may be different from this transaction, and is not provided in
       * this model.
       */
      destination_balance_after?: string | null;

      destination_iban?: string | null;

      /**
       * Name of the destination account. You can submit the name instead of the ID. For
       * everything except transfers, the account will be auto-generated if unknown, so
       * submitting a name is enough.
       */
      destination_name?: string | null;

      destination_type?: RecurrencesAPI.AccountTypeProperty;

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
       * The amount in the set foreign currency. May be NULL if the transaction does not
       * have a foreign amount.
       */
      foreign_amount?: string | null;

      /**
       * Currency code of the foreign currency. Default is NULL.
       */
      foreign_currency_code?: string | null;

      /**
       * Number of decimals in the foreign currency.
       */
      foreign_currency_decimal_places?: number | null;

      /**
       * Currency ID of the foreign currency, if this transaction has a foreign amount.
       */
      foreign_currency_id?: string | null;

      foreign_currency_symbol?: string | null;

      /**
       * If the transaction has attachments.
       */
      has_attachments?: boolean;

      /**
       * Hash value of original import transaction (for duplicate detection).
       */
      import_hash_v2?: string | null;

      interest_date?: string | null;

      /**
       * Reference to internal reference of other systems.
       */
      internal_reference?: string | null;

      invoice_date?: string | null;

      /**
       * Latitude of the transaction's location, if applicable. Can be used to draw a
       * map.
       */
      latitude?: number | null;

      /**
       * Latitude of the transaction's location, if applicable. Can be used to draw a
       * map.
       */
      longitude?: number | null;

      notes?: string | null;

      /**
       * Indicates whether the transaction has a currency setting. For transactions this
       * is always true.
       */
      object_has_currency_setting?: boolean;

      /**
       * Order of this entry in the list of transactions.
       */
      order?: number | null;

      /**
       * System generated identifier for original creator of transaction.
       */
      original_source?: string | null;

      payment_date?: string | null;

      /**
       * Amount of the transaction in the primary currency of this administration. The
       * `primary_currency_*` fields reflect the currency used. This field is NULL if the
       * user does have 'convert to primary' set to true in their settings.
       */
      pc_amount?: string;

      /**
       * The balance of the destination account in the primary currency of this
       * administration. The `primary_currency_*` fields reflect the currency used. This
       * field is NULL if the user does have 'convert to primary' set to true in their
       * settings.
       */
      pc_destination_balance_after?: string | null;

      /**
       * Foreign amount of the transaction in the primary currency of this
       * administration. The `primary_currency_*` fields reflect the currency used. This
       * field is NULL if the user does have 'convert to primary' set to true in their
       * settings.
       */
      pc_foreign_amount?: string;

      /**
       * The balance of the source account in the primary currency of this
       * administration. The `primary_currency_*` fields reflect the currency used. This
       * field is NULL if the user does have 'convert to primary' set to true in their
       * settings.
       */
      pc_source_balance_after?: string | null;

      /**
       * Returns the primary currency code of the administration. This currency is used
       * as the currency for all `pc_*` amount and balance fields of this account.
       */
      primary_currency_code?: string | null;

      /**
       * See the other `primary_*` fields.
       */
      primary_currency_decimal_places?: number | null;

      /**
       * Returns the primary currency ID of the administration. This currency is used as
       * the currency for all `pc_*` amount and balance fields of this account.
       */
      primary_currency_id?: string | null;

      /**
       * See the other `primary_*` fields.
       */
      primary_currency_symbol?: string | null;

      process_date?: string | null;

      /**
       * If the transaction has been reconciled already. When you set this, the amount
       * can no longer be edited by the user.
       */
      reconciled?: boolean;

      /**
       * The # of the current transaction created under this recurrence.
       */
      recurrence_count?: number | null;

      /**
       * Reference to recurrence that made the transaction.
       */
      recurrence_id?: string | null;

      /**
       * Total number of transactions expected to be created by this recurrence
       * repetition. Will be 0 if infinite.
       */
      recurrence_total?: number | null;

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
       * The balance of the source account. This is the balance in the account's currency
       * which may be different from this transaction, and is not provided in this model.
       */
      source_balance_after?: string | null;

      source_iban?: string | null;

      /**
       * Name of the source account. For a withdrawal or a transfer, this must always be
       * an asset account. For deposits, this must be a revenue account. Can be used
       * instead of the source_id. If the transaction is a deposit, the source_name can
       * be filled in freely: the account will be created based on the name.
       */
      source_name?: string | null;

      source_type?: RecurrencesAPI.AccountTypeProperty;

      /**
       * The associated subscription ID for this transaction.
       */
      subscription_id?: string | null;

      /**
       * The associated subscription name for this transaction.
       */
      subscription_name?: string | null;

      /**
       * Array of tags.
       */
      tags?: Array<string> | null;

      /**
       * ID of the underlying transaction journal. Each transaction consists of a
       * transaction group (see the top ID) and one or more journals making up the splits
       * of the transaction.
       */
      transaction_journal_id?: string;

      /**
       * User ID
       */
      user?: string;

      /**
       * Zoom level for the map, if drawn. This to set the box right. Unfortunately this
       * is a proprietary value because each map provider has different zoom levels.
       */
      zoom_level?: number | null;
    }
  }
}

export interface TransactionSingle {
  data: TransactionRead;
}

export interface TransactionJournalRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransactionJournalDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransactionJournalListLinksParams {
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

export declare namespace TransactionJournals {
  export {
    type TransactionRead as TransactionRead,
    type TransactionSingle as TransactionSingle,
    type TransactionJournalRetrieveParams as TransactionJournalRetrieveParams,
    type TransactionJournalDeleteParams as TransactionJournalDeleteParams,
    type TransactionJournalListLinksParams as TransactionJournalListLinksParams,
  };
}
