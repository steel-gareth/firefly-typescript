// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * These endpoints allow you to manage and update the Firefly III configuration. You need to have the &quot;owner&quot; role to update configuration.
 */
export class ConfigurationResource extends APIResource {
  /**
   * Returns all editable and not-editable configuration values for this Firefly III
   * installation
   *
   * @example
   * ```ts
   * const configurations =
   *   await client.configuration.retrieve();
   * ```
   */
  retrieve(
    params: ConfigurationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigurationRetrieveResponse> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get('/v1/configuration', {
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns one configuration variable for this Firefly III installation
   *
   * @example
   * ```ts
   * const configurationSingle =
   *   await client.configuration.retrieveValue(
   *     'configuration.is_demo_site',
   *   );
   * ```
   */
  retrieveValue(
    name: ConfigValueFilter,
    params: ConfigurationRetrieveValueParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigurationSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/configuration/${name}`, {
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Set a single configuration value. Not all configuration values can be updated so
   * the list of accepted configuration variables is small.
   *
   * @example
   * ```ts
   * const configurationSingle =
   *   await client.configuration.updateValue(
   *     'configuration.is_demo_site',
   *     { value: true },
   *   );
   * ```
   */
  updateValue(
    name:
      | 'configuration.is_demo_site'
      | 'configuration.permission_update_check'
      | 'configuration.last_update_check'
      | 'configuration.single_user_mode'
      | 'configuration.enable_exchange_rates'
      | 'configuration.use_running_balance'
      | 'configuration.enable_external_map'
      | 'configuration.enable_external_rates'
      | 'configuration.allow_webhooks'
      | 'configuration.valid_url_protocols',
    params: ConfigurationUpdateValueParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/configuration/${name}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * Title of the configuration value.
 */
export type ConfigValueFilter =
  | 'configuration.is_demo_site'
  | 'configuration.permission_update_check'
  | 'configuration.last_update_check'
  | 'configuration.single_user_mode'
  | 'firefly.version'
  | 'firefly.default_location'
  | 'firefly.account_to_transaction'
  | 'firefly.allowed_opposing_types'
  | 'firefly.accountRoles'
  | 'firefly.valid_liabilities'
  | 'firefly.interest_periods'
  | 'firefly.enable_external_map'
  | 'firefly.expected_source_types'
  | 'app.timezone'
  | 'firefly.bill_periods'
  | 'firefly.credit_card_types'
  | 'firefly.languages'
  | 'firefly.valid_view_ranges'
  | 'cer.enabled'
  | 'firefly.preselected_accounts'
  | 'firefly.rule-actions'
  | 'firefly.context-rule-actions'
  | 'search.operators'
  | 'webhook.triggers'
  | 'webhook.responses'
  | 'webhook.deliveries';

export interface Configuration {
  /**
   * If this config variable can be edited by the user
   */
  editable: boolean;

  /**
   * Title of the configuration value.
   */
  title: ConfigValueFilter;

  value: PolymorphicProperty;
}

export interface ConfigurationSingle {
  data: Configuration;
}

export type PolymorphicProperty = boolean | string | { [key: string]: unknown } | Array<string>;

export type ConfigurationRetrieveResponse = Array<Configuration>;

export interface ConfigurationRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ConfigurationRetrieveValueParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ConfigurationUpdateValueParams {
  /**
   * Body param
   */
  value: PolymorphicProperty;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace ConfigurationResource {
  export {
    type ConfigValueFilter as ConfigValueFilter,
    type Configuration as Configuration,
    type ConfigurationSingle as ConfigurationSingle,
    type PolymorphicProperty as PolymorphicProperty,
    type ConfigurationRetrieveResponse as ConfigurationRetrieveResponse,
    type ConfigurationRetrieveParams as ConfigurationRetrieveParams,
    type ConfigurationRetrieveValueParams as ConfigurationRetrieveValueParams,
    type ConfigurationUpdateValueParams as ConfigurationUpdateValueParams,
  };
}
