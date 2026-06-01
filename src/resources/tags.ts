// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * This endpoint manages all of the user&#039;s tags.
 */
export class Tags extends APIResource {
  /**
   * Creates a new tag. The data required can be submitted as a JSON body or as a
   * list of parameters.
   *
   * @example
   * ```ts
   * const tagSingle = await client.tags.create({
   *   tag: 'expensive',
   * });
   * ```
   */
  create(params: TagCreateParams, options?: RequestOptions): APIPromise<TagSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/tags', {
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
   * Get a single tag.
   *
   * @example
   * ```ts
   * const tagSingle = await client.tags.retrieve('groceries');
   * ```
   */
  retrieve(
    tag: string,
    params: TagRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TagSingle> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/tags/${tag}`, {
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
   * Update existing tag.
   *
   * @example
   * ```ts
   * const tagSingle = await client.tags.update('groceries');
   * ```
   */
  update(tag: string, params: TagUpdateParams, options?: RequestOptions): APIPromise<TagSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/tags/${tag}`, {
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
   * List all of the user's tags.
   *
   * @example
   * ```ts
   * const tags = await client.tags.list();
   * ```
   */
  list(params: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/tags', {
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
   * Delete an tag.
   *
   * @example
   * ```ts
   * await client.tags.delete('groceries');
   * ```
   */
  delete(
    tag: string,
    params: TagDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/tags/${tag}`, {
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
   * const attachmentArray = await client.tags.listAttachments(
   *   'groceries',
   * );
   * ```
   */
  listAttachments(
    tag: string,
    params: TagListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/tags/${tag}/attachments`, {
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
   * List all transactions with this tag.
   *
   * @example
   * ```ts
   * const transactionArray = await client.tags.listTransactions(
   *   'groceries',
   * );
   * ```
   */
  listTransactions(
    tag: string,
    params: TagListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/tags/${tag}/transactions`, {
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

export interface TagRead {
  id: string;

  attributes: TagRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace TagRead {
  export interface Attributes {
    /**
     * The tag
     */
    tag: string;

    created_at?: string;

    /**
     * The date to which the tag is applicable.
     */
    date?: string | null;

    description?: string | null;

    /**
     * Latitude of the tag's location, if applicable. Can be used to draw a map.
     */
    latitude?: number | null;

    /**
     * Latitude of the tag's location, if applicable. Can be used to draw a map.
     */
    longitude?: number | null;

    updated_at?: string;

    /**
     * Zoom level for the map, if drawn. This to set the box right. Unfortunately this
     * is a proprietary value because each map provider has different zoom levels.
     */
    zoom_level?: number | null;
  }
}

export interface TagSingle {
  data: TagRead;
}

export interface TagListResponse {
  data: Array<TagRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface TagCreateParams {
  /**
   * Body param: The tag
   */
  tag: string;

  /**
   * Body param: The date to which the tag is applicable.
   */
  date?: string | null;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Latitude of the tag's location, if applicable. Can be used to draw a
   * map.
   */
  latitude?: number | null;

  /**
   * Body param: Latitude of the tag's location, if applicable. Can be used to draw a
   * map.
   */
  longitude?: number | null;

  /**
   * Body param: Zoom level for the map, if drawn. This to set the box right.
   * Unfortunately this is a proprietary value because each map provider has
   * different zoom levels.
   */
  zoom_level?: number | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TagRetrieveParams {
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

export interface TagUpdateParams {
  /**
   * Body param: The date to which the tag is applicable.
   */
  date?: string | null;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Latitude of the tag's location, if applicable. Can be used to draw a
   * map.
   */
  latitude?: number | null;

  /**
   * Body param: Latitude of the tag's location, if applicable. Can be used to draw a
   * map.
   */
  longitude?: number | null;

  /**
   * Body param: The tag
   */
  tag?: string;

  /**
   * Body param: Zoom level for the map, if drawn. This to set the box right.
   * Unfortunately this is a proprietary value because each map provider has
   * different zoom levels.
   */
  zoom_level?: number | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TagListParams {
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

export interface TagDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface TagListAttachmentsParams {
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

export interface TagListTransactionsParams {
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

export declare namespace Tags {
  export {
    type TagRead as TagRead,
    type TagSingle as TagSingle,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagRetrieveParams as TagRetrieveParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagListAttachmentsParams as TagListAttachmentsParams,
    type TagListTransactionsParams as TagListTransactionsParams,
  };
}
