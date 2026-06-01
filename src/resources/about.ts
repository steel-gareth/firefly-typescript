// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AttachmentsAPI from './attachments';
import * as UsersAPI from './users';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints deliver general system information, version- and meta information.
 */
export class About extends APIResource {
  /**
   * Returns general system information and versions of the (supporting) software.
   *
   * @example
   * ```ts
   * const response = await client.about.retrieveInfo();
   * ```
   */
  retrieveInfo(
    params: AboutRetrieveInfoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AboutRetrieveInfoResponse> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get('/v1/about', {
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns the currently authenticated user.
   *
   * @example
   * ```ts
   * const userSingle = await client.about.retrieveUser();
   * ```
   */
  retrieveUser(
    params: AboutRetrieveUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get('/v1/about/user', {
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

export interface UserRead {
  id: string;

  attributes: UsersAPI.User;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export interface UserSingle {
  data: UserRead;
}

export interface AboutRetrieveInfoResponse {
  data?: AboutRetrieveInfoResponse.Data;
}

export namespace AboutRetrieveInfoResponse {
  export interface Data {
    /**
     * Same value as the version field.
     */
    api_version?: string;

    driver?: string;

    os?: string;

    php_version?: string;

    version?: string;
  }
}

export interface AboutRetrieveInfoParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AboutRetrieveUserParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace About {
  export {
    type UserRead as UserRead,
    type UserSingle as UserSingle,
    type AboutRetrieveInfoResponse as AboutRetrieveInfoResponse,
    type AboutRetrieveInfoParams as AboutRetrieveInfoParams,
    type AboutRetrieveUserParams as AboutRetrieveUserParams,
  };
}
