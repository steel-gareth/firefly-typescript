// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AvailableBudgetsAPI from './available-budgets';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints to manage a user&#039;s categories and get information on transactions and other related objects.
 */
export class Categories extends APIResource {
  /**
   * Creates a new category. The data required can be submitted as a JSON body or as
   * a list of parameters.
   *
   * @example
   * ```ts
   * const categorySingle = await client.categories.create({
   *   name: 'Lunch',
   * });
   * ```
   */
  create(params: CategoryCreateParams, options?: RequestOptions): APIPromise<CategorySingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/categories', {
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
   * Get a single category.
   *
   * @example
   * ```ts
   * const categorySingle = await client.categories.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(
    id: string,
    params: CategoryRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategorySingle> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/categories/${id}`, {
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
   * Update existing category.
   *
   * @example
   * ```ts
   * const categorySingle = await client.categories.update(
   *   '123',
   *   { name: 'Lunch' },
   * );
   * ```
   */
  update(id: string, params: CategoryUpdateParams, options?: RequestOptions): APIPromise<CategorySingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/categories/${id}`, {
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
   * List all categories.
   *
   * @example
   * ```ts
   * const categories = await client.categories.list();
   * ```
   */
  list(
    params: CategoryListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/categories', {
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
   * Delete a category. Transactions will not be removed.
   *
   * @example
   * ```ts
   * await client.categories.delete('123');
   * ```
   */
  delete(
    id: string,
    params: CategoryDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/categories/${id}`, {
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
   * const attachmentArray =
   *   await client.categories.listAttachments('123');
   * ```
   */
  listAttachments(
    id: string,
    params: CategoryListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/categories/${id}/attachments`, {
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
   * List all transactions in a category, optionally limited to the date ranges
   * specified.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.categories.listTransactions('123');
   * ```
   */
  listTransactions(
    id: string,
    params: CategoryListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/categories/${id}/transactions`, {
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

export interface CategoryRead {
  id: string;

  attributes: CategoryRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace CategoryRead {
  export interface Attributes {
    name: string;

    created_at?: string;

    /**
     * Amount(s) earned in the currencies in the database for this category. ONLY
     * present when start and date are set.
     */
    earned?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    notes?: string | null;

    /**
     * This object never has its own currency setting, so this value is always false.
     */
    object_has_currency_setting?: boolean;

    /**
     * Amount(s) earned in the primary currency in the database for this category. ONLY
     * present when start and date are set.
     */
    pc_earned?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * Amount(s) spent in the primary currency in the database for this category. ONLY
     * present when start and date are set.
     */
    pc_spent?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * Amount(s) transferred in primary currency in the database for this category.
     * ONLY present when start and date are set.
     */
    pc_transferred?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * The currency code of the administration's primary currency.
     */
    primary_currency_code?: string;

    /**
     * The currency decimal places of the administration's primary currency.
     */
    primary_currency_decimal_places?: number;

    /**
     * The currency ID of the administration's primary currency.
     */
    primary_currency_id?: string;

    /**
     * The currency name of the administration's primary currency.
     */
    primary_currency_name?: string;

    /**
     * The currency symbol of the administration's primary currency.
     */
    primary_currency_symbol?: string;

    /**
     * Amount(s) spent in the currencies in the database for this category. ONLY
     * present when start and date are set.
     */
    spent?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    /**
     * Amount(s) transferred in the currencies in the database for this category. ONLY
     * present when start and date are set.
     */
    transferred?: Array<AvailableBudgetsAPI.ArrayEntryWithCurrencyAndSum>;

    updated_at?: string;
  }
}

export interface CategorySingle {
  data: CategoryRead;
}

export interface CategoryListResponse {
  data: Array<CategoryRead>;

  meta: AccountsAPI.Meta;
}

export interface CategoryCreateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CategoryRetrieveParams {
  /**
   * Query param: A date formatted YYYY-MM-DD, to show spent and earned info.
   */
  end?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD, to show spent and earned info.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CategoryUpdateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CategoryListParams {
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

export interface CategoryDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CategoryListAttachmentsParams {
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

export interface CategoryListTransactionsParams {
  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the result list.
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
   * Query param: A date formatted YYYY-MM-DD, to limit the result list.
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

export declare namespace Categories {
  export {
    type CategoryRead as CategoryRead,
    type CategorySingle as CategorySingle,
    type CategoryListResponse as CategoryListResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryRetrieveParams as CategoryRetrieveParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryListAttachmentsParams as CategoryListAttachmentsParams,
    type CategoryListTransactionsParams as CategoryListTransactionsParams,
  };
}
