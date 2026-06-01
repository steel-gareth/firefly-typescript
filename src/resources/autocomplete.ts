// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * Auto-complete endpoints show basic information about Firefly III models, like the name and maybe some amounts. They all support a search query and can be used to autocomplete data in forms. Autocomplete return values always have a &quot;name&quot;-field.
 */
export class Autocomplete extends APIResource {
  /**
   * Returns all accounts of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listAccounts();
   * ```
   */
  listAccounts(
    params: AutocompleteListAccountsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListAccountsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/accounts', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all bills of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const autocompleteBills =
   *   await client.autocomplete.listBills();
   * ```
   */
  listBills(
    params: AutocompleteListBillsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListBillsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/bills', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all budgets of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listBudgets();
   * ```
   */
  listBudgets(
    params: AutocompleteListBudgetsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListBudgetsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/budgets', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all categories of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listCategories();
   * ```
   */
  listCategories(
    params: AutocompleteListCategoriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListCategoriesResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/categories', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all currencies of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listCurrencies();
   * ```
   */
  listCurrencies(
    params: AutocompleteListCurrenciesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListCurrenciesResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/currencies', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all currencies of the user returned in a basic auto-complete array. This
   * endpoint is DEPRECATED and I suggest you DO NOT use it.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autocomplete.listCurrenciesWithCode();
   * ```
   */
  listCurrenciesWithCode(
    params: AutocompleteListCurrenciesWithCodeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListCurrenciesWithCodeResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/currencies-with-code', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all object groups of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autocomplete.listObjectGroups();
   * ```
   */
  listObjectGroups(
    params: AutocompleteListObjectGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListObjectGroupsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/object-groups', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all piggy banks of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listPiggyBanks();
   * ```
   */
  listPiggyBanks(
    params: AutocompleteListPiggyBanksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListPiggyBanksResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/piggy-banks', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all piggy banks of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autocomplete.listPiggyBanksWithBalance();
   * ```
   */
  listPiggyBanksWithBalance(
    params: AutocompleteListPiggyBanksWithBalanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListPiggyBanksWithBalanceResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/piggy-banks-with-balance', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all recurring transactions of the user returned in a basic auto-complete
   * array.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autocomplete.listRecurringTransactions();
   * ```
   */
  listRecurringTransactions(
    params: AutocompleteListRecurringTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListRecurringTransactionsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/recurring', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all rule groups of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listRuleGroups();
   * ```
   */
  listRuleGroups(
    params: AutocompleteListRuleGroupsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListRuleGroupsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/rule-groups', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all rules of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listRules();
   * ```
   */
  listRules(
    params: AutocompleteListRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListRulesResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/rules', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all subscriptions of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const autocompleteBills =
   *   await client.autocomplete.listSubscriptions();
   * ```
   */
  listSubscriptions(
    params: AutocompleteListSubscriptionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListSubscriptionsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/subscriptions', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all tags of the user returned in a basic auto-complete array.
   *
   * @example
   * ```ts
   * const response = await client.autocomplete.listTags();
   * ```
   */
  listTags(
    params: AutocompleteListTagsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListTagsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/tags', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all transaction types returned in a basic auto-complete array. English
   * only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autocomplete.listTransactionTypes();
   * ```
   */
  listTransactionTypes(
    params: AutocompleteListTransactionTypesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListTransactionTypesResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/transaction-types', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all transaction descriptions of the user returned in a basic
   * auto-complete array.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autocomplete.listTransactions();
   * ```
   */
  listTransactions(
    params: AutocompleteListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListTransactionsResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/transactions', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all transactions, complemented with their ID, of the user returned in a
   * basic auto-complete array. This endpoint is DEPRECATED and I suggest you DO NOT
   * use it.
   *
   * @example
   * ```ts
   * const response =
   *   await client.autocomplete.listTransactionsWithID();
   * ```
   */
  listTransactionsWithID(
    params: AutocompleteListTransactionsWithIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutocompleteListTransactionsWithIDResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/autocomplete/transactions-with-id', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface AutocompleteBill {
  id: string;

  /**
   * Name of the bill found by an auto-complete search.
   */
  name: string;

  /**
   * Is the bill active or not?
   */
  active?: boolean;
}

export type AutocompleteListAccountsResponse =
  Array<AutocompleteListAccountsResponse.AutocompleteListAccountsResponseItem>;

export namespace AutocompleteListAccountsResponse {
  export interface AutocompleteListAccountsResponseItem {
    id: string;

    /**
     * Currency code for the currency used by this account. If the user prefers amounts
     * converted to their primary currency, this primary currency is used instead.
     */
    currency_code: string;

    /**
     * Number of decimal places for the currency used by this account. If the user
     * prefers amounts converted to their primary currency, this primary currency is
     * used instead.
     */
    currency_decimal_places: number;

    /**
     * ID for the currency used by this account. If the user prefers amounts converted
     * to their primary currency, this primary currency is used instead.
     */
    currency_id: string;

    /**
     * Currency name for the currency used by this account. If the user prefers amounts
     * converted to their primary currency, this primary currency is used instead.
     */
    currency_name: string;

    /**
     * Currency symbol for the currency used by this account. If the user prefers
     * amounts converted to their primary currency, this primary currency is used
     * instead.
     */
    currency_symbol: string;

    /**
     * Name of the account found by an auto-complete search.
     */
    name: string;

    /**
     * Asset accounts and liabilities have a second field with the given date's account
     * balance in the account currency or primary currency.
     */
    name_with_balance: string;

    /**
     * Account type of the account found by the auto-complete search.
     */
    type: string;

    /**
     * Code for the currency used by this account. Even if "convertToPrimary" is on,
     * the account currency code is displayed here.
     */
    account_currency_code?: string;

    /**
     * Number of decimal places for the currency used by this account. Even if
     * "convertToPrimary" is on, the account currency code is displayed here.
     */
    account_currency_decimal_places?: number;

    /**
     * ID for the currency used by this account. Even if "convertToPrimary" is on, the
     * account currency ID is displayed here.
     */
    account_currency_id?: string;

    /**
     * Name for the currency used by this account. Even if "convertToPrimary" is on,
     * the account currency name is displayed here.
     */
    account_currency_name?: string;

    /**
     * Code for the currency used by this account. Even if "convertToPrimary" is on,
     * the account currency code is displayed here.
     */
    account_currency_symbol?: string;

    /**
     * Is the bill active or not?
     */
    active?: boolean;
  }
}

export type AutocompleteListBillsResponse = Array<AutocompleteBill>;

export type AutocompleteListBudgetsResponse =
  Array<AutocompleteListBudgetsResponse.AutocompleteListBudgetsResponseItem>;

export namespace AutocompleteListBudgetsResponse {
  export interface AutocompleteListBudgetsResponseItem {
    id: string;

    /**
     * Name of the budget found by an auto-complete search.
     */
    name: string;

    /**
     * Is the budget active or not?
     */
    active?: boolean;
  }
}

export type AutocompleteListCategoriesResponse =
  Array<AutocompleteListCategoriesResponse.AutocompleteListCategoriesResponseItem>;

export namespace AutocompleteListCategoriesResponse {
  export interface AutocompleteListCategoriesResponseItem {
    id: string;

    /**
     * Name of the category found by an auto-complete search.
     */
    name: string;
  }
}

export type AutocompleteListCurrenciesResponse =
  Array<AutocompleteListCurrenciesResponse.AutocompleteListCurrenciesResponseItem>;

export namespace AutocompleteListCurrenciesResponse {
  export interface AutocompleteListCurrenciesResponseItem {
    id: string;

    /**
     * Currency code.
     */
    code: string;

    decimal_places: number;

    /**
     * Currency name.
     */
    name: string;

    symbol: string;
  }
}

export type AutocompleteListCurrenciesWithCodeResponse =
  Array<AutocompleteListCurrenciesWithCodeResponse.AutocompleteListCurrenciesWithCodeResponseItem>;

export namespace AutocompleteListCurrenciesWithCodeResponse {
  export interface AutocompleteListCurrenciesWithCodeResponseItem {
    id: string;

    /**
     * Currency code.
     */
    code: string;

    decimal_places: number;

    /**
     * Currency name with the code between brackets.
     */
    name: string;

    symbol: string;
  }
}

export type AutocompleteListObjectGroupsResponse =
  Array<AutocompleteListObjectGroupsResponse.AutocompleteListObjectGroupsResponseItem>;

export namespace AutocompleteListObjectGroupsResponse {
  export interface AutocompleteListObjectGroupsResponseItem {
    id: string;

    /**
     * Title of the object group found by an auto-complete search.
     */
    name: string;

    /**
     * Title of the object group found by an auto-complete search.
     */
    title: string;
  }
}

export type AutocompleteListPiggyBanksResponse =
  Array<AutocompleteListPiggyBanksResponse.AutocompleteListPiggyBanksResponseItem>;

export namespace AutocompleteListPiggyBanksResponse {
  export interface AutocompleteListPiggyBanksResponseItem {
    id: string;

    /**
     * Name of the piggy bank found by an auto-complete search.
     */
    name: string;

    /**
     * Currency code for this piggy bank. This will always be the currency of the piggy
     * bank, never the user's primary currency.
     */
    currency_code?: string;

    /**
     * Number of decimal places for the currency used by this piggy bank. This will
     * always be the currency of the piggy bank, never the user's primary currency.
     */
    currency_decimal_places?: number;

    /**
     * Currency ID for this piggy bank. This will always be the currency of the piggy
     * bank, never the user's primary currency.
     */
    currency_id?: string;

    /**
     * Currency name for the currency used by this piggy bank. This will always be the
     * currency of the piggy bank, never the user's primary currency.
     */
    currency_name?: string;

    currency_symbol?: string;

    /**
     * The group ID of the group this object is part of. NULL if no group.
     */
    object_group_id?: string | null;

    /**
     * The name of the group. NULL if no group.
     */
    object_group_title?: string | null;
  }
}

export type AutocompleteListPiggyBanksWithBalanceResponse =
  Array<AutocompleteListPiggyBanksWithBalanceResponse.AutocompleteListPiggyBanksWithBalanceResponseItem>;

export namespace AutocompleteListPiggyBanksWithBalanceResponse {
  export interface AutocompleteListPiggyBanksWithBalanceResponseItem {
    id: string;

    /**
     * Name of the piggy bank found by an auto-complete search.
     */
    name: string;

    /**
     * Currency code for the currency used by this piggy bank. This will always be the
     * piggy bank's currency, never the primary currency.
     */
    currency_code?: string;

    /**
     * Currency decimal places for the currency used by this piggy bank. This will
     * always be the piggy bank's currency, never the primary currency.
     */
    currency_decimal_places?: number;

    /**
     * Currency ID for the currency used by this piggy bank. This will always be the
     * piggy bank's currency, never the primary currency.
     */
    currency_id?: string;

    /**
     * Currency symbol for the currency used by this piggy bank. This will always be
     * the piggy bank's currency, never the primary currency.
     */
    currency_symbol?: string;

    /**
     * Name of the piggy bank found by an auto-complete search, including the currently
     * saved amount and the target amount.
     */
    name_with_balance?: string;

    /**
     * The group ID of the group this object is part of. NULL if no group.
     */
    object_group_id?: string | null;

    /**
     * The name of the group. NULL if no group.
     */
    object_group_title?: string | null;
  }
}

export type AutocompleteListRecurringTransactionsResponse =
  Array<AutocompleteListRecurringTransactionsResponse.AutocompleteListRecurringTransactionsResponseItem>;

export namespace AutocompleteListRecurringTransactionsResponse {
  export interface AutocompleteListRecurringTransactionsResponseItem {
    id: string;

    /**
     * Name of the recurrence found by an auto-complete search.
     */
    name: string;

    /**
     * Is the recurring transaction active or not?
     */
    active?: boolean;

    /**
     * Description of the recurrence found by auto-complete.
     */
    description?: string;
  }
}

export type AutocompleteListRuleGroupsResponse =
  Array<AutocompleteListRuleGroupsResponse.AutocompleteListRuleGroupsResponseItem>;

export namespace AutocompleteListRuleGroupsResponse {
  export interface AutocompleteListRuleGroupsResponseItem {
    id: string;

    /**
     * Name of the rule group found by an auto-complete search.
     */
    name: string;

    /**
     * Is the bill active or not?
     */
    active?: boolean;

    /**
     * Description of the rule group found by auto-complete.
     */
    description?: string;
  }
}

export type AutocompleteListRulesResponse =
  Array<AutocompleteListRulesResponse.AutocompleteListRulesResponseItem>;

export namespace AutocompleteListRulesResponse {
  export interface AutocompleteListRulesResponseItem {
    id: string;

    /**
     * Name of the rule found by an auto-complete search.
     */
    name: string;

    /**
     * Is the bill active or not?
     */
    active?: boolean;

    /**
     * Description of the rule found by auto-complete.
     */
    description?: string;
  }
}

export type AutocompleteListSubscriptionsResponse = Array<AutocompleteBill>;

export type AutocompleteListTagsResponse =
  Array<AutocompleteListTagsResponse.AutocompleteListTagsResponseItem>;

export namespace AutocompleteListTagsResponse {
  export interface AutocompleteListTagsResponseItem {
    id: string;

    /**
     * Name of the tag found by an auto-complete search.
     */
    name: string;

    /**
     * Name of the tag found by an auto-complete search.
     */
    tag: string;
  }
}

export type AutocompleteListTransactionTypesResponse =
  Array<AutocompleteListTransactionTypesResponse.AutocompleteListTransactionTypesResponseItem>;

export namespace AutocompleteListTransactionTypesResponse {
  export interface AutocompleteListTransactionTypesResponseItem {
    id: string;

    /**
     * Type of the object found by an auto-complete search.
     */
    name: string;

    /**
     * Name of the object found by an auto-complete search.
     */
    type: string;
  }
}

export type AutocompleteListTransactionsResponse =
  Array<AutocompleteListTransactionsResponse.AutocompleteListTransactionsResponseItem>;

export namespace AutocompleteListTransactionsResponse {
  export interface AutocompleteListTransactionsResponseItem {
    /**
     * The ID of a transaction journal (basically a single split).
     */
    id: string;

    /**
     * Transaction description
     */
    description: string;

    /**
     * Transaction description
     */
    name: string;

    /**
     * The ID of the underlying transaction group.
     */
    transaction_group_id?: string;
  }
}

export type AutocompleteListTransactionsWithIDResponse =
  Array<AutocompleteListTransactionsWithIDResponse.AutocompleteListTransactionsWithIDResponseItem>;

export namespace AutocompleteListTransactionsWithIDResponse {
  export interface AutocompleteListTransactionsWithIDResponseItem {
    /**
     * The ID of a transaction journal (basically a single split).
     */
    id: string;

    /**
     * Transaction description with ID in the name.
     */
    description: string;

    /**
     * Transaction description with ID in the name.
     */
    name: string;

    /**
     * The ID of the underlying transaction group.
     */
    transaction_group_id?: string;
  }
}

export interface AutocompleteListAccountsParams {
  /**
   * Query param: If the account is an asset account or a liability, the autocomplete
   * will also return the balance of the account on this date.
   */
  date?: string;

  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Query param: Optional filter on the account type(s) used in the autocomplete.
   */
  types?: Array<AccountsAPI.AccountTypeFilter>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListBillsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListBudgetsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListCategoriesParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListCurrenciesParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListCurrenciesWithCodeParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListObjectGroupsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListPiggyBanksParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListPiggyBanksWithBalanceParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListRecurringTransactionsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListRuleGroupsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListRulesParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListSubscriptionsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListTagsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListTransactionTypesParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListTransactionsParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AutocompleteListTransactionsWithIDParams {
  /**
   * Query param: The number of items returned.
   */
  limit?: number;

  /**
   * Query param: The autocomplete search query.
   */
  query?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Autocomplete {
  export {
    type AutocompleteBill as AutocompleteBill,
    type AutocompleteListAccountsResponse as AutocompleteListAccountsResponse,
    type AutocompleteListBillsResponse as AutocompleteListBillsResponse,
    type AutocompleteListBudgetsResponse as AutocompleteListBudgetsResponse,
    type AutocompleteListCategoriesResponse as AutocompleteListCategoriesResponse,
    type AutocompleteListCurrenciesResponse as AutocompleteListCurrenciesResponse,
    type AutocompleteListCurrenciesWithCodeResponse as AutocompleteListCurrenciesWithCodeResponse,
    type AutocompleteListObjectGroupsResponse as AutocompleteListObjectGroupsResponse,
    type AutocompleteListPiggyBanksResponse as AutocompleteListPiggyBanksResponse,
    type AutocompleteListPiggyBanksWithBalanceResponse as AutocompleteListPiggyBanksWithBalanceResponse,
    type AutocompleteListRecurringTransactionsResponse as AutocompleteListRecurringTransactionsResponse,
    type AutocompleteListRuleGroupsResponse as AutocompleteListRuleGroupsResponse,
    type AutocompleteListRulesResponse as AutocompleteListRulesResponse,
    type AutocompleteListSubscriptionsResponse as AutocompleteListSubscriptionsResponse,
    type AutocompleteListTagsResponse as AutocompleteListTagsResponse,
    type AutocompleteListTransactionTypesResponse as AutocompleteListTransactionTypesResponse,
    type AutocompleteListTransactionsResponse as AutocompleteListTransactionsResponse,
    type AutocompleteListTransactionsWithIDResponse as AutocompleteListTransactionsWithIDResponse,
    type AutocompleteListAccountsParams as AutocompleteListAccountsParams,
    type AutocompleteListBillsParams as AutocompleteListBillsParams,
    type AutocompleteListBudgetsParams as AutocompleteListBudgetsParams,
    type AutocompleteListCategoriesParams as AutocompleteListCategoriesParams,
    type AutocompleteListCurrenciesParams as AutocompleteListCurrenciesParams,
    type AutocompleteListCurrenciesWithCodeParams as AutocompleteListCurrenciesWithCodeParams,
    type AutocompleteListObjectGroupsParams as AutocompleteListObjectGroupsParams,
    type AutocompleteListPiggyBanksParams as AutocompleteListPiggyBanksParams,
    type AutocompleteListPiggyBanksWithBalanceParams as AutocompleteListPiggyBanksWithBalanceParams,
    type AutocompleteListRecurringTransactionsParams as AutocompleteListRecurringTransactionsParams,
    type AutocompleteListRuleGroupsParams as AutocompleteListRuleGroupsParams,
    type AutocompleteListRulesParams as AutocompleteListRulesParams,
    type AutocompleteListSubscriptionsParams as AutocompleteListSubscriptionsParams,
    type AutocompleteListTagsParams as AutocompleteListTagsParams,
    type AutocompleteListTransactionTypesParams as AutocompleteListTransactionTypesParams,
    type AutocompleteListTransactionsParams as AutocompleteListTransactionsParams,
    type AutocompleteListTransactionsWithIDParams as AutocompleteListTransactionsWithIDParams,
  };
}
