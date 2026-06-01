// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;data&quot;-endpoints manage generic Firefly III and user-specific data.
 */
export class Export extends APIResource {
  /**
   * This endpoint allows you to export your accounts from Firefly III into a file.
   * Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response = await client.data.export.exportAccounts();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportAccounts(
    params: ExportExportAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/accounts', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export your bills from Firefly III into a file.
   * Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response = await client.data.export.exportBills();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportBills(
    params: ExportExportBillsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/bills', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export your budgets and associated budget data from
   * Firefly III into a file. Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response = await client.data.export.exportBudgets();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportBudgets(
    params: ExportExportBudgetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/budgets', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export your categories from Firefly III into a file.
   * Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.export.exportCategories();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportCategories(
    params: ExportExportCategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/categories', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export your piggy banks from Firefly III into a
   * file. Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.export.exportPiggyBanks();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportPiggyBanks(
    params: ExportExportPiggyBanksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/piggy-banks', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export your recurring transactions from Firefly III
   * into a file. Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response = await client.data.export.exportRecurring();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportRecurring(
    params: ExportExportRecurringParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/recurring', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export your rules and rule groups from Firefly III
   * into a file. Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response = await client.data.export.exportRules();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportRules(
    params: ExportExportRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/rules', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export your tags from Firefly III into a file.
   * Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response = await client.data.export.exportTags();
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportTags(
    params: ExportExportTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/data/export/tags', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * This endpoint allows you to export transactions from Firefly III into a file.
   * Currently supports CSV exports only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.data.export.exportTransactions({
   *     end: '2019-12-27',
   *     start: '2019-12-27',
   *   });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  exportTransactions(params: ExportExportTransactionsParams, options?: RequestOptions): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get('/v1/data/export/transactions', {
      query,
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }
}

export type ExportFileFilter = 'csv';

export interface ExportExportAccountsParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportBillsParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportBudgetsParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportCategoriesParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportPiggyBanksParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportRecurringParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportRulesParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportTagsParams {
  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface ExportExportTransactionsParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  end: string;

  /**
   * Query param: A date formatted YYYY-MM-DD.
   */
  start: string;

  /**
   * Query param: Limit the export of transactions to these accounts only. Only asset
   * accounts will be accepted. Other types will be silently dropped.
   */
  accounts?: string;

  /**
   * Query param
   */
  type?: ExportFileFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Export {
  export {
    type ExportFileFilter as ExportFileFilter,
    type ExportExportAccountsParams as ExportExportAccountsParams,
    type ExportExportBillsParams as ExportExportBillsParams,
    type ExportExportBudgetsParams as ExportExportBudgetsParams,
    type ExportExportCategoriesParams as ExportExportCategoriesParams,
    type ExportExportPiggyBanksParams as ExportExportPiggyBanksParams,
    type ExportExportRecurringParams as ExportExportRecurringParams,
    type ExportExportRulesParams as ExportExportRulesParams,
    type ExportExportTagsParams as ExportExportTagsParams,
    type ExportExportTransactionsParams as ExportExportTransactionsParams,
  };
}
