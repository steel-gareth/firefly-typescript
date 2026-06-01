// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import * as BillsAPI from './bills';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage all of the user&#039;s groups of rules and trigger the execution of entire groups.
 */
export class RuleGroups extends APIResource {
  /**
   * Creates a new rule group. The data required can be submitted as a JSON body or
   * as a list of parameters.
   *
   * @example
   * ```ts
   * const ruleGroupSingle = await client.ruleGroups.create({
   *   title: 'Default rule group',
   * });
   * ```
   */
  create(params: RuleGroupCreateParams, options?: RequestOptions): APIPromise<RuleGroupSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/rule-groups', {
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
   * Get a single rule group. This does not include the rules. For that, see below.
   *
   * @example
   * ```ts
   * const ruleGroupSingle = await client.ruleGroups.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(
    id: string,
    params: RuleGroupRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleGroupSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/rule-groups/${id}`, {
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
   * Update existing rule group.
   *
   * @example
   * ```ts
   * const ruleGroupSingle = await client.ruleGroups.update(
   *   '123',
   * );
   * ```
   */
  update(id: string, params: RuleGroupUpdateParams, options?: RequestOptions): APIPromise<RuleGroupSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/rule-groups/${id}`, {
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
   * Delete a rule group.
   *
   * @example
   * ```ts
   * await client.ruleGroups.delete('123');
   * ```
   */
  delete(
    id: string,
    params: RuleGroupDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/rule-groups/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * List all rule groups.
   *
   * @example
   * ```ts
   * const response = await client.ruleGroups.listAll();
   * ```
   */
  listAll(
    params: RuleGroupListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleGroupListAllResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/rule-groups', {
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
   * List rules in this rule group.
   *
   * @example
   * ```ts
   * const ruleArray = await client.ruleGroups.listRules('123');
   * ```
   */
  listRules(
    id: string,
    params: RuleGroupListRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillsAPI.RuleArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/rule-groups/${id}/rules`, {
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
   * Test which transactions would be hit by the rule group. No changes will be made.
   * Limit the result if you want to.
   *
   * @example
   * ```ts
   * const transactionArray =
   *   await client.ruleGroups.testTransactions('123');
   * ```
   */
  testTransactions(
    id: string,
    params: RuleGroupTestTransactionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/rule-groups/${id}/test`, {
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
   * Fire the rule group on your transactions. Changes will be made by the rules in
   * the rule group. Limit the result if you want to.
   *
   * @example
   * ```ts
   * await client.ruleGroups.triggerRules('123');
   * ```
   */
  triggerRules(
    id: string,
    params: RuleGroupTriggerRulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { accounts, end, start, 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post(path`/v1/rule-groups/${id}/trigger`, {
      query: { accounts, end, start },
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface RuleGroupRead {
  id: string;

  attributes: RuleGroupRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace RuleGroupRead {
  export interface Attributes {
    title: string;

    active?: boolean;

    created_at?: string;

    description?: string | null;

    order?: number;

    updated_at?: string;
  }
}

export interface RuleGroupSingle {
  data: RuleGroupRead;
}

export interface RuleGroupListAllResponse {
  data: Array<RuleGroupRead>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface RuleGroupCreateParams {
  /**
   * Body param
   */
  title: string;

  /**
   * Body param
   */
  active?: boolean;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  order?: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleGroupRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleGroupUpdateParams {
  /**
   * Body param
   */
  active?: boolean;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  order?: number;

  /**
   * Body param
   */
  title?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleGroupDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleGroupListAllParams {
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

export interface RuleGroupListRulesParams {
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

export interface RuleGroupTestTransactionsParams {
  /**
   * Query param: Limit the testing of the rule group to these asset accounts or
   * liabilities. Only asset accounts and liabilities will be accepted. Other types
   * will be silently dropped.
   */
  accounts?: Array<number>;

  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the transactions the test
   * will be applied to. Both the start date and the end date must be present.
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
   * Query param: Maximum number of transactions Firefly III will try. Don't set this
   * too high, or it will take Firefly III very long to run the test. I suggest a max
   * of 200.
   */
  search_limit?: number;

  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the transactions the test
   * will be applied to. Both the start date and the end date must be present.
   */
  start?: string;

  /**
   * Query param: Maximum number of transactions the rule group can actually trigger
   * on, before Firefly III stops. I would suggest setting this to 10 or 15. Don't go
   * above the user's page size, because browsing to page 2 or 3 of a test result
   * would fire the test again, making any navigation efforts very slow.
   */
  triggered_limit?: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleGroupTriggerRulesParams {
  /**
   * Query param: Limit the triggering of the rule group to these asset accounts or
   * liabilities. Only asset accounts and liabilities will be accepted. Other types
   * will be silently dropped.
   */
  accounts?: Array<number>;

  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the transactions the actions
   * will be applied to. Both the start date and the end date must be present.
   */
  end?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the transactions the actions
   * will be applied to. Both the start date and the end date must be present.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace RuleGroups {
  export {
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
}
