// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints to manage links between transactions, and manage the type of links available.
 */
export class TransactionLinks extends APIResource {
  /**
   * Store a new link between two transactions. For this end point you need the
   * journal_id from a transaction.
   *
   * @example
   * ```ts
   * const transactionLinkSingle =
   *   await client.transactionLinks.create({
   *     inward_id: '131',
   *     link_type_id: '5',
   *     outward_id: '131',
   *   });
   * ```
   */
  create(params: TransactionLinkCreateParams, options?: RequestOptions): APIPromise<TransactionLinkSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/transaction-links', {
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
   * Returns a single link by its ID.
   *
   * @example
   * ```ts
   * const transactionLinkSingle =
   *   await client.transactionLinks.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: TransactionLinkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionLinkSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/transaction-links/${id}`, {
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
   * Used to update a single existing link.
   *
   * @example
   * ```ts
   * const transactionLinkSingle =
   *   await client.transactionLinks.update('123');
   * ```
   */
  update(
    id: string,
    params: TransactionLinkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionLinkSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/transaction-links/${id}`, {
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
   * List all the transaction links.
   *
   * @example
   * ```ts
   * const transactionLinkArray =
   *   await client.transactionLinks.list();
   * ```
   */
  list(
    params: TransactionLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionLinkArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/transaction-links', {
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
   * Will permanently delete link. Transactions remain.
   *
   * @example
   * ```ts
   * await client.transactionLinks.delete('123');
   * ```
   */
  delete(
    id: string,
    params: TransactionLinkDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/transaction-links/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface TransactionLinkArray {
  data: Array<TransactionLinkRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface TransactionLinkRead {
  id: string;

  attributes: TransactionLinkRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace TransactionLinkRead {
  export interface Attributes {
    /**
     * The inward transaction transaction_journal_id for the link. This becomes the 'is
     * paid by' transaction of the set.
     */
    inward_id: string;

    /**
     * The outward transaction transaction_journal_id for the link. This becomes the
     * 'pays for' transaction of the set.
     */
    outward_id: string;

    created_at?: string;

    /**
     * Optional. Some notes.
     */
    notes?: string | null;

    updated_at?: string;
  }
}

export interface TransactionLinkSingle {
  data: TransactionLinkRead;
}

export interface TransactionLinkCreateParams {
  /**
   * Body param: The inward transaction transaction_journal_id for the link. This
   * becomes the 'is paid by' transaction of the set.
   */
  inward_id: string;

  /**
   * Body param: The link type ID to use. You can also use the link_type_name field.
   */
  link_type_id: string;

  /**
   * Body param: The outward transaction transaction_journal_id for the link. This
   * becomes the 'pays for' transaction of the set.
   */
  outward_id: string;

  /**
   * Body param: The link type name to use. You can also use the link_type_id field.
   */
  link_type_name?: string;

  /**
   * Body param: Optional. Some notes.
   */
  notes?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransactionLinkRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransactionLinkUpdateParams {
  /**
   * Body param: The inward transaction transaction_journal_id for the link. This
   * becomes the 'is paid by' transaction of the set.
   */
  inward_id?: string;

  /**
   * Body param: The link type ID to use. Use this field OR use the link_type_name
   * field.
   */
  link_type_id?: string;

  /**
   * Body param: The link type name to use. Use this field OR use the link_type_id
   * field.
   */
  link_type_name?: string;

  /**
   * Body param: Optional. Some notes. If you submit an empty string the current
   * notes will be removed
   */
  notes?: string | null;

  /**
   * Body param: The outward transaction transaction_journal_id for the link. This
   * becomes the 'pays for' transaction of the set.
   */
  outward_id?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TransactionLinkListParams {
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

export interface TransactionLinkDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace TransactionLinks {
  export {
    type TransactionLinkArray as TransactionLinkArray,
    type TransactionLinkRead as TransactionLinkRead,
    type TransactionLinkSingle as TransactionLinkSingle,
    type TransactionLinkCreateParams as TransactionLinkCreateParams,
    type TransactionLinkRetrieveParams as TransactionLinkRetrieveParams,
    type TransactionLinkUpdateParams as TransactionLinkUpdateParams,
    type TransactionLinkListParams as TransactionLinkListParams,
    type TransactionLinkDeleteParams as TransactionLinkDeleteParams,
  };
}
