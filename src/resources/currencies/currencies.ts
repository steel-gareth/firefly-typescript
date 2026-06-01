// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from '../accounts';
import * as AvailableBudgetsAPI from '../available-budgets';
import * as BillsAPI from '../bills';
import * as RecurrencesAPI from '../recurrences';
import * as LimitsAPI from '../budgets/limits';
import * as PrimaryAPI from './primary';
import { Primary, PrimaryMakePrimaryParams, PrimaryRetrieveParams } from './primary';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Endpoints to manage the currencies in Firefly III. Depending on the user&#039;s role you can also disable and enable them, or add new ones.
 */
export class Currencies extends APIResource {
  primary: PrimaryAPI.Primary = new PrimaryAPI.Primary(this._client);

  /**
   * Creates a new currency. The data required can be submitted as a JSON body or as
   * a list of parameters.
   *
   * @example
   * ```ts
   * const currencySingle = await client.currencies.create({
   *   code: 'AMS',
   *   name: 'Ankh-Morpork dollar',
   *   symbol: 'AM$',
   * });
   * ```
   */
  create(params: CurrencyCreateParams, options?: RequestOptions): APIPromise<CurrencySingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/currencies', {
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
   * Get a single currency.
   *
   * @example
   * ```ts
   * const currencySingle = await client.currencies.retrieve(
   *   'USD',
   * );
   * ```
   */
  retrieve(
    code: string,
    params: CurrencyRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencySingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}`, {
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
   * Update existing currency.
   *
   * @example
   * ```ts
   * const currencySingle = await client.currencies.update(
   *   'EUR',
   * );
   * ```
   */
  update(code: string, params: CurrencyUpdateParams, options?: RequestOptions): APIPromise<CurrencySingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/currencies/${code}`, {
      body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/vnd.api+json',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * List all currencies.
   *
   * @example
   * ```ts
   * const currencies = await client.currencies.list();
   * ```
   */
  list(
    params: CurrencyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencyListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/currencies', {
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
   * Delete a currency.
   *
   * @example
   * ```ts
   * await client.currencies.delete('GBP');
   * ```
   */
  delete(
    code: string,
    params: CurrencyDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/currencies/${code}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Disable a currency.
   *
   * @example
   * ```ts
   * const currencySingle = await client.currencies.disable(
   *   'GBP',
   * );
   * ```
   */
  disable(
    code: string,
    params: CurrencyDisableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencySingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post(path`/v1/currencies/${code}/disable`, {
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
   * Enable a single currency.
   *
   * @example
   * ```ts
   * const currencySingle = await client.currencies.enable(
   *   'USD',
   * );
   * ```
   */
  enable(
    code: string,
    params: CurrencyEnableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CurrencySingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post(path`/v1/currencies/${code}/enable`, {
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
   * List all accounts with this currency.
   *
   * @example
   * ```ts
   * const accountArray = await client.currencies.listAccounts(
   *   'USD',
   * );
   * ```
   */
  listAccounts(
    code: string,
    params: CurrencyListAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AccountArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}/accounts`, {
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
   * List all available budgets with this currency.
   *
   * @example
   * ```ts
   * const availableBudgetArray =
   *   await client.currencies.listAvailableBudgets('EUR');
   * ```
   */
  listAvailableBudgets(
    code: string,
    params: CurrencyListAvailableBudgetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AvailableBudgetsAPI.AvailableBudgetArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}/available-budgets`, {
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
   * List all bills with this currency.
   *
   * @example
   * ```ts
   * const billArray = await client.currencies.listBills('USD');
   * ```
   */
  listBills(
    code: string,
    params: CurrencyListBillsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillsAPI.BillArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}/bills`, {
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
   * List all budget limits with this currency
   *
   * @example
   * ```ts
   * const budgetLimitArray =
   *   await client.currencies.listBudgetLimits('USD');
   * ```
   */
  listBudgetLimits(
    code: string,
    params: CurrencyListBudgetLimitsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LimitsAPI.BudgetLimitArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}/budget-limits`, {
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
   * List all recurring transactions with this currency.
   *
   * @example
   * ```ts
   * const recurrenceArray =
   *   await client.currencies.listRecurrences('EUR');
   * ```
   */
  listRecurrences(
    code: string,
    params: CurrencyListRecurrencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RecurrencesAPI.RecurrenceArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}/recurrences`, {
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
   * List all rules with this currency.
   *
   * @example
   * ```ts
   * const ruleArray = await client.currencies.listRules('USD');
   * ```
   */
  listRules(
    code: string,
    params: CurrencyListRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillsAPI.RuleArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}/rules`, {
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
   * List all transactions with this currency.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.currencies.listTransactions('USD');
   * ```
   */
  listTransactions(
    code: string,
    params: CurrencyListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/currencies/${code}/transactions`, {
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

export interface CurrencyRead {
  id: string;

  attributes: CurrencyRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace CurrencyRead {
  export interface Attributes {
    code: string;

    name: string;

    symbol: string;

    created_at?: string;

    /**
     * Supports 0-16 decimals.
     */
    decimal_places?: number;

    /**
     * Defaults to true
     */
    enabled?: boolean;

    /**
     * Is the primary currency?
     */
    primary?: boolean;

    updated_at?: string;
  }
}

export interface CurrencySingle {
  data: CurrencyRead;
}

export interface CurrencyListResponse {
  data: Array<CurrencyRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface CurrencyCreateParams {
  /**
   * Body param
   */
  code: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  symbol: string;

  /**
   * Body param: Supports 0-16 decimals.
   */
  decimal_places?: number;

  /**
   * Body param: Defaults to true
   */
  enabled?: boolean;

  /**
   * Body param: Make this currency the primary currency for the current
   * administration. You can set this value to FALSE, in which case nothing will
   * change to the primary currency. If you set it to TRUE, the current primary
   * currency will no longer be the primary currency.
   */
  primary?: boolean;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CurrencyRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CurrencyUpdateParams {
  /**
   * Body param: The currency code
   */
  code?: string;

  /**
   * Body param: How many decimals to use when displaying this currency. Between 0
   * and 16.
   */
  decimal_places?: number;

  /**
   * Body param: If the currency is enabled
   */
  enabled?: boolean;

  /**
   * Body param: The currency name
   */
  name?: string;

  /**
   * Body param: If the currency must be the primary for the user. You can only
   * submit TRUE. Submitting FALSE will not drop this currency as the primary
   * currency, because then the system would be without one.
   */
  primary?: true;

  /**
   * Body param: The currency symbol
   */
  symbol?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CurrencyListParams {
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

export interface CurrencyDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CurrencyDisableParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CurrencyEnableParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CurrencyListAccountsParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. When added to the request, Firefly III
   * will show the account's balance on that day.
   */
  date?: string;

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

export interface CurrencyListAvailableBudgetsParams {
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

export interface CurrencyListBillsParams {
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

export interface CurrencyListBudgetLimitsParams {
  /**
   * Query param: End date for the budget limit list.
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
   * Query param: Start date for the budget limit list.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface CurrencyListRecurrencesParams {
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

export interface CurrencyListRulesParams {
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

export interface CurrencyListTransactionsParams {
  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the list of transactions.
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
   * Query param: A date formatted YYYY-MM-DD, to limit the list of transactions.
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

Currencies.Primary = Primary;

export declare namespace Currencies {
  export {
    type CurrencyRead as CurrencyRead,
    type CurrencySingle as CurrencySingle,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyRetrieveParams as CurrencyRetrieveParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
    type CurrencyListParams as CurrencyListParams,
    type CurrencyDeleteParams as CurrencyDeleteParams,
    type CurrencyDisableParams as CurrencyDisableParams,
    type CurrencyEnableParams as CurrencyEnableParams,
    type CurrencyListAccountsParams as CurrencyListAccountsParams,
    type CurrencyListAvailableBudgetsParams as CurrencyListAvailableBudgetsParams,
    type CurrencyListBillsParams as CurrencyListBillsParams,
    type CurrencyListBudgetLimitsParams as CurrencyListBudgetLimitsParams,
    type CurrencyListRecurrencesParams as CurrencyListRecurrencesParams,
    type CurrencyListRulesParams as CurrencyListRulesParams,
    type CurrencyListTransactionsParams as CurrencyListTransactionsParams,
  };

  export {
    Primary as Primary,
    type PrimaryRetrieveParams as PrimaryRetrieveParams,
    type PrimaryMakePrimaryParams as PrimaryMakePrimaryParams,
  };
}
