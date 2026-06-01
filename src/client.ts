// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import { stringifyQuery } from './internal/utils/query';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  About,
  AboutRetrieveInfoParams,
  AboutRetrieveInfoResponse,
  AboutRetrieveUserParams,
  UserRead,
  UserSingle,
} from './resources/about';
import {
  AccountArray,
  AccountCreateParams,
  AccountDeleteParams,
  AccountListAttachmentsParams,
  AccountListParams,
  AccountListPiggyBanksParams,
  AccountListTransactionsParams,
  AccountRead,
  AccountRetrieveParams,
  AccountRoleProperty,
  AccountSingle,
  AccountTypeFilter,
  AccountUpdateParams,
  Accounts,
  AttachmentArray,
  CreditCardTypeProperty,
  InterestPeriodProperty,
  LiabilityDirectionProperty,
  LiabilityTypeProperty,
  Meta,
  PageLink,
  PiggyBankArray,
  ShortAccountTypeProperty,
  TransactionArray,
  TransactionTypeFilter,
} from './resources/accounts';
import {
  AttachableType,
  AttachmentCreateParams,
  AttachmentDeleteParams,
  AttachmentDownloadParams,
  AttachmentListParams,
  AttachmentRead,
  AttachmentRetrieveParams,
  AttachmentSingle,
  AttachmentUpdateParams,
  AttachmentUploadParams,
  Attachments,
  ObjectLink,
} from './resources/attachments';
import {
  Autocomplete,
  AutocompleteBill,
  AutocompleteListAccountsParams,
  AutocompleteListAccountsResponse,
  AutocompleteListBillsParams,
  AutocompleteListBillsResponse,
  AutocompleteListBudgetsParams,
  AutocompleteListBudgetsResponse,
  AutocompleteListCategoriesParams,
  AutocompleteListCategoriesResponse,
  AutocompleteListCurrenciesParams,
  AutocompleteListCurrenciesResponse,
  AutocompleteListCurrenciesWithCodeParams,
  AutocompleteListCurrenciesWithCodeResponse,
  AutocompleteListObjectGroupsParams,
  AutocompleteListObjectGroupsResponse,
  AutocompleteListPiggyBanksParams,
  AutocompleteListPiggyBanksResponse,
  AutocompleteListPiggyBanksWithBalanceParams,
  AutocompleteListPiggyBanksWithBalanceResponse,
  AutocompleteListRecurringTransactionsParams,
  AutocompleteListRecurringTransactionsResponse,
  AutocompleteListRuleGroupsParams,
  AutocompleteListRuleGroupsResponse,
  AutocompleteListRulesParams,
  AutocompleteListRulesResponse,
  AutocompleteListSubscriptionsParams,
  AutocompleteListSubscriptionsResponse,
  AutocompleteListTagsParams,
  AutocompleteListTagsResponse,
  AutocompleteListTransactionTypesParams,
  AutocompleteListTransactionTypesResponse,
  AutocompleteListTransactionsParams,
  AutocompleteListTransactionsResponse,
  AutocompleteListTransactionsWithIDParams,
  AutocompleteListTransactionsWithIDResponse,
} from './resources/autocomplete';
import {
  ArrayEntryWithCurrencyAndSum,
  AvailableBudgetArray,
  AvailableBudgetListParams,
  AvailableBudgetRead,
  AvailableBudgetRetrieveParams,
  AvailableBudgetRetrieveResponse,
  AvailableBudgets,
} from './resources/available-budgets';
import { Batch, BatchFinishParams } from './resources/batch';
import {
  BillArray,
  BillCreateParams,
  BillDeleteParams,
  BillListAttachmentsParams,
  BillListParams,
  BillListRulesParams,
  BillListTransactionsParams,
  BillRead,
  BillRepeatFrequency,
  BillRetrieveParams,
  BillSingle,
  BillUpdateParams,
  Bills,
  RuleArray,
} from './resources/bills';
import {
  Categories,
  CategoryCreateParams,
  CategoryDeleteParams,
  CategoryListAttachmentsParams,
  CategoryListParams,
  CategoryListResponse,
  CategoryListTransactionsParams,
  CategoryRead,
  CategoryRetrieveParams,
  CategorySingle,
  CategoryUpdateParams,
} from './resources/categories';
import {
  ConfigValueFilter,
  Configuration,
  ConfigurationResource,
  ConfigurationRetrieveParams,
  ConfigurationRetrieveResponse,
  ConfigurationRetrieveValueParams,
  ConfigurationSingle,
  ConfigurationUpdateValueParams,
  PolymorphicProperty,
} from './resources/configuration';
import { Cron, CronResultRow, CronRunParams, CronRunResponse } from './resources/cron';
import {
  CurrencyExchangeRateArray,
  CurrencyExchangeRateRead,
  CurrencyExchangeRateSingle,
  ExchangeRateCreateByCurrenciesParams,
  ExchangeRateCreateByDateParams,
  ExchangeRateCreateParams,
  ExchangeRateDeleteAllByCurrenciesParams,
  ExchangeRateDeleteByDateParams,
  ExchangeRateDeleteParams,
  ExchangeRateListByCurrenciesParams,
  ExchangeRateListParams,
  ExchangeRateRetrieveByDateParams,
  ExchangeRateRetrieveParams,
  ExchangeRateUpdateByDateParams,
  ExchangeRateUpdateParams,
  ExchangeRates,
} from './resources/exchange-rates';
import {
  LinkType,
  LinkTypeCreateParams,
  LinkTypeDeleteParams,
  LinkTypeListParams,
  LinkTypeListResponse,
  LinkTypeListTransactionsParams,
  LinkTypeRead,
  LinkTypeRetrieveParams,
  LinkTypeSingle,
  LinkTypeUpdateParams,
  LinkTypes,
} from './resources/link-types';
import {
  ObjectGroupDeleteParams,
  ObjectGroupListBillsParams,
  ObjectGroupListParams,
  ObjectGroupListPiggyBanksParams,
  ObjectGroupListResponse,
  ObjectGroupRead,
  ObjectGroupRetrieveParams,
  ObjectGroupSingle,
  ObjectGroupUpdateParams,
  ObjectGroups,
} from './resources/object-groups';
import {
  PiggyBankCreateParams,
  PiggyBankDeleteParams,
  PiggyBankEventArray,
  PiggyBankListAttachmentsParams,
  PiggyBankListEventsParams,
  PiggyBankListParams,
  PiggyBankRead,
  PiggyBankRetrieveParams,
  PiggyBankSingle,
  PiggyBankUpdateParams,
  PiggyBanks,
} from './resources/piggy-banks';
import {
  Preference,
  PreferenceCreateParams,
  PreferenceListParams,
  PreferenceListResponse,
  PreferenceRead,
  PreferenceRetrieveParams,
  PreferenceSingle,
  PreferenceUpdateParams,
  Preferences,
} from './resources/preferences';
import {
  AccountTypeProperty,
  RecurrenceArray,
  RecurrenceCreateParams,
  RecurrenceDeleteParams,
  RecurrenceListParams,
  RecurrenceListTransactionsParams,
  RecurrenceRead,
  RecurrenceRepetitionType,
  RecurrenceRetrieveParams,
  RecurrenceSingle,
  RecurrenceTransactionType,
  RecurrenceTriggerTransactionParams,
  RecurrenceUpdateParams,
  Recurrences,
} from './resources/recurrences';
import {
  RuleGroupCreateParams,
  RuleGroupDeleteParams,
  RuleGroupListAllParams,
  RuleGroupListAllResponse,
  RuleGroupListRulesParams,
  RuleGroupRead,
  RuleGroupRetrieveParams,
  RuleGroupSingle,
  RuleGroupTestTransactionsParams,
  RuleGroupTriggerRulesParams,
  RuleGroupUpdateParams,
  RuleGroups,
} from './resources/rule-groups';
import {
  RuleActionKeyword,
  RuleCreateParams,
  RuleDeleteParams,
  RuleListParams,
  RuleRead,
  RuleRetrieveParams,
  RuleSingle,
  RuleTestParams,
  RuleTriggerKeyword,
  RuleTriggerParams,
  RuleTriggerType,
  RuleUpdateParams,
  Rules,
} from './resources/rules';
import { Search, SearchAccountsParams, SearchTransactionsParams } from './resources/search';
import { Summary, SummaryRetrieveBasicParams, SummaryRetrieveBasicResponse } from './resources/summary';
import {
  TagCreateParams,
  TagDeleteParams,
  TagListAttachmentsParams,
  TagListParams,
  TagListResponse,
  TagListTransactionsParams,
  TagRead,
  TagRetrieveParams,
  TagSingle,
  TagUpdateParams,
  Tags,
} from './resources/tags';
import {
  TransactionJournalDeleteParams,
  TransactionJournalListLinksParams,
  TransactionJournalRetrieveParams,
  TransactionJournals,
  TransactionRead,
  TransactionSingle,
} from './resources/transaction-journals';
import {
  TransactionLinkArray,
  TransactionLinkCreateParams,
  TransactionLinkDeleteParams,
  TransactionLinkListParams,
  TransactionLinkRead,
  TransactionLinkRetrieveParams,
  TransactionLinkSingle,
  TransactionLinkUpdateParams,
  TransactionLinks,
} from './resources/transaction-links';
import {
  TransactionCreateParams,
  TransactionDeleteParams,
  TransactionListAttachmentsParams,
  TransactionListParams,
  TransactionListPiggyBankEventsParams,
  TransactionRetrieveParams,
  TransactionTypeProperty,
  TransactionUpdateParams,
  Transactions,
} from './resources/transactions';
import {
  UserGroupListParams,
  UserGroupListResponse,
  UserGroupRead,
  UserGroupRetrieveParams,
  UserGroupSingle,
  UserGroupUpdateParams,
  UserGroups,
} from './resources/user-groups';
import {
  User,
  UserCreateParams,
  UserDeleteParams,
  UserListParams,
  UserListResponse,
  UserRetrieveParams,
  UserUpdateParams,
  Users,
} from './resources/users';
import {
  AutoBudgetPeriod,
  AutoBudgetType,
  BudgetCreateParams,
  BudgetDeleteParams,
  BudgetListAttachmentsParams,
  BudgetListParams,
  BudgetListResponse,
  BudgetListTransactionsParams,
  BudgetListTransactionsWithoutBudgetParams,
  BudgetRead,
  BudgetRetrieveParams,
  BudgetSingle,
  BudgetUpdateParams,
  Budgets,
} from './resources/budgets/budgets';
import { Chart } from './resources/chart/chart';
import {
  Currencies,
  CurrencyCreateParams,
  CurrencyDeleteParams,
  CurrencyDisableParams,
  CurrencyEnableParams,
  CurrencyListAccountsParams,
  CurrencyListAvailableBudgetsParams,
  CurrencyListBillsParams,
  CurrencyListBudgetLimitsParams,
  CurrencyListParams,
  CurrencyListRecurrencesParams,
  CurrencyListResponse,
  CurrencyListRulesParams,
  CurrencyListTransactionsParams,
  CurrencyRead,
  CurrencyRetrieveParams,
  CurrencySingle,
  CurrencyUpdateParams,
} from './resources/currencies/currencies';
import { Data, DataDestroyParams, DataPurgeParams } from './resources/data/data';
import { Insight } from './resources/insight/insight';
import {
  Webhook,
  WebhookCreateParams,
  WebhookDeleteParams,
  WebhookDelivery,
  WebhookListParams,
  WebhookListResponse,
  WebhookResponse,
  WebhookRetrieveParams,
  WebhookSingle,
  WebhookSubmitParams,
  WebhookTrigger,
  WebhookTriggerTransactionParams,
  WebhookUpdateParams,
  Webhooks,
} from './resources/webhooks/webhooks';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

