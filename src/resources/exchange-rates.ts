// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * All currency exchange rates.
 */
export class ExchangeRates extends APIResource {
  /**
   * Stores a new exchange rate. The data required can be submitted as a JSON body or
   * as a list of parameters.
   *
   * @example
   * ```ts
   * const currencyExchangeRateSingle =
   *   await client.exchangeRates.create({
   *     date: '2026-04-01',
   *     from: 'USD',
   *     rates: {},
   *     to: 'EUR',
   *   });
   * ```
   */
  create(params: ExchangeRateCreateParams, options?: RequestOptions): APIPromise<CurrencyExchangeRateSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/exchange-rates', {
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
   * List a single specific exchange rate by its ID.
   *
   * @example
   * ```ts
   * const currencyExchangeRateSingle =
   *   await client.exchangeRates.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: ExchangeRateRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateSingle> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/exchange-rates/${id}`, {
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
   * Used to update a single currency exchange rate by its ID. Including the from/to
   * currency is optional.
   *
   * @example
   * ```ts
   * const currencyExchangeRateSingle =
   *   await client.exchangeRates.update('123', {
   *     date: '2026-04-01',
   *     rate: '2.3456',
   *   });
   * ```
   */
  update(
    id: string,
    params: ExchangeRateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/exchange-rates/${id}`, {
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
   * List exchange rates that Firefly III knows.
   *
   * @example
   * ```ts
   * const currencyExchangeRateArray =
   *   await client.exchangeRates.list();
   * ```
   */
  list(
    params: ExchangeRateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/exchange-rates', {
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
   * Delete a specific currency exchange rate by its internal ID.
   *
   * @example
   * ```ts
   * await client.exchangeRates.delete('123');
   * ```
   */
  delete(
    id: string,
    params: ExchangeRateDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/exchange-rates/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Stores a new set of exchange rates for this pair. The date is variable, and the
   * data required can be submitted as a JSON body.
   *
   * @example
   * ```ts
   * const currencyExchangeRateArray =
   *   await client.exchangeRates.createByCurrencies('USD', {
   *     from: 'EUR',
   *     body: {
   *       '2025-08-01': '1.2345',
   *       '2025-08-02': '6.3456',
   *     },
   *   });
   * ```
   */
  createByCurrencies(
    to: string,
    params: ExchangeRateCreateByCurrenciesParams,
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateArray> {
    const { from, body, 'X-Trace-Id': xTraceID } = params;
    return this._client.post(path`/v1/exchange-rates/by-currencies/${from}/${to}`, {
      body: body,
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
   * Stores a new set of exchange rates. The date is fixed (in the URL parameter) and
   * the data required can be submitted as a JSON body.
   *
   * @example
   * ```ts
   * const currencyExchangeRateArray =
   *   await client.exchangeRates.createByDate('2026-04-01', {
   *     date: {},
   *     from: 'EUR',
   *     rates: { USD: '1.2345', GBP: '6.3456' },
   *   });
   * ```
   */
  createByDate(
    date: string,
    params: ExchangeRateCreateByDateParams,
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateArray> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post(path`/v1/exchange-rates/by-date/${date}`, {
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
   * Deletes ALL currency exchange rates from 'from' to 'to'. It's important to know
   * that the reverse exchange rates (from 'to' to 'from') will not be deleted and
   * Firefly III will still be able to infer the correct exchange rate from the
   * reverse one.
   *
   * @example
   * ```ts
   * await client.exchangeRates.deleteAllByCurrencies('USD', {
   *   from: 'EUR',
   * });
   * ```
   */
  deleteAllByCurrencies(
    to: string,
    params: ExchangeRateDeleteAllByCurrenciesParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { from, 'X-Trace-Id': xTraceID } = params;
    return this._client.delete(path`/v1/exchange-rates/${from}/${to}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete the currency exchange rate from 'from' to 'to' on the specified date.
   * It's important to know that the reverse exchange rate (from 'to' to 'from') will
   * not be deleted and Firefly III will still be able to infer the correct exchange
   * rate from the reverse one.
   *
   * @example
   * ```ts
   * await client.exchangeRates.deleteByDate('2026-04-01', {
   *   from: 'EUR',
   *   to: 'USD',
   * });
   * ```
   */
  deleteByDate(
    date: string,
    params: ExchangeRateDeleteByDateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { from, to, 'X-Trace-Id': xTraceID } = params;
    return this._client.delete(path`/v1/exchange-rates/${from}/${to}/${date}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List all exchange rates from/to the mentioned currencies.
   *
   * @example
   * ```ts
   * const currencyExchangeRateArray =
   *   await client.exchangeRates.listByCurrencies('USD', {
   *     from: 'EUR',
   *   });
   * ```
   */
  listByCurrencies(
    to: string,
    params: ExchangeRateListByCurrenciesParams,
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateArray> {
    const { from, 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get(path`/v1/exchange-rates/${from}/${to}`, {
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
   * List the exchange rate for the from and to-currency on the requested date.
   *
   * @example
   * ```ts
   * const currencyExchangeRateArray =
   *   await client.exchangeRates.retrieveByDate('2026-04-01', {
   *     from: 'EUR',
   *     to: 'USD',
   *   });
   * ```
   */
  retrieveByDate(
    date: string,
    params: ExchangeRateRetrieveByDateParams,
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateArray> {
    const { from, to, 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get(path`/v1/exchange-rates/${from}/${to}/${date}`, {
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
   * Used to update a single currency exchange rate by its currency codes and date
   *
   * @example
   * ```ts
   * const currencyExchangeRateSingle =
   *   await client.exchangeRates.updateByDate('2026-04-01', {
   *     from: 'EUR',
   *     to: 'USD',
   *     rate: '2.3456',
   *   });
   * ```
   */
  updateByDate(
    date: string,
    params: ExchangeRateUpdateByDateParams,
    options?: RequestOptions,
  ): APIPromise<CurrencyExchangeRateSingle> {
    const { from, to, 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/exchange-rates/${from}/${to}/${date}`, {
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
}

export interface CurrencyExchangeRateArray {
  data: Array<CurrencyExchangeRateRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface CurrencyExchangeRateRead {
  id?: string;

  attributes?: CurrencyExchangeRateRead.Attributes;

  links?: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type?: string;
}

export namespace CurrencyExchangeRateRead {
  export interface Attributes {
    created_at?: string;

    /**
     * Date and time of the exchange rate.
     */
    date?: string;

    /**
     * Base currency code for this exchange rate entry.
     */
    from_currency_code?: string;

    /**
     * Base currency decimal places for this exchange rate entry.
     */
    from_currency_decimal_places?: number;

    /**
     * Base currency ID for this exchange rate entry.
     */
    from_currency_id?: string;

    /**
     * Base currency name for this exchange rate entry.
     */
    from_currency_name?: string;

    /**
     * Base currency symbol for this exchange rate entry.
     */
    from_currency_symbol?: string;

    /**
     * The actual exchange rate. How many 'to' currency will you get for 1 'from'
     * currency?
     */
    rate?: string;

    /**
     * Destination currency code for this exchange rate entry.
     */
    to_currency_code?: string;

    /**
     * Destination currency decimal places for this exchange rate entry.
     */
    to_currency_decimal_places?: number;

    /**
     * Destination currency ID for this exchange rate entry.
     */
    to_currency_id?: string;

    /**
     * Destination currency name for this exchange rate entry.
     */
    to_currency_name?: string;

    /**
     * Destination currency symbol for this exchange rate entry.
     */
    to_currency_symbol?: string;

    updated_at?: string;
  }
}

export interface CurrencyExchangeRateSingle {
  data: CurrencyExchangeRateRead;
}

export interface ExchangeRateCreateParams {
  /**
   * Body param: The date to which the exchange rate is applicable.
   */
  date: string;

  /**
   * Body param: The base currency code.
   */
  from: string;

  /**
   * Body param
   */
  rates: unknown;

  /**
   * Body param: The destination currency code.
   */
  to: string;

  /**
   * Body param: The exchange rate from the base currency to the destination
   * currency.
   */
  rate?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExchangeRateRetrieveParams {
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

export interface ExchangeRateUpdateParams {
  /**
   * Body param: The date to which the exchange rate is applicable.
   */
  date: string;

  /**
   * Body param: The exchange rate from the base currency to the destination
   * currency.
   */
  rate: string;

  /**
   * Body param: The base currency code.
   */
  from?: string | null;

  /**
   * Body param: The destination currency code.
   */
  to?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExchangeRateListParams {
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

export interface ExchangeRateDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExchangeRateCreateByCurrenciesParams {
  /**
   * Path param: The currency code of the 'from' currency.
   */
  from: string;

  /**
   * Body param: The actual entries for this data set. They 'key' value is the date
   * in YYYY-MM-DD. The value is the exchange rate.
   */
  body: { [key: string]: string };

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExchangeRateCreateByDateParams {
  /**
   * Body param
   */
  date: unknown;

  /**
   * Body param: The 'from'-currency
   */
  from: string;

  /**
   * Body param: The actual entries for this data set. They 'key' value is 'to'
   * currency. The value is the exchange rate.
   */
  rates: { [key: string]: string };

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExchangeRateDeleteAllByCurrenciesParams {
  /**
   * Path param: The currency code of the 'from' currency.
   */
  from: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExchangeRateDeleteByDateParams {
  /**
   * Path param: The currency code of the 'from' currency.
   */
  from: string;

  /**
   * Path param: The currency code of the 'to' currency.
   */
  to: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExchangeRateListByCurrenciesParams {
  /**
   * Path param: The currency code of the 'from' currency.
   */
  from: string;

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

export interface ExchangeRateRetrieveByDateParams {
  /**
   * Path param: The currency code of the 'from' currency.
   */
  from: string;

  /**
   * Path param: The currency code of the 'to' currency.
   */
  to: string;

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

export interface ExchangeRateUpdateByDateParams {
  /**
   * Path param: The currency code of the 'from' currency.
   */
  from: string;

  /**
   * Path param: The currency code of the 'to' currency.
   */
  to: string;

  /**
   * Body param: The exchange rate from the base currency to the destination
   * currency.
   */
  rate: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace ExchangeRates {
  export {
    type CurrencyExchangeRateArray as CurrencyExchangeRateArray,
    type CurrencyExchangeRateRead as CurrencyExchangeRateRead,
    type CurrencyExchangeRateSingle as CurrencyExchangeRateSingle,
    type ExchangeRateCreateParams as ExchangeRateCreateParams,
    type ExchangeRateRetrieveParams as ExchangeRateRetrieveParams,
    type ExchangeRateUpdateParams as ExchangeRateUpdateParams,
    type ExchangeRateListParams as ExchangeRateListParams,
    type ExchangeRateDeleteParams as ExchangeRateDeleteParams,
    type ExchangeRateCreateByCurrenciesParams as ExchangeRateCreateByCurrenciesParams,
    type ExchangeRateCreateByDateParams as ExchangeRateCreateByDateParams,
    type ExchangeRateDeleteAllByCurrenciesParams as ExchangeRateDeleteAllByCurrenciesParams,
    type ExchangeRateDeleteByDateParams as ExchangeRateDeleteByDateParams,
    type ExchangeRateListByCurrenciesParams as ExchangeRateListByCurrenciesParams,
    type ExchangeRateRetrieveByDateParams as ExchangeRateRetrieveByDateParams,
    type ExchangeRateUpdateByDateParams as ExchangeRateUpdateByDateParams,
  };
}
