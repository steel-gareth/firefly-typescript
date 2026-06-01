// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AboutAPI from './about';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Use these endpoints to manage the users registered within Firefly III. You need to have the &quot;owner&quot; role to access these endpoints.
 */
export class Users extends APIResource {
  /**
   * Creates a new user. The data required can be submitted as a JSON body or as a
   * list of parameters. The user will be given a random password, which they can
   * reset using the "forgot password" function.
   *
   * @example
   * ```ts
   * const userSingle = await client.users.create({
   *   email: 'james@firefly-iii.org',
   * });
   * ```
   */
  create(params: UserCreateParams, options?: RequestOptions): APIPromise<AboutAPI.UserSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/users', {
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
   * Gets all info of a single user.
   *
   * @example
   * ```ts
   * const userSingle = await client.users.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AboutAPI.UserSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/users/${id}`, {
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
   * Update existing user.
   *
   * @example
   * ```ts
   * const userSingle = await client.users.update('123', {
   *   email: 'james@firefly-iii.org',
   * });
   * ```
   */
  update(id: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<AboutAPI.UserSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/users/${id}`, {
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
   * List all the users in this instance of Firefly III.
   *
   * @example
   * ```ts
   * const users = await client.users.list();
   * ```
   */
  list(
    params: UserListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/users', {
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
   * Delete a user. You cannot delete the user you're authenticated with. This cannot
   * be undone. Be careful.
   *
   * @example
   * ```ts
   * await client.users.delete('123');
   * ```
   */
  delete(
    id: string,
    params: UserDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/users/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface User {
  /**
   * The new users email address.
   */
  email: string;

  /**
   * Boolean to indicate if the user is blocked.
   */
  blocked?: boolean;

  /**
   * If you say the user must be blocked, this will be the reason code.
   */
  blocked_code?: 'email_changed' | null;

  created_at?: string;

  /**
   * Role for the user. Can be empty or omitted.
   */
  role?: 'owner' | 'demo' | null;

  updated_at?: string;
}

export interface UserListResponse {
  data: Array<AboutAPI.UserRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface UserCreateParams {
  /**
   * Body param: The new users email address.
   */
  email: string;

  /**
   * Body param: Boolean to indicate if the user is blocked.
   */
  blocked?: boolean;

  /**
   * Body param: If you say the user must be blocked, this will be the reason code.
   */
  blocked_code?: 'email_changed' | null;

  /**
   * Body param: Role for the user. Can be empty or omitted.
   */
  role?: 'owner' | 'demo' | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface UserRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface UserUpdateParams {
  /**
   * Body param: The new users email address.
   */
  email: string;

  /**
   * Body param: Boolean to indicate if the user is blocked.
   */
  blocked?: boolean;

  /**
   * Body param: If you say the user must be blocked, this will be the reason code.
   */
  blocked_code?: 'email_changed' | null;

  /**
   * Body param: Role for the user. Can be empty or omitted.
   */
  role?: 'owner' | 'demo' | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface UserListParams {
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

export interface UserDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
  };
}
