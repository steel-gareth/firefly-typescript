// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * These endpoints deliver summaries, like sums, lists of numbers and other processed information. Mainly used for the main dashboard and pretty specific for Firefly III itself.
 */
export class Summary extends APIResource {
  /**
   * Returns basic sums of the users data, like the net worth, spent and earned
   * amounts. It is multi-currency, and is used in Firefly III to populate the
   * dashboard.
   *
   * @example
   * ```ts
   * const response = await client.summary.retrieveBasic({
   *   end: '2019-12-27',
   *   start: '2019-12-27',
   * });
   * ```
   */
  retrieveBasic(
    params: SummaryRetrieveBasicParams,
    options?: RequestOptions,
  ): APIPromise<SummaryRetrieveBasicResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/summary/basic', {
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

export type SummaryRetrieveBasicResponse = { [key: string]: SummaryRetrieveBasicResponse.item };

export namespace SummaryRetrieveBasicResponse {
  export interface item {
    currency_code?: string;

    /**
     * Number of decimals for the associated currency.
     */
    currency_decimal_places?: number;

    /**
     * The currency ID of the associated currency.
     */
    currency_id?: string;

    currency_symbol?: string;

    /**
     * This is a reference to the type of info shared, not influenced by translations
     * or user preferences. The EUR value is a reference to the currency code.
     * Possibilities are: balance-in-ABC, spent-in-ABC, earned-in-ABC,
     * bills-paid-in-ABC, bills-unpaid-in-ABC, left-to-spend-in-ABC and
     * net-worth-in-ABC.
     */
    key?: string;

    /**
     * Reference to a font-awesome icon without the fa- part.
     */
    local_icon?: string;

    /**
     * The amount as a float.
     */
    monetary_value?: number;

    /**
     * True if there are no available budgets available.
     */
    no_available_budgets?: boolean;

    /**
     * A short explanation of the amounts origin. Already formatted according to the
     * locale of the user or translated, if relevant.
     */
    sub_title?: string;

    /**
     * A translated title for the information shared.
     */
    title?: string;

    /**
     * The amount formatted according to the users locale
     */
    value_parsed?: string;
  }
}

export interface SummaryRetrieveBasicParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: A currency code like EUR or USD, to filter the result.
   */
  currency_code?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Summary {
  export {
    type SummaryRetrieveBasicResponse as SummaryRetrieveBasicResponse,
    type SummaryRetrieveBasicParams as SummaryRetrieveBasicParams,
  };
}
