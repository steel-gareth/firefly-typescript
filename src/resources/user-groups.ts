// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * User groups are the objects around which &quot;financial administrations&quot; are built.
 */
export class UserGroups extends APIResource {
  /**
   * Returns a single user group by its ID.
   *
   * @example
   * ```ts
   * const userGroupSingle = await client.userGroups.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(
    id: string,
    params: UserGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserGroupSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/user-groups/${id}`, {
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
   * Used to update a single user group. The available fields are still limited.
   *
   * @example
   * ```ts
   * const userGroupSingle = await client.userGroups.update(
   *   '1',
   *   { title: 'New user group title' },
   * );
   * ```
   */
  update(id: string, params: UserGroupUpdateParams, options?: RequestOptions): APIPromise<UserGroupSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/user-groups/${id}`, {
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
   * List all the user groups available to this user. These are essentially the
   * 'financial administrations' that Firefly III supports.
   *
   * @example
   * ```ts
   * const userGroups = await client.userGroups.list();
   * ```
   */
  list(
    params: UserGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserGroupListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/user-groups', {
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

export interface UserGroupRead {
  id: string;

  attributes: UserGroupRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace UserGroupRead {
  export interface Attributes {
    /**
     * Can the current user see the members of this user group?
     */
    can_see_members?: boolean;

    created_at?: string;

    /**
     * Is this user group ('financial administration') currently the active
     * administration?
     */
    in_use?: boolean;

    members?: Array<Attributes.Member>;

    /**
     * Returns the primary currency code of the user group.
     */
    primary_currency_code?: string;

    /**
     * Returns the primary currency decimal places of the user group.
     */
    primary_currency_decimal_places?: number;

    /**
     * Returns the primary currency ID of the user group.
     */
    primary_currency_id?: string;

    /**
     * Returns the primary currency symbol of the user group.
     */
    primary_currency_symbol?: string;

    /**
     * Title of the user group. By default, it is the same as the user's email address.
     */
    title?: string;

    updated_at?: string;
  }

  export namespace Attributes {
    export interface Member {
      roles?: Array<
        | 'ro'
        | 'mng_trx'
        | 'mng_meta'
        | 'read_budgets'
        | 'read_piggies'
        | 'read_subscriptions'
        | 'read_rules'
        | 'read_recurring'
        | 'read_webhooks'
        | 'read_currencies'
        | 'mng_budgets'
        | 'mng_piggies'
        | 'mng_subscriptions'
        | 'mng_rules'
        | 'mng_recurring'
        | 'mng_webhooks'
        | 'mng_currencies'
        | 'view_reports'
        | 'view_memberships'
        | 'full'
        | 'owner'
      >;

      /**
       * The email address of the member
       */
      user_email?: string;

      /**
       * The ID of the member.
       */
      user_id?: string;

      /**
       * Is this you? (the current user)
       */
      you?: boolean;
    }
  }
}

export interface UserGroupSingle {
  data: UserGroupRead;
}

export interface UserGroupListResponse {
  data: Array<UserGroupRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface UserGroupRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface UserGroupUpdateParams {
  /**
   * Body param: A descriptive title for the user group.
   */
  title: string;

  /**
   * Body param: Use either primary_currency_id or primary_currency_code. This will
   * set the primary currency for the user group ('financial administration').
   */
  primary_currency_code?: string;

  /**
   * Body param: Use either primary_currency_id or primary_currency_code. This will
   * set the primary currency for the user group ('financial administration').
   */
  primary_currency_id?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface UserGroupListParams {
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

export declare namespace UserGroups {
  export {
    type UserGroupRead as UserGroupRead,
    type UserGroupSingle as UserGroupSingle,
    type UserGroupListResponse as UserGroupListResponse,
    type UserGroupRetrieveParams as UserGroupRetrieveParams,
    type UserGroupUpdateParams as UserGroupUpdateParams,
    type UserGroupListParams as UserGroupListParams,
  };
}
