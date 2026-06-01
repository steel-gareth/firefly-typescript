// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AttachmentsAPI from './attachments';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Endpoints to manage the attachments of the authenticated user, including up- and downloading of the files.
 */
export class Attachments extends APIResource {
  /**
   * Creates a new attachment. The data required can be submitted as a JSON body or
   * as a list of parameters. You cannot use this endpoint to upload the actual file
   * data (see below). This endpoint only creates the attachment object.
   *
   * @example
   * ```ts
   * const attachmentSingle = await client.attachments.create({
   *   attachable_id: '134',
   *   attachable_type: 'Bill',
   *   filename: 'file.pdf',
   * });
   * ```
   */
  create(params: AttachmentCreateParams, options?: RequestOptions): APIPromise<AttachmentSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.post('/v1/attachments', {
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
   * Get a single attachment. This endpoint only returns the available metadata for
   * the attachment. Actual file data is handled in two other endpoints (see below).
   *
   * @example
   * ```ts
   * const attachmentSingle = await client.attachments.retrieve(
   *   '123',
   * );
   * ```
   */
  retrieve(
    id: string,
    params: AttachmentRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AttachmentSingle> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/attachments/${id}`, {
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
   * Update the meta data for an existing attachment. This endpoint does not allow
   * you to upload or download data. For that, see below.
   *
   * @example
   * ```ts
   * const attachmentSingle = await client.attachments.update(
   *   '123',
   * );
   * ```
   */
  update(id: string, params: AttachmentUpdateParams, options?: RequestOptions): APIPromise<AttachmentSingle> {
    const { 'X-Trace-Id': xTraceID, ...body } = params;
    return this._client.put(path`/v1/attachments/${id}`, {
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
   * This endpoint lists all attachments.
   *
   * @example
   * ```ts
   * const attachmentArray = await client.attachments.list();
   * ```
   */
  list(
    params: AttachmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountsAPI.AttachmentArray> {
    const { 'X-Trace-Id': xTraceID, ...query } = params ?? {};
    return this._client.get('/v1/attachments', {
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
   * With this endpoint you delete an attachment, including any stored file data.
   *
   * @example
   * ```ts
   * await client.attachments.delete('123');
   * ```
   */
  delete(
    id: string,
    params: AttachmentDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.delete(path`/v1/attachments/${id}`, {
      ...options,
      headers: buildHeaders([
        { Accept: '*/*', ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint allows you to download the binary content of a transaction. It
   * will be sent to you as a download, using the content type
   * "application/octet-stream" and content disposition "attachment;
   * filename=example.pdf".
   *
   * @example
   * ```ts
   * const response = await client.attachments.download('123');
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(
    id: string,
    params: AttachmentDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.get(path`/v1/attachments/${id}/download`, {
      ...options,
      headers: buildHeaders([
        {
          Accept: 'application/octet-stream',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Use this endpoint to upload (and possible overwrite) the file contents of an
   * attachment. Simply put the entire file in the body as binary data.
   *
   * @example
   * ```ts
   * await client.attachments.upload(
   *   '123',
   *   fs.createReadStream('path/to/file'),
   * );
   * ```
   */
  upload(
    id: string,
    body: string | ArrayBuffer | ArrayBufferView | Blob | DataView,
    params: AttachmentUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { 'X-Trace-Id': xTraceID } = params ?? {};
    return this._client.post(path`/v1/attachments/${id}/upload`, {
      body: body,
      ...options,
      headers: buildHeaders([
        {
          'Content-Type': 'application/octet-stream',
          Accept: '*/*',
          ...(xTraceID != null ? { 'X-Trace-Id': xTraceID } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * The object class to which the attachment must be linked.
 */
export type AttachableType = 'Account' | 'Budget' | 'Bill' | 'TransactionJournal' | 'PiggyBank' | 'Tag';

export interface AttachmentRead {
  id: string;

  attributes: AttachmentRead.Attributes;

  links: ObjectLink;

  /**
   * Immutable value
   */
  type: string;
}

export namespace AttachmentRead {
  export interface Attributes {
    /**
     * ID of the model this attachment is linked to.
     */
    attachable_id?: string;

    /**
     * The object class to which the attachment must be linked.
     */
    attachable_type?: AttachmentsAPI.AttachableType;

    created_at?: string;

    download_url?: string;

    filename?: string;

    /**
     * Hash of the file for basic duplicate detection.
     */
    hash?: string;

    mime?: string;

    notes?: string | null;

    size?: number;

    title?: string | null;

    updated_at?: string;

    upload_url?: string;
  }
}

export interface AttachmentSingle {
  data: AttachmentRead;
}

export interface ObjectLink {
  '0'?: ObjectLink._0;

  self?: string;
}

export namespace ObjectLink {
  export interface _0 {
    rel?: string;

    uri?: string;
  }
}

export interface AttachmentCreateParams {
  /**
   * Body param: ID of the model this attachment is linked to.
   */
  attachable_id: string;

  /**
   * Body param: The object class to which the attachment must be linked.
   */
  attachable_type: AttachableType;

  /**
   * Body param
   */
  filename: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param
   */
  title?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AttachmentRetrieveParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AttachmentUpdateParams {
  /**
   * Body param
   */
  filename?: string;

  /**
   * Body param
   */
  notes?: string | null;

  /**
   * Body param
   */
  title?: string;

  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AttachmentListParams {
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

export interface AttachmentDeleteParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AttachmentDownloadParams {
  /**
   * Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export interface AttachmentUploadParams {
  /**
   * Header param: Unique identifier associated with this request.
   */
  'X-Trace-Id'?: string;
}

export declare namespace Attachments {
  export {
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
}