const environments = {
  production: 'https://demo.firefly-iii.org/api',
  environment_1: 'http://firefly.sd.internal/api',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Optional Bearer token flow
   */
  bearerToken?: string | null | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://demo.firefly-iii.org/api`
   * - `environment_1` corresponds to `http://firefly.sd.internal/api`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['FIREFLY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['FIREFLY_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Firefly API.
 */
export class Firefly {
  bearerToken: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Firefly API.
   *
   * @param {string | null | undefined} [opts.bearerToken=process.env['FIREFLY_BEARER_TOKEN'] ?? null]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['FIREFLY_BASE_URL'] ?? https://demo.firefly-iii.org/api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('FIREFLY_BASE_URL'),
    bearerToken = readEnv('FIREFLY_BEARER_TOKEN') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.FireflyError(
        'Ambiguous URL; The `baseURL` option (or FIREFLY_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    this.baseURL = options.baseURL || environments[options.environment || 'production'];
    this.timeout = options.timeout ?? Firefly.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('FIREFLY_LOG'), "process.env['FIREFLY_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    const customHeadersEnv = readEnv('FIREFLY_CUSTOM_HEADERS');
    if (customHeadersEnv) {
      const parsed: Record<string, string> = {};
      for (const line of customHeadersEnv.split('\n')) {
        const colon = line.indexOf(':');
        if (colon >= 0) {
          parsed[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
        }
      }
      options.defaultHeaders = { ...parsed, ...options.defaultHeaders };
    }

    this._options = options;

    this.bearerToken = bearerToken;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      environment: options.environment ? options.environment : undefined,
      baseURL: options.environment ? undefined : this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      bearerToken: this.bearerToken,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.bearerToken && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the bearerToken to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.bearerToken == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.bearerToken}` }]);
  }

  protected stringifyQuery(query: object | Record<string, unknown>): string {
    return stringifyQuery(query);
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    const pathQuery = Object.fromEntries(url.searchParams);
    if (!isEmptyObj(defaultQuery) || !isEmptyObj(pathQuery)) {
      query = { ...pathQuery, ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText) as any;
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    const abort = this._makeAbort(controller);
    if (signal) signal.addEventListener('abort', abort, { once: true });

    const timeout = setTimeout(abort, ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time, just do what it
    // says, but otherwise calculate a default
    if (timeoutMillis === undefined) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private _makeAbort(controller: AbortController) {
    // note: we can't just inline this method inside `fetchWithTimeout()` because then the closure
    //       would capture all request options, and cause a memory leak.
    return () => controller.abort();
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else if (
      typeof body === 'object' &&
      headers.values.get('content-type') === 'application/x-www-form-urlencoded'
    ) {
      return {
        bodyHeaders: { 'content-type': 'application/x-www-form-urlencoded' },
        body: this.stringifyQuery(body),
      };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Firefly = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static FireflyError = Errors.FireflyError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  /**
   * Auto-complete endpoints show basic information about Firefly III models, like the name and maybe some amounts. They all support a search query and can be used to autocomplete data in forms. Autocomplete return values always have a &quot;name&quot;-field.
   */
  autocomplete: API.Autocomplete = new API.Autocomplete(this);
  chart: API.Chart = new API.Chart(this);
  /**
   * The &quot;data&quot;-endpoints manage generic Firefly III and user-specific data.
   */
  data: API.Data = new API.Data(this);
  insight: API.Insight = new API.Insight(this);
  /**
   * Endpoints that deliver all of the user&#039;s asset, expense and other accounts (and the metadata) together with related transactions, piggy banks and other objects. Also delivers endpoints for CRUD operations for accounts.
   */
  accounts: API.Accounts = new API.Accounts(this);
  /**
   * Endpoints to manage the attachments of the authenticated user, including up- and downloading of the files.
   */
  attachments: API.Attachments = new API.Attachments(this);
  /**
   * Endpoints to manage the total available amount that the user has made available to themselves. Used in periodic budgeting.
   */
  availableBudgets: API.AvailableBudgets = new API.AvailableBudgets(this);
  /**
   * Endpoints to manage a user&#039;s bills and all related objects.
   */
  bills: API.Bills = new API.Bills(this);
  /**
   * Endpoints to manage a user&#039;s budgets and get info on the related objects, like limits.
   */
  budgets: API.Budgets = new API.Budgets(this);
  /**
   * Endpoints to manage a user&#039;s categories and get information on transactions and other related objects.
   */
  categories: API.Categories = new API.Categories(this);
  /**
   * All currency exchange rates.
   */
  exchangeRates: API.ExchangeRates = new API.ExchangeRates(this);
  /**
   * Endpoints to manage links between transactions, and manage the type of links available.
   */
  linkTypes: API.LinkTypes = new API.LinkTypes(this);
  /**
   * Endpoints to manage links between transactions, and manage the type of links available.
   */
  transactionLinks: API.TransactionLinks = new API.TransactionLinks(this);
  /**
   * Endpoints to control and manage all of the user&#039;s object groups. Can only be created in conjunction with another object (for example a piggy bank) and will auto-delete when no other items are linked to it.
   */
  objectGroups: API.ObjectGroups = new API.ObjectGroups(this);
  /**
   * Endpoints to control and manage all of the user&#039;s piggy banks and related objects and information.
   */
  piggyBanks: API.PiggyBanks = new API.PiggyBanks(this);
  /**
   * Use these endpoints to manage the user&#039;s recurring transactions, trigger the creation of transactions and manage the settings.
   */
  recurrences: API.Recurrences = new API.Recurrences(this);
  /**
   * Manage all of the user&#039;s groups of rules and trigger the execution of entire groups.
   */
  ruleGroups: API.RuleGroups = new API.RuleGroups(this);
  /**
   * These endpoints can be used to manage all of the user&#039;s rules. Also includes triggers to execute or test rules and individual triggers.
   */
  rules: API.Rules = new API.Rules(this);
  /**
   * This endpoint manages all of the user&#039;s tags.
   */
  tags: API.Tags = new API.Tags(this);
  /**
   * Endpoints to manage the currencies in Firefly III. Depending on the user&#039;s role you can also disable and enable them, or add new ones.
   */
  currencies: API.Currencies = new API.Currencies(this);
  /**
   * The most-used endpoints in Firefly III, these endpoints are used to manage the user&#039;s transactions.
   */
  transactionJournals: API.TransactionJournals = new API.TransactionJournals(this);
  /**
   * The most-used endpoints in Firefly III, these endpoints are used to manage the user&#039;s transactions.
   */
  transactions: API.Transactions = new API.Transactions(this);
  /**
   * User groups are the objects around which &quot;financial administrations&quot; are built.
   */
  userGroups: API.UserGroups = new API.UserGroups(this);
  /**
   * Endpoints that allow you to search through the user&#039;s financial data. Different from the autocomplete endpoints, the search accepts more advanced arguments.
   */
  search: API.Search = new API.Search(this);
  /**
   * These endpoints deliver summaries, like sums, lists of numbers and other processed information. Mainly used for the main dashboard and pretty specific for Firefly III itself.
   */
  summary: API.Summary = new API.Summary(this);
  /**
   * These endpoints deliver general system information, version- and meta information.
   */
  about: API.About = new API.About(this);
  /**
   * These endpoints deliver general system information, version- and meta information.
   */
  batch: API.Batch = new API.Batch(this);
  /**
   * These endpoints allow you to manage and update the Firefly III configuration. You need to have the &quot;owner&quot; role to update configuration.
   */
  configuration: API.ConfigurationResource = new API.ConfigurationResource(this);
  /**
   * These endpoints deliver general system information, version- and meta information.
   */
  cron: API.Cron = new API.Cron(this);
  /**
   * Use these endpoints to manage the users registered within Firefly III. You need to have the &quot;owner&quot; role to access these endpoints.
   */
  users: API.Users = new API.Users(this);
  /**
   * These endpoints can be used to manage the user&#039;s preferences, including some hidden ones.
   */
  preferences: API.Preferences = new API.Preferences(this);
  /**
   * These endpoints can be used to manage the user&#039;s webhooks and triggers them if necessary.
   */
  webhooks: API.Webhooks = new API.Webhooks(this);
}

Firefly.Autocomplete = Autocomplete;
Firefly.Chart = Chart;
Firefly.Data = Data;
Firefly.Insight = Insight;
Firefly.Accounts = Accounts;
Firefly.Attachments = Attachments;
Firefly.AvailableBudgets = AvailableBudgets;
Firefly.Bills = Bills;
Firefly.Budgets = Budgets;
Firefly.Categories = Categories;
Firefly.ExchangeRates = ExchangeRates;
Firefly.LinkTypes = LinkTypes;
Firefly.TransactionLinks = TransactionLinks;
Firefly.ObjectGroups = ObjectGroups;
Firefly.PiggyBanks = PiggyBanks;
Firefly.Recurrences = Recurrences;
Firefly.RuleGroups = RuleGroups;
Firefly.Rules = Rules;
Firefly.Tags = Tags;
Firefly.Currencies = Currencies;
Firefly.TransactionJournals = TransactionJournals;
Firefly.Transactions = Transactions;
Firefly.UserGroups = UserGroups;
Firefly.Search = Search;
Firefly.Summary = Summary;
Firefly.About = About;
Firefly.Batch = Batch;
Firefly.ConfigurationResource = ConfigurationResource;
Firefly.Cron = Cron;
Firefly.Users = Users;
Firefly.Preferences = Preferences;
Firefly.Webhooks = Webhooks;

export declare namespace Firefly {
  export type RequestOptions = Opts.RequestOptions;

  export {
    Autocomplete as Autocomplete,
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

  export { Chart as Chart };

  export {
    Data as Data,
    type DataDestroyParams as DataDestroyParams,
    type DataPurgeParams as DataPurgeParams,
  };

  export { Insight as Insight };

  export {
    Accounts as Accounts,
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

  export {
    Attachments as Attachments,
    type AttachableType as AttachableType,
    type AttachmentRead as AttachmentRead,
    type AttachmentSingle as AttachmentSingle,
    type ObjectLink as ObjectLink,
    type AttachmentCreateParams as AttachmentCreateParams,
    type AttachmentRetrieveParams as AttachmentRetrieveParams,
    type AttachmentUpdateParams as AttachmentUpdateParams,
    type AttachmentListParams as AttachmentListParams,
    type AttachmentDeleteParams as AttachmentDeleteParams,
    type AttachmentDownloadParams as AttachmentDownloadParams,
    type AttachmentUploadParams as AttachmentUploadParams,
  };

  export {
    AvailableBudgets as AvailableBudgets,
    type ArrayEntryWithCurrencyAndSum as ArrayEntryWithCurrencyAndSum,
    type AvailableBudgetArray as AvailableBudgetArray,
    type AvailableBudgetRead as AvailableBudgetRead,
    type AvailableBudgetRetrieveResponse as AvailableBudgetRetrieveResponse,
    type AvailableBudgetRetrieveParams as AvailableBudgetRetrieveParams,
    type AvailableBudgetListParams as AvailableBudgetListParams,
  };

  export {
    Bills as Bills,
    type BillArray as BillArray,
    type BillRead as BillRead,
    type BillRepeatFrequency as BillRepeatFrequency,
    type BillSingle as BillSingle,
    type RuleArray as RuleArray,
    type BillCreateParams as BillCreateParams,
    type BillRetrieveParams as BillRetrieveParams,
    type BillUpdateParams as BillUpdateParams,
    type BillListParams as BillListParams,
    type BillDeleteParams as BillDeleteParams,
    type BillListAttachmentsParams as BillListAttachmentsParams,
    type BillListRulesParams as BillListRulesParams,
    type BillListTransactionsParams as BillListTransactionsParams,
  };

  export {
    Budgets as Budgets,
    type AutoBudgetPeriod as AutoBudgetPeriod,
    type AutoBudgetType as AutoBudgetType,
    type BudgetRead as BudgetRead,
    type BudgetSingle as BudgetSingle,
    type BudgetListResponse as BudgetListResponse,
    type BudgetCreateParams as BudgetCreateParams,
    type BudgetRetrieveParams as BudgetRetrieveParams,
    type BudgetUpdateParams as BudgetUpdateParams,
    type BudgetListParams as BudgetListParams,
    type BudgetDeleteParams as BudgetDeleteParams,
    type BudgetListAttachmentsParams as BudgetListAttachmentsParams,
    type BudgetListTransactionsParams as BudgetListTransactionsParams,
    type BudgetListTransactionsWithoutBudgetParams as BudgetListTransactionsWithoutBudgetParams,
  };

  export {
    Categories as Categories,
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

  export {
    ExchangeRates as ExchangeRates,
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

  export {
    LinkTypes as LinkTypes,
    type LinkType as LinkType,
    type LinkTypeRead as LinkTypeRead,
    type LinkTypeSingle as LinkTypeSingle,
    type LinkTypeListResponse as LinkTypeListResponse,
    type LinkTypeCreateParams as LinkTypeCreateParams,
    type LinkTypeRetrieveParams as LinkTypeRetrieveParams,
    type LinkTypeUpdateParams as LinkTypeUpdateParams,
    type LinkTypeListParams as LinkTypeListParams,
    type LinkTypeDeleteParams as LinkTypeDeleteParams,
    type LinkTypeListTransactionsParams as LinkTypeListTransactionsParams,
  };

  export {
    TransactionLinks as TransactionLinks,
    type TransactionLinkArray as TransactionLinkArray,
    type TransactionLinkRead as TransactionLinkRead,
    type TransactionLinkSingle as TransactionLinkSingle,
    type TransactionLinkCreateParams as TransactionLinkCreateParams,
    type TransactionLinkRetrieveParams as TransactionLinkRetrieveParams,
    type TransactionLinkUpdateParams as TransactionLinkUpdateParams,
    type TransactionLinkListParams as TransactionLinkListParams,
    type TransactionLinkDeleteParams as TransactionLinkDeleteParams,
  };

  export {
    ObjectGroups as ObjectGroups,
    type ObjectGroupRead as ObjectGroupRead,
    type ObjectGroupSingle as ObjectGroupSingle,
    type ObjectGroupListResponse as ObjectGroupListResponse,
    type ObjectGroupRetrieveParams as ObjectGroupRetrieveParams,
    type ObjectGroupUpdateParams as ObjectGroupUpdateParams,
    type ObjectGroupListParams as ObjectGroupListParams,
    type ObjectGroupDeleteParams as ObjectGroupDeleteParams,
    type ObjectGroupListBillsParams as ObjectGroupListBillsParams,
    type ObjectGroupListPiggyBanksParams as ObjectGroupListPiggyBanksParams,
  };

  export {
    PiggyBanks as PiggyBanks,
    type PiggyBankEventArray as PiggyBankEventArray,
    type PiggyBankRead as PiggyBankRead,
    type PiggyBankSingle as PiggyBankSingle,
    type PiggyBankCreateParams as PiggyBankCreateParams,
    type PiggyBankRetrieveParams as PiggyBankRetrieveParams,
    type PiggyBankUpdateParams as PiggyBankUpdateParams,
    type PiggyBankListParams as PiggyBankListParams,
    type PiggyBankDeleteParams as PiggyBankDeleteParams,
    type PiggyBankListAttachmentsParams as PiggyBankListAttachmentsParams,
    type PiggyBankListEventsParams as PiggyBankListEventsParams,
  };

  export {
    Recurrences as Recurrences,
    type AccountTypeProperty as AccountTypeProperty,
    type RecurrenceArray as RecurrenceArray,
    type RecurrenceRead as RecurrenceRead,
    type RecurrenceRepetitionType as RecurrenceRepetitionType,
    type RecurrenceSingle as RecurrenceSingle,
    type RecurrenceTransactionType as RecurrenceTransactionType,
    type RecurrenceCreateParams as RecurrenceCreateParams,
    type RecurrenceRetrieveParams as RecurrenceRetrieveParams,
    type RecurrenceUpdateParams as RecurrenceUpdateParams,
    type RecurrenceListParams as RecurrenceListParams,
    type RecurrenceDeleteParams as RecurrenceDeleteParams,
    type RecurrenceListTransactionsParams as RecurrenceListTransactionsParams,
    type RecurrenceTriggerTransactionParams as RecurrenceTriggerTransactionParams,
  };

  export {
    RuleGroups as RuleGroups,
    type RuleGroupRead as RuleGroupRead,
    type RuleGroupSingle as RuleGroupSingle,
    type RuleGroupListAllResponse as RuleGroupListAllResponse,
    type RuleGroupCreateParams as RuleGroupCreateParams,
    type RuleGroupRetrieveParams as RuleGroupRetrieveParams,
    type RuleGroupUpdateParams as RuleGroupUpdateParams,
    type RuleGroupDeleteParams as RuleGroupDeleteParams,
    type RuleGroupListAllParams as RuleGroupListAllParams,
    type RuleGroupListRulesParams as RuleGroupListRulesParams,
    type RuleGroupTestTransactionsParams as RuleGroupTestTransactionsParams,
    type RuleGroupTriggerRulesParams as RuleGroupTriggerRulesParams,
  };

  export {
    Rules as Rules,
    type RuleActionKeyword as RuleActionKeyword,
    type RuleRead as RuleRead,
    type RuleSingle as RuleSingle,
    type RuleTriggerKeyword as RuleTriggerKeyword,
    type RuleTriggerType as RuleTriggerType,
    type RuleCreateParams as RuleCreateParams,
    type RuleRetrieveParams as RuleRetrieveParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleTestParams as RuleTestParams,
    type RuleTriggerParams as RuleTriggerParams,
  };

  export {
    Tags as Tags,
    type TagRead as TagRead,
    type TagSingle as TagSingle,
    type TagListResponse as TagListResponse,
    type TagCreateParams as TagCreateParams,
    type TagRetrieveParams as TagRetrieveParams,
    type TagUpdateParams as TagUpdateParams,
    type TagListParams as TagListParams,
    type TagDeleteParams as TagDeleteParams,
    type TagListAttachmentsParams as TagListAttachmentsParams,
    type TagListTransactionsParams as TagListTransactionsParams,
  };

  export {
    Currencies as Currencies,
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
    TransactionJournals as TransactionJournals,
    type TransactionRead as TransactionRead,
    type TransactionSingle as TransactionSingle,
    type TransactionJournalRetrieveParams as TransactionJournalRetrieveParams,
    type TransactionJournalDeleteParams as TransactionJournalDeleteParams,
    type TransactionJournalListLinksParams as TransactionJournalListLinksParams,
  };

  export {
    Transactions as Transactions,
    type TransactionTypeProperty as TransactionTypeProperty,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionRetrieveParams as TransactionRetrieveParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionDeleteParams as TransactionDeleteParams,
    type TransactionListAttachmentsParams as TransactionListAttachmentsParams,
    type TransactionListPiggyBankEventsParams as TransactionListPiggyBankEventsParams,
  };

  export {
    UserGroups as UserGroups,
    type UserGroupRead as UserGroupRead,
    type UserGroupSingle as UserGroupSingle,
    type UserGroupListResponse as UserGroupListResponse,
    type UserGroupRetrieveParams as UserGroupRetrieveParams,
    type UserGroupUpdateParams as UserGroupUpdateParams,
    type UserGroupListParams as UserGroupListParams,
  };

  export {
    Search as Search,
    type SearchAccountsParams as SearchAccountsParams,
    type SearchTransactionsParams as SearchTransactionsParams,
  };

  export {
    Summary as Summary,
    type SummaryRetrieveBasicResponse as SummaryRetrieveBasicResponse,
    type SummaryRetrieveBasicParams as SummaryRetrieveBasicParams,
  };

  export {
    About as About,
    type UserRead as UserRead,
    type UserSingle as UserSingle,
    type AboutRetrieveInfoResponse as AboutRetrieveInfoResponse,
    type AboutRetrieveInfoParams as AboutRetrieveInfoParams,
    type AboutRetrieveUserParams as AboutRetrieveUserParams,
  };

  export { Batch as Batch, type BatchFinishParams as BatchFinishParams };

  export {
    ConfigurationResource as ConfigurationResource,
    type ConfigValueFilter as ConfigValueFilter,
    type Configuration as Configuration,
    type ConfigurationSingle as ConfigurationSingle,
    type PolymorphicProperty as PolymorphicProperty,
    type ConfigurationRetrieveResponse as ConfigurationRetrieveResponse,
    type ConfigurationRetrieveParams as ConfigurationRetrieveParams,
    type ConfigurationRetrieveValueParams as ConfigurationRetrieveValueParams,
    type ConfigurationUpdateValueParams as ConfigurationUpdateValueParams,
  };

  export {
    Cron as Cron,
    type CronResultRow as CronResultRow,
    type CronRunResponse as CronRunResponse,
    type CronRunParams as CronRunParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
  };

  export {
    Preferences as Preferences,
    type Preference as Preference,
    type PreferenceRead as PreferenceRead,
    type PreferenceSingle as PreferenceSingle,
    type PreferenceListResponse as PreferenceListResponse,
    type PreferenceCreateParams as PreferenceCreateParams,
    type PreferenceRetrieveParams as PreferenceRetrieveParams,
    type PreferenceUpdateParams as PreferenceUpdateParams,
    type PreferenceListParams as PreferenceListParams,
  };

  export {
    Webhooks as Webhooks,
    type Webhook as Webhook,
    type WebhookDelivery as WebhookDelivery,
    type WebhookResponse as WebhookResponse,
    type WebhookSingle as WebhookSingle,
    type WebhookTrigger as WebhookTrigger,
    type WebhookListResponse as WebhookListResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookSubmitParams as WebhookSubmitParams,
    type WebhookTriggerTransactionParams as WebhookTriggerTransactionParams,
  };
}
