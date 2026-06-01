// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhooksAPI from './webhooks';
import * as AccountsAPI from '../accounts';
import * as AttachmentsAPI from '../attachments';
import * as MessagesAPI from './messages/messages';
import {
  MessageDeleteParams,
  MessageListParams,
  MessageListResponse,
  MessageRetrieveParams,
  MessageRetrieveResponse,
  Messages,
  WebhookMessage,
} from './messages/messages';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * These endpoints can be used to manage the user&#039;s webhooks and triggers them if necessary.
 */
export class Webhooks extends APIResource {
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Creates a new webhook. The data required can be submitted as a JSON body or as a
   * list of parameters. The webhook will be given a random secret.
   *
   * @example
   * ```ts
   * const webhookSingle = await client.webhooks.create({
   *   delivery: {},
   *   response: {},
   *   title: 'Update magic mirror on new transaction',
   *   trigger: {},
   *   url: 'https://example.com',
   * });
   * ```
   */
  create(params: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/webhooks', {
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
   * Gets all info of a single webhook.
   *
   * @example
   * ```ts
   * const webhookSingle = await client.webhooks.retrieve('123');
   * ```
   */
  retrieve(
    id: string,
    params: WebhookRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/webhooks/${id}`, {
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
   * Update an existing webhook's information. If you wish to reset the secret,
   * submit any value as the "secret". Firefly III will take this as a hint and reset
   * the secret of the webhook.
   *
   * @example
   * ```ts
   * const webhookSingle = await client.webhooks.update('123');
   * ```
   */
  update(id: string, params: WebhookUpdateParams, options?: RequestOptions): APIPromise<WebhookSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/webhooks/${id}`, {
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
   * List all the user's webhooks.
   *
   * @example
   * ```ts
   * const webhooks = await client.webhooks.list();
   * ```
   */
  list(
    params: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<WebhookListResponse> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/webhooks', {
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
   * Delete a webhook.
   *
   * @example
   * ```ts
   * await client.webhooks.delete('123');
   * ```
   */
  delete(
    id: string,
    params: WebhookDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/webhooks/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint will submit any open messages for this webhook. This is an
   * asynchronous operation, so you can't see the result. Refresh the webhook message
   * and/or the webhook message attempts to see the results. This may take some time
   * if the webhook receiver is slow.
   *
   * @example
   * ```ts
   * await client.webhooks.submit('123');
   * ```
   */
  submit(
    id: string,
    params: WebhookSubmitParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post(path`/v1/webhooks/${id}/submit`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint will execute this webhook for a given transaction ID. This is an
   * asynchronous operation, so you can't see the result. Refresh the webhook message
   * and/or the webhook message attempts to see the results. This may take some time
   * if the webhook receiver is slow.
   *
   * @example
   * ```ts
   * await client.webhooks.triggerTransaction('123', {
   *   id: '123',
   * });
   * ```
   */
  triggerTransaction(
    transactionID: string,
    params: WebhookTriggerTransactionParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id, 'X-Trace-Id': xTraceID } = params;
    return this._client.post(path`/v1/webhooks/${id}/trigger-transaction/${transactionID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface Webhook {
  id: string;

  attributes: Webhook.Attributes;

  links: AttachmentsAPI.ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace Webhook {
  export interface Attributes {
    delivery: unknown;

    response: unknown;

    /**
     * A title for the webhook for easy recognition.
     */
    title: string;

    trigger: unknown;

    /**
     * The URL of the webhook. Has to start with `https`.
     */
    url: string;

    /**
     * Boolean to indicate if the webhook is active
     */
    active?: boolean;

    created_at?: string;

    deliveries?: Array<WebhooksAPI.WebhookDelivery>;

    responses?: Array<WebhooksAPI.WebhookResponse>;

    /**
     * A 24-character secret for the webhook. It's generated by Firefly III when saving
     * a new webhook. If you submit a new secret through the PUT endpoint it will
     * generate a new secret for the selected webhook, a new secret bearing no relation
     * to whatever you just submitted.
     */
    secret?: string;

    triggers?: Array<WebhooksAPI.WebhookTrigger>;

    updated_at?: string;
  }
}

/**
 * Format of the delivered response.
 */
export type WebhookDelivery = 'JSON';

/**
 * Indicator for what Firefly III will deliver to the webhook URL.
 */
export type WebhookResponse = 'TRANSACTIONS' | 'ACCOUNTS' | 'BUDGET' | 'RELEVANT' | 'NONE';

export interface WebhookSingle {
  data: Webhook;
}

/**
 * The trigger for the webhook.
 */
export type WebhookTrigger =
  | 'ANY'
  | 'STORE_TRANSACTION'
  | 'UPDATE_TRANSACTION'
  | 'DESTROY_TRANSACTION'
  | 'STORE_BUDGET'
  | 'UPDATE_BUDGET'
  | 'DESTROY_BUDGET'
  | 'STORE_UPDATE_BUDGET_LIMIT';

export interface WebhookListResponse {
  data: Array<Webhook>;

  links: AccountsAPI.PageLink;

  meta: AccountsAPI.Meta;
}

export interface WebhookCreateParams {
  /**
   * Body param
   */
  delivery: unknown;

  /**
   * Body param
   */
  response: unknown;

  /**
   * Body param: A title for the webhook for easy recognition.
   */
  title: string;

  /**
   * Body param
   */
  trigger: unknown;

  /**
   * Body param: The URL of the webhook. Has to start with `https`.
   */
  url: string;

  /**
   * Body param: Boolean to indicate if the webhook is active
   */
  active?: boolean;

  /**
   * Body param
   */
  deliveries?: Array<WebhookDelivery>;

  /**
   * Body param
   */
  responses?: Array<WebhookResponse>;

  /**
   * Body param
   */
  triggers?: Array<WebhookTrigger>;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface WebhookRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface WebhookUpdateParams {
  /**
   * Body param: Boolean to indicate if the webhook is active
   */
  active?: boolean;

  /**
   * Body param
   */
  deliveries?: Array<WebhookDelivery>;

  /**
   * Body param
   */
  responses?: Array<WebhookResponse>;

  /**
   * Body param: A 24-character secret for the webhook. It's generated by Firefly III
   * when saving a new webhook. If you submit a new secret through the PUT endpoint
   * it will generate a new secret for the selected webhook, a new secret bearing no
   * relation to whatever you just submitted.
   */
  secret?: string;

  /**
   * Body param: A title for the webhook for easy recognition.
   */
  title?: string;

  /**
   * Body param
   */
  triggers?: Array<WebhookTrigger>;

  /**
   * Body param: The URL of the webhook. Has to start with `https`.
   */
  url?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface WebhookListParams {
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

export interface WebhookDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface WebhookSubmitParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface WebhookTriggerTransactionParams {
  /**
   * Path param: The webhook ID.
   */
  id: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

Webhooks.Messages = Messages;

export declare namespace Webhooks {
  export {
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

  export {
    Messages as Messages,
    type WebhookMessage as WebhookMessage,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
    type MessageDeleteParams as MessageDeleteParams,
  };
}
