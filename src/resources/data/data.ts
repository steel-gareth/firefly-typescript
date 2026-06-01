// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BulkAPI from './bulk';
import { Bulk, BulkUpdateTransactionsParams } from './bulk';
import * as ExportAPI from './export';
import {
  Export,
  ExportExportAccountsParams,
  ExportExportBillsParams,
  ExportExportBudgetsParams,
  ExportExportCategoriesParams,
  ExportExportPiggyBanksParams,
  ExportExportRecurringParams,
  ExportExportRulesParams,
  ExportExportTagsParams,
  ExportExportTransactionsParams,
  ExportFileFilter,
} from './export';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * The &quot;data&quot;-endpoints manage generic Firefly III and user-specific data.
 */
export class Data extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);
  export: ExportAPI.Export = new ExportAPI.Export(this._client);

  /**
   * A call to this endpoint deletes the requested data type. Use it with care and
   * always with user permission. The demo user is incapable of using this endpoint.
   *
   * @example
   * ```ts
   * await client.data.destroy({
   *   objects: 'not_assets_liabilities',
   * });
   * ```
   */
  destroy(params: DataDestroyParams, options?: RequestOptions): APIPromise<void> {
    const { objects, 'X-Trace-Id': xTraceID } = params;
    return this._client.delete('/v1/data/destroy', {
      query: { objects },
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * A call to this endpoint purges all previously deleted data. Use it with care and
   * always with user permission. The demo user is incapable of using this endpoint.
   *
   * @example
   * ```ts
   * await client.data.purge();
   * ```
   */
  purge(params: DataPurgeParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete('/v1/data/purge', {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface DataDestroyParams {
  /**
   * Query param: The type of data that you wish to destroy. You can only use one at
   * a time.
   */
  objects:
    | 'not_assets_liabilities'
    | 'budgets'
    | 'bills'
    | 'piggy_banks'
    | 'rules'
    | 'recurring'
    | 'categories'
    | 'tags'
    | 'object_groups'
    | 'accounts'
    | 'asset_accounts'
    | 'expense_accounts'
    | 'revenue_accounts'
    | 'liabilities'
    | 'transactions'
    | 'withdrawals'
    | 'deposits'
    | 'transfers';

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface DataPurgeParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

Data.Bulk = Bulk;
Data.Export = Export;

export declare namespace Data {
  export { type DataDestroyParams as DataDestroyParams, type DataPurgeParams as DataPurgeParams };

  export { Bulk as Bulk, type BulkUpdateTransactionsParams as BulkUpdateTransactionsParams };

  export {
    Export as Export,
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
