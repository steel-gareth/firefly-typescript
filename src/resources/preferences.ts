// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as ConfigurationAPI from './configuration';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * These endpoints can be used to manage the user&#039;s preferences, including some hidden ones.
 */
export class Preferences extends APIResource {
  /**
   * This endpoint creates a new preference. The name and data are free-format, and
   * entirely up to you. If the preference is not used in Firefly III itself it may
   * not be configurable through the user interface, but you can use this endpoint to
   * persist custom data for your own app.
   *
   * @example
   * ```ts
   * const preferenceSingle = await client.preferences.create({
   *   data: true,
   *   name: 'currencyPreference',
   * });
   * ```
   */
  create(params: PreferenceCreateParams, options?: RequestOptions): APIPromise<PreferenceSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/preferences', {
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
   * Return a single preference and the value.
   *
   * @example
   * ```ts
   * const preferenceSingle = await client.preferences.retrieve(
   *   'currencyPreference',
   * );
   * ```
   */
  retrieve(
    name: string,
    params: PreferenceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferenceSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/preferences/${name}`, {
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
   * Update a user's preference.
   *
   * @example
   * ```ts
   * const preferenceSingle = await client.preferences.update(
   *   'currencyPreference',
   *   { data: true },
   * );
   * ```
   */
  update(
    name: string,
    params: PreferenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PreferenceSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/preferences/${name}`, {
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
   * List all of the preferences of the user.
   *
   * @example
   * ```ts
   * const preferences = await client.preferences.list();
   * ```
   */
  list(
    params: PreferenceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PreferenceListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/preferences', {
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

export interface Preference {
  data: ConfigurationAPI.PolymorphicProperty;

  name: string;

  created_at?: string;

  updated_at?: string;
}

export interface PreferenceRead {
  id: string;

  attributes: Preference;

  /**
   * Immutable value
   */
  type: string;
}

export interface PreferenceSingle {
  data: PreferenceRead;
}

export interface PreferenceListResponse {
  data: Array<PreferenceRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface PreferenceCreateParams {
  /**
   * Body param
   */
  data: ConfigurationAPI.PolymorphicProperty;

  /**
   * Body param
   */
  name: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface PreferenceRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface PreferenceUpdateParams {
  /**
   * Body param
   */
  data: ConfigurationAPI.PolymorphicProperty;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface PreferenceListParams {
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

export declare namespace Preferences {
  export {
    type Preference as Preference,
    type PreferenceRead as PreferenceRead,
    type PreferenceSingle as PreferenceSingle,
    type PreferenceListResponse as PreferenceListResponse,
    type PreferenceCreateParams as PreferenceCreateParams,
    type PreferenceRetrieveParams as PreferenceRetrieveParams,
    type PreferenceUpdateParams as PreferenceUpdateParams,
    type PreferenceListParams as PreferenceListParams,
  };
}
