// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AccountsAPI from '../../accounts';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * These endpoints can be used to manage the user&#039;s webhooks and triggers them if necessary.
 */
export class Attempts extends APIResource {
  /**
   * When a webhook message fails to send it will store the failure in an "attempt".
   * You can view and analyse these. Webhooks messages that receive too many attempts
   * (failures) will not be fired. You must first clear out old attempts and try
   * again. This endpoint shows you the details of a single attempt. The ID of the
   * attempt must match the corresponding webhook and webhook message.
   *
   * @example
   * ```ts
   * const attempt =
   *   await client.webhooks.messages.attempts.retrieve(1, {
   *     id: '123',
   *     messageId: 1,
   *   });
   * ```
   */
  retrieve(
    attemptID: number,
    params: AttemptRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AttemptRetrieveResponse> {
    const { id, messageId, 'X-Trace-Id': xTraceID } = params;
    return this._client.get(path`/v1/webhooks/${id}/messages/${messageId}/attempts/${attemptID}`, {
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
   * When a webhook message fails to send it will store the failure in an "attempt".
   * You can view and analyse these. Webhook messages that receive too many attempts
   * (failures) will not be sent again. You must first clear out old attempts before
   * the message can go out again.
   *
   * @example
   * ```ts
   * const attempts =
   *   await client.webhooks.messages.attempts.list(1, {
   *     id: '123',
   *   });
   * ```
   */
  list(
    messageID: number,
    params: AttemptListParams,
    options?: RequestOptions,
  ): APIPromise<AttemptListResponse> {
    const { id, 'X-Trace-Id': xTraceID, ...query } = params;
    return this._client.get(path`/v1/webhooks/${id}/messages/${messageID}/attempts`, {
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
   * Delete a webhook message attempt. If you delete all attempts for a webhook
   * message, Firefly III will (once again) assume all is well with the webhook
   * message and will try to send it again.
   *
   * @example
   * ```ts
   * await client.webhooks.messages.attempts.delete(1, {
   *   id: '123',
   *   messageId: 1,
   * });
   * ```
   */
  delete(attemptID: number, params: AttemptDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id, messageId, 'X-Trace-Id': xTraceID } = params;
    return this._client.delete(path`/v1/webhooks/${id}/messages/${messageId}/attempts/${attemptID}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export interface WebhookAttempt {
  id: string;

  attributes: WebhookAttempt.Attributes;

  /**
   * Immutable value
   */
  type: string;
}

export namespace WebhookAttempt {
  export interface Attributes {
    created_at?: string;

    /**
     * Internal log for this attempt. May contain sensitive user data.
     */
    logs?: string | null;

    /**
     * Webhook receiver response for this attempt, if any. May contain sensitive user
     * data.
     */
    response?: string | null;

    /**
     * The HTTP status code of the error, if any.
     */
    status_code?: number | null;

    updated_at?: string;

    /**
     * The ID of the webhook message this attempt belongs to.
     */
    webhook_message_id?: string;
  }
}

export interface AttemptRetrieveResponse {
  data: WebhookAttempt;
}

export interface AttemptListResponse {
  data: Array<WebhookAttempt>;

  meta: AccountsAPI.Meta;
}

export interface AttemptRetrieveParams {
  /**
   * Path param: The webhook ID.
   */
  id: string;

  /**
   * Path param: The webhook message ID.
   */
  messageId: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AttemptListParams {
  /**
   * Path param: The webhook ID.
   */
  id: string;

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

export interface AttemptDeleteParams {
  /**
   * Path param: The webhook ID.
   */
  id: string;

  /**
   * Path param: The webhook message ID.
   */
  messageId: number;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Attempts {
  export {
    type WebhookAttempt as WebhookAttempt,
    type AttemptRetrieveResponse as AttemptRetrieveResponse,
    type AttemptListResponse as AttemptListResponse,
    type AttemptRetrieveParams as AttemptRetrieveParams,
    type AttemptListParams as AttemptListParams,
    type AttemptDeleteParams as AttemptDeleteParams,
  };
}
