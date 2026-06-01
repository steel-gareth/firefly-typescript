// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import * as PiggyBanksAPI from './piggy-banks';
import * as TransactionJournalsAPI from './transaction-journals';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints that deliver all of the user&#039;s asset, expense and other accounts (and the metadata) together with related transactions, piggy banks and other objects. Also delivers endpoints for CRUD operations for accounts.
 */
export class Accounts extends APIResource {
  /**
   * Creates a new account. The data required can be submitted as a JSON body or as a
   * list of parameters (in key=value pairs, like a webform).
   *
   * @example
   * ```ts
   * const accountSingle = await client.accounts.create({
   *   name: 'My checking account',
   *   type: 'asset',
   * });
   * ```
   */
  create(params: AccountCreateParams, options?: RequestOptions): APIPromise<AccountSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/accounts', {
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
   * Returns a single account by its ID.
   *
   * @example
   * ```ts
   * const accountSingle = await client.accounts.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: AccountRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountSingle> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/accounts/${id}`, {
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
   * Used to update a single account. All fields that are not submitted will be
   * cleared (set to NULL). The model will tell you which fields are mandatory.
   *
   * @example
   * ```ts
   * const accountSingle = await client.accounts.update('123', {
   *   name: 'My checking account',
   *   type: {},
   * });
   * ```
   */
  update(id: string, params: AccountUpdateParams, options?: RequestOptions): APIPromise<AccountSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/accounts/${id}`, {
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
   * This endpoint returns a list of all the accounts owned by the authenticated
   * user.
   *
   * @example
   * ```ts
   * const accountArray = await client.accounts.list();
   * ```
   */
  list(
    params: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/accounts', {
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
   * Will permanently delete an account. Any associated transactions and piggy banks
   * are ALSO deleted. Cannot be recovered from.
   *
   * @example
   * ```ts
   * await client.accounts.delete('123');
   * ```
   */
  delete(
    id: string,
    params: AccountDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/accounts/${id}`, {
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
   *   await client.accounts.listAttachments('123');
   * ```
   */
  listAttachments(
    id: string,
    params: AccountListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/accounts/${id}/attachments`, {
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
   * This endpoint returns a list of all the piggy banks connected to the account.
   *
   * @example
   * ```ts
   * const piggyBankArray = await client.accounts.listPiggyBanks(
   *   '123',
   * );
   * ```
   */
  listPiggyBanks(
    id: string,
    params: AccountListPiggyBanksParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PiggyBankArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/accounts/${id}/piggy-banks`, {
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
   * This endpoint returns a list of all the transactions connected to the account.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.accounts.listTransactions('123');
   * ```
   */
  listTransactions(
    id: string,
    params: AccountListTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/accounts/${id}/transactions`, {
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

export interface AccountArray {
  data: Array<AccountRead>;

  meta: Meta;
}

export interface AccountRead {
  id: string;

  attributes: AccountRead.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace AccountRead {
  export interface Attributes {
    name: string;

    /**
     * Can only be one one these account types. import, initial-balance and
     * reconciliation cannot be set manually.
     */
    type: AccountsAPI.ShortAccountTypeProperty;

    account_number?: string | null;

    /**
     * Is only mandatory when the type is asset.
     */
    account_role?: AccountsAPI.AccountRoleProperty | null;

    active?: boolean;

    /**
     * If you submit a start AND end date, this will be the difference between those
     * two moments.
     */
    balance_difference?: string;

    bic?: string | null;

    created_at?: string;

    /**
     * Mandatory when the account_role is ccAsset. Can only be monthlyFull or null.
     */
    credit_card_type?: AccountsAPI.CreditCardTypeProperty | null;

    /**
     * The currency code of the currency associated with this object.
     */
    currency_code?: string;

    currency_decimal_places?: number;

    /**
     * The currency ID of the currency associated with this object.
     */
    currency_id?: string;

    /**
     * The currency name of the currency associated with this object.
     */
    currency_name?: string;

    currency_symbol?: string;

    /**
     * The current balance of the account in the account's currency. If the account has
     * no currency, this is the balance in the administration's primary currency.
     * Either way, the `currency_*` fields reflect the currency used.
     */
    current_balance?: string;

    /**
     * The timestamp for this date is always 23:59:59, to indicate it's the balance at
     * the very END of that particular day.
     */
    current_balance_date?: string;

    /**
     * In liability accounts (loans, debts and mortgages), this is the amount of debt
     * in the account's currency (see the `currency_*` fields). In asset accounts, this
     * is NULL.
     */
    debt_amount?: string | null;

    iban?: string | null;

    include_net_worth?: boolean;

    /**
     * Mandatory when type is liability. Interest percentage.
     */
    interest?: string | null;

    /**
     * Mandatory when type is liability. Period over which the interest is calculated.
     */
    interest_period?: AccountsAPI.InterestPeriodProperty | null;

    /**
     * Last activity of the account.
     */
    last_activity?: string | null;

    /**
     * Latitude of the accounts's location, if applicable. Can be used to draw a map.
     */
    latitude?: number | null;

    /**
     * 'credit' indicates somebody owes you the liability. 'debit' Indicates you owe
     * this debt yourself. Works only for liabilities.
     */
    liability_direction?: AccountsAPI.LiabilityDirectionProperty | null;

    /**
     * Mandatory when type is liability. Specifies the exact type.
     */
    liability_type?: AccountsAPI.LiabilityTypeProperty | null;

    /**
     * Latitude of the accounts's location, if applicable. Can be used to draw a map.
     */
    longitude?: number | null;

    /**
     * Mandatory when the account_role is ccAsset. Moment at which CC payment
     * installments are asked for by the bank.
     */
    monthly_payment_date?: string | null;

    notes?: string | null;

    /**
     * The group ID of the group this object is part of. NULL if no group.
     */
    object_group_id?: string | null;

    /**
     * The order of the group. At least 1, for the highest sorting.
     */
    object_group_order?: number | null;

    /**
     * The name of the group. NULL if no group.
     */
    object_group_title?: string | null;

    /**
     * Indicates whether the account has a currency setting. If false, the account uses
     * the administration's primary currency. Asset accounts and liability accounts
     * always have a currency setting, while expense and revenue accounts do not.
     */
    object_has_currency_setting?: boolean;

    /**
     * Represents the opening balance, the initial amount this account holds in the
     * currency of the account or the administration's primary currency if the account
     * has no currency. Either way, the `currency_*` fields reflect the currency used.
     */
    opening_balance?: string;

    /**
     * Represents the date of the opening balance.
     */
    opening_balance_date?: string | null;

    /**
     * Order of the account. Is NULL if account is not asset or liability.
     */
    order?: number | null;

    /**
     * If you submit a start AND end date, this will be the difference in the currency
     * of the account or the administration's primary currency between those two
     * moments.
     */
    pc_balance_difference?: string | null;

    /**
     * The current balance of the account in the administration's primary currency. The
     * `primary_currency_*` fields reflect the currency used. This field is NULL if the
     * user does have 'convert to primary' set to true in their settings.
     */
    pc_current_balance?: string | null;

    /**
     * In liability accounts (loans, debts and mortgages), this is the amount of debt
     * in the administration's primary currency (see the `currency_*` fields. In asset
     * accounts, this is NULL.
     */
    pc_debt_amount?: string | null;

    /**
     * The opening balance of the account in the administration's primary currency
     * (pc). The `primary_currency_*` fields reflect the currency used. This field is
     * NULL if the user does have 'convert to primary' set to true in their settings.
     */
    pc_opening_balance?: string;

    /**
     * The virtual balance of the account in the administration's primary currency
     * (pc). The `primary_currency_*` fields reflect the currency used. This field is
     * NULL if the user does have 'convert to primary' set to true in their settings.
     */
    pc_virtual_balance?: string;

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

    updated_at?: string;

    /**
     * The virtual balance of the account in the account's currency or the
     * administration's primary currency if the account has no currency.
     */
    virtual_balance?: string;

    /**
     * Zoom level for the map, if drawn. This to set the box right. Unfortunately this
     * is a proprietary value because each map provider has different zoom levels.
     */
    zoom_level?: number | null;
  }
}

/**
 * Is only mandatory when the type is asset.
 */
export type AccountRoleProperty =
  | 'defaultAsset'
  | 'sharedAsset'
  | 'savingAsset'
  | 'ccAsset'
  | 'cashWalletAsset'
  | null;

export interface AccountSingle {
  data: AccountRead;
}

export type AccountTypeFilter =
  | 'all'
  | 'asset'
  | 'cash'
  | 'expense'
  | 'revenue'
  | 'special'
  | 'hidden'
  | 'liability'
  | 'liabilities'
  | 'Default account'
  | 'Cash account'
  | 'Asset account'
  | 'Expense account'
  | 'Revenue account'
  | 'Initial balance account'
  | 'Beneficiary account'
  | 'Import account'
  | 'Reconciliation account'
  | 'Loan'
  | 'Debt'
  | 'Mortgage';

export interface AttachmentArray {
  data: Array<AttachmentsAPI.AttachmentRead>;

  meta: Meta;
}

/**
 * Mandatory when the account_role is ccAsset. Can only be monthlyFull or null.
 */
export type CreditCardTypeProperty = 'monthlyFull' | null;

/**
 * Mandatory when type is liability. Period over which the interest is calculated.
 */
export type InterestPeriodProperty =
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'quarterly'
  | 'half-year'
  | 'yearly'
  | null;

/**
 * 'credit' indicates somebody owes you the liability. 'debit' Indicates you owe
 * this debt yourself. Works only for liabilities.
 */
export type LiabilityDirectionProperty = 'credit' | 'debit' | null;

/**
 * Mandatory when type is liability. Specifies the exact type.
 */
export type LiabilityTypeProperty = 'loan' | 'debt' | 'mortgage' | null;

export interface Meta {
  pagination?: Meta.Pagination;
}

export namespace Meta {
  export interface Pagination {
    count?: number;

    current_page?: number;

    per_page?: number;

    total?: number;

    total_pages?: number;
  }
}

export interface PageLink {
  first?: string;

  last?: string;

  next?: string | null;

  prev?: string | null;

  self?: string;
}

export interface PiggyBankArray {
  data: Array<PiggyBanksAPI.PiggyBankRead>;

  links: PageLink;

  meta: Meta;
}

/**
 * Can only be one one these account types. import, initial-balance and
 * reconciliation cannot be set manually.
 */
export type ShortAccountTypeProperty =
  | 'asset'
  | 'expense'
  | 'import'
  | 'revenue'
  | 'cash'
  | 'liability'
  | 'liabilities'
  | 'initial-balance'
  | 'reconciliation';

export interface TransactionArray {
  data: Array<TransactionJournalsAPI.TransactionRead>;

  links: PageLink;

  meta: Meta;
}

export type TransactionTypeFilter =
  | 'all'
  | 'withdrawal'
  | 'withdrawals'
  | 'expense'
  | 'deposit'
  | 'deposits'
  | 'income'
  | 'transfer'
  | 'transfers'
  | 'opening_balance'
  | 'reconciliation'
  | 'special'
  | 'specials'
  | 'default';

export interface AccountCreateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param: Can only be one one these account types. import, initial-balance and
   * reconciliation cannot be set manually.
   */
  type: ShortAccountTypeProperty;

  /**
   * Body param
   */
  account_number?: string | null;

  /**
   * Body param: Is only mandatory when the type is asset.
   */
  account_role?: AccountRoleProperty | null;

  /**
   * Body param: If omitted, defaults to true.
   */
  active?: boolean;

  /**
   * Body param
   */
  bic?: string | null;

  /**
   * Body param: Mandatory when the account_role is ccAsset. Can only be monthlyFull
   * or null.
   */
  credit_card_type?: CreditCardTypeProperty | null;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  currency_code?: string;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  currency_id?: string;

  /**
   * Body param
   */
  iban?: string | null;

  /**
   * Body param: If omitted, defaults to true.
   */
  include_net_worth?: boolean;

  /**
   * Body param: Mandatory when type is liability. Interest percentage.
   */
  interest?: string | null;

  /**
   * Body param: Mandatory when type is liability. Period over which the interest is
   * calculated.
   */
  interest_period?: InterestPeriodProperty | null;

  /**
   * Body param: Latitude of the accounts's location, if applicable. Can be used to
   * draw a map.
   */
  latitude?: number | null;

  /**
   * Body param: 'credit' indicates somebody owes you the liability. 'debit'
   * Indicates you owe this debt yourself. Works only for liabilities.
   */
  liability_direction?: LiabilityDirectionProperty | null;

  /**
   * Body param: Mandatory when type is liability. Specifies the exact type.
   */
  liability_type?: LiabilityTypeProperty | null;

  /**
   * Body param: Latitude of the accounts's location, if applicable. Can be used to
   * draw a map.
   */
  longitude?: number | null;

  /**
   * Body param: Mandatory when the account_role is ccAsset. Moment at which CC
   * payment installments are asked for by the bank.
   */
  monthly_payment_date?: string | null;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param: Represents the opening balance, the initial amount this account
   * holds.
   */
  opening_balance?: string;

  /**
   * Body param: Represents the date of the opening balance.
   */
  opening_balance_date?: string | null;

  /**
   * Body param: Order of the account
   */
  order?: number;

  /**
   * Body param
   */
  virtual_balance?: string;

  /**
   * Body param: Zoom level for the map, if drawn. This to set the box right.
   * Unfortunately this is a proprietary value because each map provider has
   * different zoom levels.
   */
  zoom_level?: number | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AccountRetrieveParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. When added to the request, Firefly III
   * will show the account's balance on that day.
   */
  date?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD. Must be after "start". Can not be the
   * same as "start". May be omitted.
   */
  end?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD. May be omitted.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AccountUpdateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  type: unknown;

  /**
   * Body param
   */
  account_number?: string | null;

  /**
   * Body param: Is only mandatory when the type is asset.
   */
  account_role?: AccountRoleProperty | null;

  /**
   * Body param: If omitted, defaults to true.
   */
  active?: boolean;

  /**
   * Body param
   */
  bic?: string | null;

  /**
   * Body param: Mandatory when the account_role is ccAsset. Can only be monthlyFull
   * or null.
   */
  credit_card_type?: CreditCardTypeProperty | null;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  currency_code?: string;

  /**
   * Body param: Use either currency_id or currency_code. Defaults to the user's
   * financial administration's currency.
   */
  currency_id?: string;

  /**
   * Body param
   */
  iban?: string | null;

  /**
   * Body param: If omitted, defaults to true.
   */
  include_net_worth?: boolean;

  /**
   * Body param: Mandatory when type is liability. Interest percentage.
   */
  interest?: string | null;

  /**
   * Body param: Mandatory when type is liability. Period over which the interest is
   * calculated.
   */
  interest_period?: InterestPeriodProperty | null;

  /**
   * Body param: Latitude of the account's location, if applicable. Can be used to
   * draw a map. If omitted, the existing location will be kept. If submitted as
   * NULL, the current location will be removed.
   */
  latitude?: number | null;

  /**
   * Body param: Mandatory when type is liability. Specifies the exact type.
   */
  liability_type?: LiabilityTypeProperty | null;

  /**
   * Body param: Latitude of the account's location, if applicable. Can be used to
   * draw a map. If omitted, the existing location will be kept. If submitted as
   * NULL, the current location will be removed.
   */
  longitude?: number | null;

  /**
   * Body param: Mandatory when the account_role is ccAsset. Moment at which CC
   * payment installments are asked for by the bank.
   */
  monthly_payment_date?: string | null;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param
   */
  opening_balance?: string;

  /**
   * Body param
   */
  opening_balance_date?: string | null;

  /**
   * Body param: Order of the account
   */
  order?: number;

  /**
   * Body param
   */
  virtual_balance?: string;

  /**
   * Body param: Zoom level for the map, if drawn. This to set the box right.
   * Unfortunately this is a proprietary value because each map provider has
   * different zoom levels. If omitted, the existing location will be kept. If
   * submitted as NULL, the current location will be removed.
   */
  zoom_level?: number | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AccountListParams {
  /**
   * Query param: A date formatted YYYY-MM-DD. When added to the request, Firefly III
   * will show the account's balance on that day.
   */
  date?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD. Must be after "start". Can not be the
   * same as "start". May be omitted.
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
   * Query param: A date formatted YYYY-MM-DD. May be omitted.
   */
  start?: string;

  /**
   * Query param
   */
  type?: AccountTypeFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AccountDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AccountListAttachmentsParams {
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

export interface AccountListPiggyBanksParams {
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

export interface AccountListTransactionsParams {
  /**
   * Query param: A date formatted YYYY-MM-DD.
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
   * Query param: A date formatted YYYY-MM-DD.
   */
  start?: string;

  /**
   * Query param
   */
  type?: TransactionTypeFilter;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Accounts {
  export {
    type AccountArray as AccountArray,
    type AccountRead as AccountRead,
    type AccountRoleProperty as AccountRoleProperty,
    type AccountSingle as AccountSingle,
    type AccountTypeFilter as AccountTypeFilter,
    type AttachmentArray as AttachmentArray,
    type CreditCardTypeProperty as CreditCardTypeProperty,
    type InterestPeriodProperty as InterestPeriodProperty,
    type LiabilityDirectionProperty as LiabilityDirectionProperty,
    type LiabilityTypeProperty as LiabilityTypeProperty,
    type Meta as Meta,
    type PageLink as PageLink,
    type PiggyBankArray as PiggyBankArray,
    type ShortAccountTypeProperty as ShortAccountTypeProperty,
    type TransactionArray as TransactionArray,
    type TransactionTypeFilter as TransactionTypeFilter,
    type AccountCreateParams as AccountCreateParams,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountListAttachmentsParams as AccountListAttachmentsParams,
    type AccountListPiggyBanksParams as AccountListPiggyBanksParams,
    type AccountListTransactionsParams as AccountListTransactionsParams,
  };
}
