// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RulesAPI from './rules';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import * as BillsAPI from './bills';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * These endpoints can be used to manage all of the user&#039;s rules. Also includes triggers to execute or test rules and individual triggers.
 */
export class Rules extends APIResource {
  /**
   * Creates a new rule. The data required can be submitted as a JSON body or as a
   * list of parameters.
   *
   * @example
   * ```ts
   * const ruleSingle = await client.rules.create({
   *   actions: [
   *     { type: 'set_category', value: 'Daily groceries' },
   *   ],
   *   rule_group_id: '81',
   *   title: 'First rule title.',
   *   trigger: 'store-journal',
   *   triggers: [
   *     { type: 'from_account_starts', value: 'tag1' },
   *   ],
   * });
   * ```
   */
  create(params: RuleCreateParams, options?: RequestOptions): APIPromise<RuleSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/rules', {
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
   * Get a single rule.
   *
   * @example
   * ```ts
   * const ruleSingle = await client.rules.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: RuleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RuleSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/rules/${id}`, {
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
   * Update existing rule.
   *
   * @example
   * ```ts
   * const ruleSingle = await client.rules.update('123');
   * ```
   */
  update(id: string, params: RuleUpdateParams, options?: RequestOptions): APIPromise<RuleSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/rules/${id}`, {
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
   * List all rules.
   *
   * @example
   * ```ts
   * const ruleArray = await client.rules.list();
   * ```
   */
  list(
    params: RuleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillsAPI.RuleArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/rules', {
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
   * Delete an rule.
   *
   * @example
   * ```ts
   * await client.rules.delete('123');
   * ```
   */
  delete(
    id: string,
    params: RuleDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/rules/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Test which transactions would be hit by the rule. No changes will be made. Limit
   * the result if you want to.
   *
   * @example
   * ```ts
   * const transactionArray = await client.rules.test('123');
   * ```
   */
  test(
    id: string,
    params: RuleTestParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.TransactionArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/rules/${id}/test`, {
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
   * the group. Limit the result if you want to.
   *
   * @example
   * ```ts
   * await client.rules.trigger('123');
   * ```
   */
  trigger(
    id: string,
    params: RuleTriggerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { accounts, end, start, 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post(path`/v1/rules/${id}/trigger`, {
      query: { accounts, end, start },
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

/**
 * The type of thing this action will do. A limited set is possible.
 */
export type RuleActionKeyword =
  | 'user_action'
  | 'set_category'
  | 'clear_category'
  | 'set_budget'
  | 'clear_budget'
  | 'add_tag'
  | 'remove_tag'
  | 'remove_all_tags'
  | 'set_description'
  | 'append_description'
  | 'prepend_description'
  | 'set_source_account'
  | 'set_destination_account'
  | 'set_notes'
  | 'append_notes'
  | 'prepend_notes'
  | 'clear_notes'
  | 'link_to_bill'
  | 'convert_withdrawal'
  | 'convert_deposit'
  | 'convert_transfer'
  | 'delete_transaction';

export interface RuleRead {
  id: string;

  attributes: RuleRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace RuleRead {
  export interface Attributes {
    actions: Array<Attributes.Action>;

    /**
     * ID of the rule group under which the rule must be stored. Either this field or
     * rule_group_title is mandatory.
     */
    rule_group_id: string;

    title: string;

    /**
     * Which action is necessary for the rule to fire? Use either store-journal,
     * update-journal or manual-activation.
     */
    trigger: RulesAPI.RuleTriggerType;

    triggers: Array<Attributes.Trigger>;

    /**
     * Whether or not the rule is even active. Default is true.
     */
    active?: boolean;

    created_at?: string;

    description?: string;

    order?: number;

    /**
     * Title of the rule group under which the rule must be stored. Either this field
     * or rule_group_id is mandatory.
     */
    rule_group_title?: string;

    /**
     * If this value is true and the rule is triggered, other rules after this one in
     * the group will be skipped. Default value is false.
     */
    stop_processing?: boolean;

    /**
     * If the rule is set to be strict, ALL triggers must hit in order for the rule to
     * fire. Otherwise, just one is enough. Default value is true.
     */
    strict?: boolean;

    updated_at?: string;
  }

  export namespace Attributes {
    export interface Action {
      /**
       * The type of thing this action will do. A limited set is possible.
       */
      type: RulesAPI.RuleActionKeyword;

      /**
       * The accompanying value the action will set, change or update. Can be empty, but
       * for some types this value is mandatory.
       */
      value: string | null;

      id?: string;

      /**
       * If the action is active. Defaults to true.
       */
      active?: boolean;

      created_at?: string;

      /**
       * Order of the action
       */
      order?: number;

      /**
       * When true, other actions will not be fired after this action has fired. Defaults
       * to false.
       */
      stop_processing?: boolean;

      updated_at?: string;
    }

    export interface Trigger {
      /**
       * The type of thing this trigger responds to. A limited set is possible
       */
      type: RulesAPI.RuleTriggerKeyword;

      /**
       * The accompanying value the trigger responds to. This value is often mandatory,
       * but this depends on the trigger.
       */
      value: string;

      id?: string;

      /**
       * If the trigger is active. Defaults to true.
       */
      active?: boolean;

      created_at?: string;

      /**
       * Order of the trigger
       */
      order?: number;

      /**
       * If 'prohibited' is true, this rule trigger will be negated. 'Description is'
       * will become 'Description is NOT' etc.
       */
      prohibited?: boolean;

      /**
       * When true, other triggers will not be checked if this trigger was triggered.
       * Defaults to false.
       */
      stop_processing?: boolean;

      updated_at?: string;
    }
  }
}

export interface RuleSingle {
  data: RuleRead;
}

/**
 * The type of thing this trigger responds to. A limited set is possible
 */
export type RuleTriggerKeyword =
  | 'from_account_starts'
  | 'from_account_ends'
  | 'from_account_is'
  | 'from_account_contains'
  | 'to_account_starts'
  | 'to_account_ends'
  | 'to_account_is'
  | 'to_account_contains'
  | 'amount_less'
  | 'amount_exactly'
  | 'amount_more'
  | 'description_starts'
  | 'description_ends'
  | 'description_contains'
  | 'description_is'
  | 'transaction_type'
  | 'category_is'
  | 'budget_is'
  | 'tag_is'
  | 'currency_is'
  | 'has_attachments'
  | 'has_no_category'
  | 'has_any_category'
  | 'has_no_budget'
  | 'has_any_budget'
  | 'has_no_tag'
  | 'has_any_tag'
  | 'notes_contains'
  | 'notes_starts'
  | 'notes_end'
  | 'notes_are'
  | 'no_notes'
  | 'any_notes'
  | 'source_account_is'
  | 'destination_account_is'
  | 'source_account_starts';

/**
 * Which action is necessary for the rule to fire? Use either store-journal,
 * update-journal or manual-activation.
 */
export type RuleTriggerType = 'store-journal' | 'update-journal' | 'manual-activation';

export interface RuleCreateParams {
  /**
   * Body param
   */
  actions: Array<RuleCreateParams.Action>;

  /**
   * Body param: ID of the rule group under which the rule must be stored. Either
   * this field or rule_group_title is mandatory.
   */
  rule_group_id: string;

  /**
   * Body param
   */
  title: string;

  /**
   * Body param: Which action is necessary for the rule to fire? Use either
   * store-journal, update-journal or manual-activation.
   */
  trigger: RuleTriggerType;

  /**
   * Body param
   */
  triggers: Array<RuleCreateParams.Trigger>;

  /**
   * Body param: Whether or not the rule is even active. Default is true.
   */
  active?: boolean;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  order?: number;

  /**
   * Body param: Title of the rule group under which the rule must be stored. Either
   * this field or rule_group_id is mandatory.
   */
  rule_group_title?: string;

  /**
   * Body param: If this value is true and the rule is triggered, other rules after
   * this one in the group will be skipped. Default value is false.
   */
  stop_processing?: boolean;

  /**
   * Body param: If the rule is set to be strict, ALL triggers must hit in order for
   * the rule to fire. Otherwise, just one is enough. Default value is true.
   */
  strict?: boolean;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace RuleCreateParams {
  export interface Action {
    /**
     * The type of thing this action will do. A limited set is possible.
     */
    type: RulesAPI.RuleActionKeyword;

    /**
     * The accompanying value the action will set, change or update. Can be empty, but
     * for some types this value is mandatory.
     */
    value: string | null;

    /**
     * If the action is active. Defaults to true.
     */
    active?: boolean;

    /**
     * Order of the action
     */
    order?: number;

    /**
     * When true, other actions will not be fired after this action has fired. Defaults
     * to false.
     */
    stop_processing?: boolean;
  }

  export interface Trigger {
    /**
     * The type of thing this trigger responds to. A limited set is possible
     */
    type: RulesAPI.RuleTriggerKeyword;

    /**
     * The accompanying value the trigger responds to. This value is often mandatory,
     * but this depends on the trigger.
     */
    value: string;

    /**
     * If the trigger is active. Defaults to true.
     */
    active?: boolean;

    /**
     * Order of the trigger
     */
    order?: number;

    /**
     * If 'prohibited' is true, this rule trigger will be negated. 'Description is'
     * will become 'Description is NOT' etc.
     */
    prohibited?: boolean;

    /**
     * When true, other triggers will not be checked if this trigger was triggered.
     * Defaults to false.
     */
    stop_processing?: boolean;
  }
}

export interface RuleRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleUpdateParams {
  /**
   * Body param
   */
  actions?: Array<RuleUpdateParams.Action>;

  /**
   * Body param: Whether or not the rule is even active. Default is true.
   */
  active?: boolean;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  order?: number;

  /**
   * Body param: ID of the rule group under which the rule must be stored. Either
   * this field or rule_group_title is mandatory.
   */
  rule_group_id?: string;

  /**
   * Body param: If this value is true and the rule is triggered, other rules after
   * this one in the group will be skipped. Default value is false.
   */
  stop_processing?: boolean;

  /**
   * Body param: If the rule is set to be strict, ALL triggers must hit in order for
   * the rule to fire. Otherwise, just one is enough. Default value is true.
   */
  strict?: boolean;

  /**
   * Body param
   */
  title?: string;

  /**
   * Body param: Which action is necessary for the rule to fire? Use either
   * store-journal, update-journal or manual-activation.
   */
  trigger?: RuleTriggerType;

  /**
   * Body param
   */
  triggers?: Array<RuleUpdateParams.Trigger>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace RuleUpdateParams {
  export interface Action {
    /**
     * If the action is active.
     */
    active?: boolean;

    /**
     * Order of the action
     */
    order?: number;

    /**
     * When true, other actions will not be fired after this action has fired.
     */
    stop_processing?: boolean;

    /**
     * The type of thing this action will do. A limited set is possible.
     */
    type?: RulesAPI.RuleActionKeyword;

    /**
     * The accompanying value the action will set, change or update. Can be empty, but
     * for some types this value is mandatory.
     */
    value?: string | null;
  }

  export interface Trigger {
    /**
     * If the trigger is active.
     */
    active?: boolean;

    /**
     * Order of the trigger
     */
    order?: number;

    /**
     * When true, other triggers will not be checked if this trigger was triggered.
     */
    stop_processing?: boolean;

    /**
     * The type of thing this trigger responds to. A limited set is possible
     */
    type?: RulesAPI.RuleTriggerKeyword;

    /**
     * The accompanying value the trigger responds to. This value is often mandatory,
     * but this depends on the trigger. If the rule trigger is something like 'has any
     * tag', submit the string 'true'.
     */
    value?: string;
  }
}

export interface RuleListParams {
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

export interface RuleDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleTestParams {
  /**
   * Query param: Limit the testing of the rule to these asset accounts or
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
   * Query param: A date formatted YYYY-MM-DD, to limit the transactions the test
   * will be applied to. Both the start date and the end date must be present.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface RuleTriggerParams {
  /**
   * Query param: Limit the triggering of the rule to these asset accounts or
   * liabilities. Only asset accounts and liabilities will be accepted. Other types
   * will be silently dropped.
   */
  accounts?: Array<number>;

  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the transactions the actions
   * will be applied to. If the end date is not present, it will be set to today. If
   * you use this field, both the start date and the end date must be present.
   */
  end?: string;

  /**
   * Query param: A date formatted YYYY-MM-DD, to limit the transactions the actions
   * will be applied to. If the start date is not present, it will be set to one year
   * ago. If you use this field, both the start date and the end date must be
   * present.
   */
  start?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Rules {
  export {
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
}
