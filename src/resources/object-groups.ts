// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as BillsAPI from './bills';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints to control and manage all of the user&#039;s object groups. Can only be created in conjunction with another object (for example a piggy bank) and will auto-delete when no other items are linked to it.
 */
export class ObjectGroups extends APIResource {
  /**
   * Get a single object group.
   *
   * @example
   * ```ts
   * const objectGroupSingle =
   *   await client.objectGroups.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: ObjectGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectGroupSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/object-groups/${id}`, {
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
   * Update existing object group.
   *
   * @example
   * ```ts
   * const objectGroupSingle = await client.objectGroups.update(
   *   '123',
   *   { title: 'My object group' },
   * );
   * ```
   */
  update(
    id: string,
    params: ObjectGroupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ObjectGroupSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/object-groups/${id}`, {
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
   * List all object groups.
   *
   * @example
   * ```ts
   * const objectGroups = await client.objectGroups.list();
   * ```
   */
  list(
    params: ObjectGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ObjectGroupListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/object-groups', {
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
   * Delete a object group.
   *
   * @example
   * ```ts
   * await client.objectGroups.delete('123');
   * ```
   */
  delete(
    id: string,
    params: ObjectGroupDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/object-groups/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List all bills with this object group.
   *
   * @example
   * ```ts
   * const billArray = await client.objectGroups.listBills(
   *   '123',
   * );
   * ```
   */
  listBills(
    id: string,
    params: ObjectGroupListBillsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillsAPI.BillArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/object-groups/${id}/bills`, {
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
   * This endpoint returns a list of all the piggy banks connected to the object
   * group.
   *
   * @example
   * ```ts
   * const piggyBankArray =
   *   await client.objectGroups.listPiggyBanks('123');
   * ```
   */
  listPiggyBanks(
    id: string,
    params: ObjectGroupListPiggyBanksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.PiggyBankArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/object-groups/${id}/piggy-banks`, {
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

export interface ObjectGroupRead {
  id: string;

  attributes: ObjectGroupRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace ObjectGroupRead {
  export interface Attributes {
    /**
     * Order of the object group
     */
    order: number;

    title: string;

    created_at?: string;

    updated_at?: string;
  }
}

export interface ObjectGroupSingle {
  data: ObjectGroupRead;
}

export interface ObjectGroupListResponse {
  data: Array<ObjectGroupRead>;

  meta: AccountsAPI.Meta;
}

export interface ObjectGroupRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ObjectGroupUpdateParams {
  /**
   * Body param
   */
  title: string;

  /**
   * Body param: Order of the object group
   */
  order?: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ObjectGroupListParams {
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

export interface ObjectGroupDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ObjectGroupListBillsParams {
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

export interface ObjectGroupListPiggyBanksParams {
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

export declare namespace ObjectGroups {
  export {
    type ObjectGroupRead as ObjectGroupRead,
    type ObjectGroupSingle as ObjectGroupSingle,
    type ObjectGroupListResponse as ObjectGroupListResponse,
    type ObjectGroupRetrieveParams as ObjectGroupRetrieveParams,
    type ObjectGroupUpdateParams as ObjectGroupUpdateParams,
    type ObjectGroupListParams as ObjectGroupListParams,
    type ObjectGroupDeleteParams as ObjectGroupDeleteParams,
    type ObjectGroupListBillsParams as ObjectGroupListBillsParams,
    type ObjectGroupListPiggyBanksParams as ObjectGroupListPiggyBanksParams,
  };
}
