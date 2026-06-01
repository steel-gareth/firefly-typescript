// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import * as AttachmentsAPI from './attachments';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints to control and manage all of the user&#039;s piggy banks and related objects and information.
 */
export class PiggyBanks extends APIResource {
  /**
   * Creates a new piggy bank. The data required can be submitted as a JSON body or
   * as a list of parameters.
   *
   * @example
   * ```ts
   * const piggyBankSingle = await client.piggyBanks.create({
   *   account_id: {},
   *   name: 'New digital camera',
   *   start_date: '2026-04-01',
   *   target_amount: '123.45',
   * });
   * ```
   */
  create(params: PiggyBankCreateParams, options?: RequestOptions): APIPromise<PiggyBankSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/piggy-banks', {
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
   * Get a single piggy bank.
   *
   * @example
   * ```ts
   * const piggyBankSingle = await client.piggyBanks.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(
    id: string,
    params: PiggyBankRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PiggyBankSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/piggy-banks/${id}`, {
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
   * Update existing piggy bank.
   *
   * @example
   * ```ts
   * const piggyBankSingle = await client.piggyBanks.update(
   *   '123',
   * );
   * ```
   */
  update(id: string, params: PiggyBankUpdateParams, options?: RequestOptions): APIPromise<PiggyBankSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/piggy-banks/${id}`, {
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
   * List all piggy banks.
   *
   * @example
   * ```ts
   * const piggyBankArray = await client.piggyBanks.list();
   * ```
   */
  list(
    params: PiggyBankListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.PiggyBankArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/piggy-banks', {
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
   * Delete a piggy bank.
   *
   * @example
   * ```ts
   * await client.piggyBanks.delete('123');
   * ```
   */
  delete(
    id: string,
    params: PiggyBankDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/piggy-banks/${id}`, {
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
   *   await client.piggyBanks.listAttachments('123');
   * ```
   */
  listAttachments(
    id: string,
    params: PiggyBankListAttachmentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/piggy-banks/${id}/attachments`, {
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
   * List all events linked to a piggy bank (adding and removing money).
   *
   * @example
   * ```ts
   * const piggyBankEventArray =
   *   await client.piggyBanks.listEvents('123');
   * ```
   */
  listEvents(
    id: string,
    params: PiggyBankListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PiggyBankEventArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get(path`/v1/piggy-banks/${id}/events`, {
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

export interface PiggyBankEventArray {
  data: Array<PiggyBankEventArray.Data>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export namespace PiggyBankEventArray {
  export interface Data {
    id: string;

    attributes: Data.Attributes;

    links: AttachmentsAPI.ObjectLink;

    /**
     * Immutable value
     */
    type: string;
  }

  export namespace Data {
    export interface Attributes {
      amount?: string;

      created_at?: string;

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
       * Indicates whether the object has a currency setting. If false, the object uses
       * the administration's primary currency.
       */
      object_has_currency_setting?: boolean;

      pc_amount?: string;

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
       * The transaction group associated with the event.
       */
      transaction_group_id?: string | null;

      /**
       * The journal associated with the event.
       */
      transaction_journal_id?: string | null;

      updated_at?: string;
    }
  }
}

export interface PiggyBankRead {
  id: string;

  attributes: PiggyBankRead.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace PiggyBankRead {
  export interface Attributes {
    account_id: unknown;

    name: string;

    target_amount: string | null;

    accounts?: Array<Attributes.Account>;

    active?: boolean;

    created_at?: string;

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

    current_amount?: string;

    left_to_save?: string | null;

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
     * Indicates whether the object has a currency setting. If false, the object uses
     * the administration's primary currency.
     */
    object_has_currency_setting?: boolean;

    order?: number;

    /**
     * The current amount in the primary currency of the administration.
     */
    pc_current_amount?: string;

    pc_left_to_save?: string | null;

    pc_save_per_month?: string | null;

    /**
     * The target amount in the primary currency of the administration.
     */
    pc_target_amount?: string | null;

    /**
     * The percentage of the target amount that has been saved, if a target amount is
     * set.
     */
    percentage?: number | null;

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

    save_per_month?: string | null;

    /**
     * The date you started with this piggy bank.
     */
    start_date?: string;

    /**
     * The date you intend to finish saving money.
     */
    target_date?: string | null;

    updated_at?: string;
  }

  export namespace Attributes {
    export interface Account {
      /**
       * The ID of the account.
       */
      account_id?: string;

      current_amount?: string;

      name?: string;

      /**
       * If convertToPrimary is on, this will show the amount in the primary currency.
       */
      pc_current_amount?: string;
    }
  }
}

export interface PiggyBankSingle {
  data: PiggyBankRead;
}

export interface PiggyBankCreateParams {
  /**
   * Body param
   */
  account_id: unknown;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param: The date you started with this piggy bank.
   */
  start_date: string;

  /**
   * Body param
   */
  target_amount: string | null;

  /**
   * Body param
   */
  accounts?: Array<PiggyBankCreateParams.Account>;

  /**
   * Body param
   */
  current_amount?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param: The group ID of the group this object is part of. NULL if no group.
   */
  object_group_id?: string | null;

  /**
   * Body param: The name of the group. NULL if no group.
   */
  object_group_title?: string | null;

  /**
   * Body param
   */
  order?: number;

  /**
   * Body param: The date you intend to finish saving money.
   */
  target_date?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace PiggyBankCreateParams {
  export interface Account {
    /**
     * The ID of the account.
     */
    id: string | null;

    /**
     * The amount saved currently.
     */
    current_amount?: string;

    /**
     * The name of the account.
     */
    name?: string | null;
  }
}

export interface PiggyBankRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface PiggyBankUpdateParams {
  /**
   * Body param
   */
  accounts?: Array<PiggyBankUpdateParams.Account>;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param: The group ID of the group this object is part of. NULL if no group.
   */
  object_group_id?: string | null;

  /**
   * Body param: The name of the group. NULL if no group.
   */
  object_group_title?: string | null;

  /**
   * Body param
   */
  order?: number;

  /**
   * Body param: The date you started with this piggy bank.
   */
  start_date?: string;

  /**
   * Body param
   */
  target_amount?: string | null;

  /**
   * Body param: The date you intend to finish saving money.
   */
  target_date?: string | null;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export namespace PiggyBankUpdateParams {
  export interface Account {
    id: unknown;

    /**
     * The ID of the account.
     */
    account_id?: string | null;

    /**
     * The amount saved currently.
     */
    current_amount?: string | null;

    /**
     * The name of the account.
     */
    name?: string | null;
  }
}

export interface PiggyBankListParams {
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

export interface PiggyBankDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface PiggyBankListAttachmentsParams {
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

export interface PiggyBankListEventsParams {
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

export declare namespace PiggyBanks {
  export {
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
}
