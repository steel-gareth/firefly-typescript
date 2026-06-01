// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from '../../accounts';
import * as AttemptsAPI from './attempts';
import {
  AttemptDeleteParams,
  AttemptListParams,
  AttemptListResponse,
  AttemptRetrieveParams,
  AttemptRetrieveResponse,
  Attempts,
  WebhookAttempt,
} from './attempts';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * These endpoints can be used to manage the user&#039;s webhooks and triggers them if necessary.
 */
export class Messages extends APIResource {
  attempts: AttemptsAPI.Attempts = new AttemptsAPI.Attempts(this._client);

  /**
   * When a webhook is triggered it will store the actual content of the webhook in a
   * webhook message. You can view and analyse a single one using this endpoint.
   *
   * @example
   * ```ts
   * const message = await client.webhooks.messages.retrieve(1, {
   *   id: '123',
   * });
   * ```
   */
  retrieve(
    messageID: number,
    params: MessageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MessageRetrieveResponse> {
    const { id, 'X-Trace-Id': xTraceID } = params;
    return this._client.get(path`/v1/webhooks/${id}/messages/${messageID}`, {
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
   * When a webhook is triggered the actual message that will be send is stored in a
   * "message". You can view and analyse these messages.
   *
   * @example
   * ```ts
   * const messages = await client.webhooks.messages.list('123');
   * ```
   */
  list(
    id: string,
    params: MessageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessageListResponse> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/webhooks/${id}/messages`, {
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
   * Delete a webhook message. Any time a webhook is triggered the message is stored
   * before it's sent. You can delete them before or after sending.
   *
   * @example
   * ```ts
   * await client.webhooks.messages.delete(1, { id: '123' });
   * ```
   */
  delete(messageID: number, params: MessageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id, 'X-Trace-Id': xTraceID } = params;
    return this._client.delete(path`/v1/webhooks/${id}/messages/${messageID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface WebhookMessage {
  id: string;

  attributes: WebhookMessage.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace WebhookMessage {
  export interface Attributes {
    created_at?: string;

    /**
     * If this message has errored out.
     */
    errored?: boolean;

    /**
     * The actual message that is sent or will be sent as JSON string.
     */
    message?: string | null;

    /**
     * If this message is sent yet.
     */
    sent?: boolean;

    updated_at?: string;

    /**
     * Long UUID string for identification of this webhook message.
     */
    uuid?: string;

    /**
     * The ID of the webhook this message belongs to.
     */
    webhook_id?: string;
  }
}

export interface MessageRetrieveResponse {
  data: WebhookMessage;
}

export interface MessageListResponse {
  data: Array<WebhookMessage>;

  meta: AccountsAPI.Meta;
}

export interface MessageRetrieveParams {
  /**
   * Path param: The webhook ID.
   */
  id: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface MessageListParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface MessageDeleteParams {
  /**
   * Path param: The webhook ID.
   */
  id: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

Messages.Attempts = Attempts;

export declare namespace Messages {
  export {
    type WebhookMessage as WebhookMessage,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageListResponse as MessageListResponse,
    type MessageRetrieveParams as MessageRetrieveParams,
    type MessageListParams as MessageListParams,
    type MessageDeleteParams as MessageDeleteParams,
  };

  export {
    Attempts as Attempts,
    type WebhookAttempt as WebhookAttempt,
    type AttemptRetrieveResponse as AttemptRetrieveResponse,
    type AttemptListResponse as AttemptListResponse,
    type AttemptRetrieveParams as AttemptRetrieveParams,
    type AttemptListParams as AttemptListParams,
    type AttemptDeleteParams as AttemptDeleteParams,
  };
}
