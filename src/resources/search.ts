// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Endpoints that allow you to search through the user&#039;s financial data. Different from the autocomplete endpoints, the search accepts more advanced arguments.
 */
export class Search extends APIResource {
  /**
   * Search for accounts
   *
   * @example
   * ```ts
   * const accountArray = await client.search.accounts({
   *   field: 'all',
   *   query: 'checking',
   * });
   * ```
   */
  accounts(params: SearchAccountsParams, options?: RequestOptions): APIPromise<AccountsAPI.AccountArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/search/accounts', {
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
   * Searches through the users transactions.
   *
   * @example
   * ```ts
   * const transactionArray = await client.search.transactions({
   *   query: 'groceries',
   * });
   * ```
   */
  transactions(
    params: SearchTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/search/transactions', {
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

export interface SearchAccountsParams {
  /**
   * Query param: The account field(s) you want to search in.
   */
  field: 'all' | 'iban' | 'name' | 'number' | 'id';

  /**
   * Query param: The query you wish to search for.
   */
  query: string;

  /**
   * Query param: Number of items per page. The default pagination is per 50 items.
   */
  limit?: number;

  /**
   * Query param: Page number. The default pagination is per 50 items.
   */
  page?: number;

  /**
   * Query param
   */
  type?: AccountsAPI.AccountTypeFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface SearchTransactionsParams {
  /**
   * Query param: The query you wish to search for.
   */
  query: string;

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

export declare namespace Search {
  export {
    type SearchAccountsParams as SearchAccountsParams,
    type SearchTransactionsParams as SearchTransactionsParams,
  };
}
