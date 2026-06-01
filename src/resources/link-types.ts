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
export class LinkTypes extends APIResource {
  /**
   * Creates a new link type. The data required can be submitted as a JSON body or as
   * a list of parameters (in key=value pairs, like a webform).
   *
   * @example
   * ```ts
   * const linkTypeSingle = await client.linkTypes.create({
   *   inward: 'is (partially) paid for by',
   *   name: 'Paid',
   *   outward: '(partially) pays for',
   * });
   * ```
   */
  create(params: LinkTypeCreateParams, options?: RequestOptions): APIPromise<LinkTypeSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/link-types', {
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
   * Returns a single link type by its ID.
   *
   * @example
   * ```ts
   * const linkTypeSingle = await client.linkTypes.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(
    id: string,
    params: LinkTypeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkTypeSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/link-types/${id}`, {
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
   * Used to update a single link type. All fields that are not submitted will be
   * cleared (set to NULL). The model will tell you which fields are mandatory. You
   * cannot update some of the system provided link types, indicated by the
   * editable=false flag when you list it.
   *
   * @example
   * ```ts
   * const linkTypeSingle = await client.linkTypes.update('123');
   * ```
   */
  update(id: string, params: LinkTypeUpdateParams, options?: RequestOptions): APIPromise<LinkTypeSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/link-types/${id}`, {
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
   * List all the link types the system has. These include the default ones as well
   * as any new ones.
   *
   * @example
   * ```ts
   * const linkTypes = await client.linkTypes.list();
   * ```
   */
  list(
    params: LinkTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LinkTypeListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/link-types', {
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
   * Will permanently delete a link type. The links between transactions will be
   * removed. The transactions themselves remain. You cannot delete some of the
   * system provided link types, indicated by the editable=false flag when you list
   * it.
   *
   * @example
   * ```ts
   * await client.linkTypes.delete('123');
   * ```
   */
  delete(
    id: string,
    params: LinkTypeDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/link-types/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List all transactions under this link type, both the inward and outward
   * transactions.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.linkTypes.listTransactions('123');
   * ```
   */
  listTransactions(
    id: string,
    params: LinkTypeListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/link-types/${id}/transactions`, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface LinkType {
  inward: string;

  name: string;

  outward: string;

  editable?: boolean;
}

export interface LinkTypeRead {
  id: string;

  attributes: LinkType;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export interface LinkTypeSingle {
  data: LinkTypeRead;
}

export interface LinkTypeListResponse {
  data: Array<LinkTypeRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface LinkTypeCreateParams {
  /**
   * Body param
   */
  inward: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  outward: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LinkTypeRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LinkTypeUpdateParams {
  /**
   * Body param
   */
  inward?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  outward?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LinkTypeListParams {
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

export interface LinkTypeDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface LinkTypeListTransactionsParams {
  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the results.
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
   * Query param: A date formatted YYYY-MM-DD, to limit the results.
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

export declare namespace LinkTypes {
  export {
    type LinkType as LinkType,
    type LinkTypeRead as LinkTypeRead,
    type LinkTypeSingle as LinkTypeSingle,
    type LinkTypeListResponse as LinkTypeListResponse,
    type LinkTypeCreateParams as LinkTypeCreateParams,
    type LinkTypeRetrieveParams as LinkTypeRetrieveParams,
    type LinkTypeUpdateParams as LinkTypeUpdateParams,
    type LinkTypeListParams as LinkTypeListParams,
    type LinkTypeDeleteParams as LinkTypeDeleteParams,
    type LinkTypeListTransactionsParams as LinkTypeListTransactionsParams,
  };
}
