// Structured catalog of the Collection & Disbursement APIs, used to drive
// the Developer Tools / API Documentation page (src/container/moola/api-docs.tsx).
// Keeping this data-driven means every endpoint gets the same professional
// treatment (params table, request body, cURL/JS examples) for free.

export type ParamLocation = 'path' | 'query' | 'body';
export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export interface ApiParam {
  name: string;
  in: ParamLocation;
  type: string;
  required: boolean;
  description: string;
  example?: string | number | boolean;
}

export interface ApiEndpoint {
  id: string;
  method: HttpMethod;
  /** Path relative to the service's external prefix, Express-style (:param). */
  path: string;
  title: string;
  description: string;
  /** All documented endpoints require a Bearer JWT unless noted otherwise. */
  auth: 'bearer' | 'static-secret' | 'none';
  /** True if calling this for real moves money / mutates state materially. */
  mutating: boolean;
  dangerNote?: string;
  isSSE?: boolean;
  params: ApiParam[];
  responseExample: { status: number; body: unknown };
  errorExample?: { status: number; body: unknown };
}

export interface ApiSection {
  id: 'auth' | 'collection' | 'disbursement';
  title: string;
  icon: string;
  externalPrefix: string; // e.g. /v1/momo
  intro: string;
  endpoints: ApiEndpoint[];
}

export const AUTH_SECTION: ApiSection = {
  id: 'auth',
  title: 'Auth & Accounts API',
  icon: 'bx bx-key',
  externalPrefix: '/v1/agency',
  intro:
    'Authenticate to get an access + refresh token pair, keep the session alive without asking the user to log in again, and read your float account balances.',
  endpoints: [
    {
      id: 'auth-login',
      method: 'POST',
      path: '/auth/login',
      title: 'Login',
      description: 'Exchanges a username/password for an access token (short-lived) and a refresh token (long-lived). Send the access token as a Bearer token on every authenticated request below.',
      auth: 'none',
      mutating: false,
      params: [
        { name: 'username', in: 'body', type: 'string', required: true, description: 'Your agent/merchant username', example: 'acme-merchant' },
        { name: 'password', in: 'body', type: 'string', required: true, description: 'Your account password', example: 'YourP@ssw0rd' },
      ],
      responseExample: {
        status: 200,
        body: {
          success: true,
          message: 'Login successful',
          data: {
            id: 102,
            name: 'Jean Mugisha',
            email: 'jean@acme.example.com',
            category: 'Corporate',
            phoneNumber: '0788123456',
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            refreshToken: 'a1b2c3d4e5f6...(hex)',
          },
        },
      },
      errorExample: { status: 401, body: { success: false, message: 'Invalid username or password' } },
    },
    {
      id: 'auth-refresh-token',
      method: 'POST',
      path: '/auth/refresh-token',
      title: 'Refresh Token',
      description: 'Exchanges a still-valid refresh token for a brand-new access + refresh token pair, so the user stays signed in without re-entering credentials. The old refresh token is invalidated immediately.',
      auth: 'none',
      mutating: false,
      params: [
        { name: 'refreshToken', in: 'body', type: 'string', required: true, description: 'The refresh token issued at login (or by a previous refresh)', example: 'a1b2c3d4e5f6...(hex)' },
      ],
      responseExample: {
        status: 200,
        body: {
          success: true,
          accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          refreshToken: 'f6e5d4c3b2a1...(hex)',
        },
      },
      errorExample: { status: 401, body: { success: false, message: 'Expired refresh token' } },
    },
    // {
    //   id: 'auth-logout',
    //   method: 'POST',
    //   path: '/auth/logout',
    //   title: 'Logout',
    //   description: 'Revokes a refresh token so it can no longer be used to mint new access tokens — call this when the user signs out.',
    //   auth: 'none',
    //   mutating: true,
    //   params: [
    //     { name: 'refreshToken', in: 'body', type: 'string', required: true, description: 'The refresh token to revoke', example: 'a1b2c3d4e5f6...(hex)' },
    //   ],
    //   responseExample: { status: 200, body: { success: true, message: 'Logged out successfully!' } },
    //   errorExample: { status: 400, body: { success: false, message: 'Invalid refresh token' } },
    // },
    {
      id: 'auth-get-accounts',
      method: 'GET',
      path: '/accounts/all/accounts/info/balance',
      title: 'Get Accounts',
      description: 'Lists every float account you hold (per currency) with its current and available balance.',
      auth: 'bearer',
      mutating: false,
      params: [],
      responseExample: {
        status: 200,
        body: {
          success: true,
          message: 'Success',
          accounts: [
            {
              accountId: 123,
              accountName: 'Agent Float A/C',
              currency: 'RWF',
              currencySymbol: 'RWF',
              balance: 50000,
              formattedBalance: '50,000 RWF',
              availableBalance: 50000,
              formattedAvailableBalance: '50,000 RWF',
              reservedAmount: 0,
              formattedReservedAmount: '0 RWF',
            },
          ],
          creditBalance: 0,
        },
      },
    },
  ],
};

export const COLLECTION_SECTION: ApiSection = {
  id: 'collection',
  title: 'Collection API',
  icon: 'bx bx-mobile-alt',
  externalPrefix: '/v1/momo',
  intro:
    'Collect mobile money from a customer (USSD push), track its status in real time, and register webhooks to be notified the moment a payment succeeds or fails.',
  endpoints: [
    {
      id: 'collection-initiate',
      method: 'POST',
      path: '/collection/initiate',
      title: 'Initiate a Collection',
      description: 'Sends a USSD payment prompt to the customer’s phone and creates a pending transaction.',
      auth: 'bearer',
      mutating: true,
      dangerNote: 'This sends a real USSD prompt to the phone number you enter and can charge that number.',
      params: [
        { name: 'provider', in: 'body', type: 'string', required: true, description: 'Mobile network code', example: 'MTN' },
        { name: 'customerAccountNumber', in: 'body', type: 'string', required: true, description: 'Payer MSISDN', example: '0788123456' },
        { name: 'customerName', in: 'body', type: 'string', required: true, description: 'Payer display name', example: 'Jean Mugisha' },
        { name: 'amount', in: 'body', type: 'number', required: true, description: 'Amount to collect', example: 5000 },
        { name: 'currencyCode', in: 'body', type: 'string', required: false, description: 'Defaults to RWF', example: 'RWF' },
        { name: 'referenceId', in: 'body', type: 'string', required: true, description: 'Your unique merchant reference — must not repeat', example: '07e35a65-77d6-4b7e-9c4c-65a765a64d7c' },
        { name: 'callbackUrl', in: 'body', type: 'string', required: false, description: 'Per-transaction webhook URL (optional if you use subscriptions)', example: 'https://merchant.example.com/webhooks/moola' },
      ],
      responseExample: {
        status: 202,
        body: {
          success: true,
          message: 'Money collection initiated successfully',
          data: {
            referenceId: 'f9d66c3e-e32f-4413-9c8a-a94c95e962e9',
            operationReferenceId: '716eaa55-3188-47d4-8c8c-acde38639961',
            status: 'pending',
            transactionMessage: 'Request sent to customer',
            transactionId: null,
          },
        },
      },
      errorExample: {
        status: 400,
        body: { success: false, message: 'Required fields: provider, customerAccountNumber, customerName, amount, referenceId' },
      },
    },
    {
      id: 'collection-get',
      method: 'GET',
      path: '/collection/:referenceId',
      title: 'Get a Collection',
      description: 'Fetch a single collection transaction by your merchant referenceId.',
      auth: 'bearer',
      mutating: false,
      params: [
        { name: 'referenceId', in: 'path', type: 'string', required: true, description: 'Your merchant reference used at initiation', example: 'e4f1340f-9cbb-447f-a3b2-8b21e20b92a1' },
      ],
      responseExample: {
        status: 200,
        body: {
          success: true,
          data: {
            referenceId: '317bb385-cd3f-4af2-8ccf-935a5ad8196a',
            operationReferenceId: 'e4f1340f-9cbb-447f-a3b2-8b21e20b92a1',
            provider: 'MTN',
            customerAccountNumber: '0788123456',
            customerName: 'Jean Mugisha',
            currencyCode: 'RWF',
            amount: 5000,
            status: 'success',
            message: 'Transaction completed',
            transactionId: '559013',
            createdAt: '2026-07-11T10:14:58.000Z',
            updatedAt: '2026-07-11T10:15:32.000Z',
          },
        },
      },
      errorExample: { status: 404, body: { success: false, message: 'Transaction not found' } },
    },
    {
      id: 'collection-agent-transactions',
      method: 'GET',
      path: '/collection/agent/transactions',
      title: 'List Your Transactions',
      description: 'List collections created by the authenticated agent/merchant, with filters and pagination.',
      auth: 'bearer',
      mutating: false,
      params: [
        { name: 'status', in: 'query', type: 'string', required: false, description: 'Filter: pending | success | failed', example: 'success' },
        { name: 'provider', in: 'query', type: 'string', required: false, description: 'Filter by provider', example: 'MTN' },
        { name: 'startDate', in: 'query', type: 'string', required: false, description: 'ISO date, inclusive', example: '2026-07-01' },
        { name: 'endDate', in: 'query', type: 'string', required: false, description: 'ISO date, inclusive', example: '2026-07-11' },
        { name: 'limit', in: 'query', type: 'number', required: false, description: 'Default 100', example: 20 },
        { name: 'offset', in: 'query', type: 'number', required: false, description: 'Default 0', example: 0 },
      ],
      responseExample: {
        status: 200,
        body: { success: true, count: 1, data: [{ referenceId: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30', amount: 5000, status: 'success', provider: 'MTN' }], pagination: { limit: 100, offset: 0 } },
      },
    },
    {
      id: 'collection-check-status',
      method: 'POST',
      path: '/collection/:referenceId/check-status',
      title: 'Force a Status Check',
      description: 'Nudges the backend to resolve a pending transaction immediately (checks provider callback, then polls the provider’s status API) instead of waiting for the next background pass.',
      auth: 'bearer',
      mutating: false,
      params: [
        { name: 'referenceId', in: 'path', type: 'string', required: true, description: 'Your merchant reference', example: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30' },
      ],
      responseExample: {
        status: 200,
        body: { success: true, message: 'Status resolved from provider push callback', data: { referenceId: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30', status: 'success', source: 'push_callback' } },
      },
      errorExample: { status: 404, body: { success: false, message: 'Transaction not found' } },
    },
    // {
    //   id: 'collection-logs',
    //   method: 'GET',
    //   path: '/collection/:referenceId/logs',
    //   title: 'Get Transaction Timeline',
    //   description: 'Returns the full stage-by-stage audit trail for a transaction — useful for support and debugging integrations.',
    //   auth: 'bearer',
    //   mutating: false,
    //   params: [
    //     { name: 'referenceId', in: 'path', type: 'string', required: true, description: 'Your merchant reference', example: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30' },
    //   ],
    //   responseExample: {
    //     status: 200,
    //     body: {
    //       success: true,
    //       count: 3,
    //       data: [
    //         { stage: 'INITIATED', message: 'Collection initiated — MTN 5000 RWF for Jean Mugisha', createdAt: '2026-07-11T10:14:58.000Z' },
    //         { stage: 'CHECKOUT_SUCCESS', message: 'Provider acknowledged — USSD prompt sent', createdAt: '2026-07-11T10:15:01.000Z' },
    //         { stage: 'RESOLVED_SUCCESS', message: 'Payment completed successfully', createdAt: '2026-07-11T10:15:32.000Z' },
    //       ],
    //     },
    //   },
    // },
    // {
    //   id: 'collection-status-stream',
    //   method: 'GET',
    //   path: '/collection/:referenceId/status-stream',
    //   title: 'Real-Time Status Stream (SSE)',
    //   description: 'Server-Sent Events stream that pushes a status update the instant the transaction resolves — no polling required. Closes automatically after 10 minutes.',
    //   auth: 'bearer',
    //   mutating: false,
    //   isSSE: true,
    //   params: [
    //     { name: 'referenceId', in: 'path', type: 'string', required: true, description: 'Your merchant reference', example: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30' },
    //   ],
    //   responseExample: {
    //     status: 200,
    //     body: { type: 'status', referenceId: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30', status: 'success', message: 'Payment completed successfully', updatedAt: '2026-07-11T10:15:32.000Z' },
    //   },
    // },
    // {
    //   id: 'collection-webhooks-register',
    //   method: 'POST',
    //   path: '/webhooks/subscriptions',
    //   title: 'Register a Webhook Subscription',
    //   description: 'Registers a callback URL to receive collection.success / collection.failed events for every future transaction — no need to pass callbackUrl on each request.',
    //   auth: 'bearer',
    //   mutating: true,
    //   dangerNote: 'This creates a real, active subscription tied to your account.',
    //   params: [
    //     { name: 'clientId', in: 'body', type: 'string', required: true, description: 'A stable identifier for you, the subscriber', example: 'acme-merchant' },
    //     { name: 'clientName', in: 'body', type: 'string', required: false, description: 'Human-readable label', example: 'Acme Ltd' },
    //     { name: 'callbackUrl', in: 'body', type: 'string', required: true, description: 'Your HTTPS endpoint to receive events', example: 'https://acme.example.com/hooks/moola' },
    //     { name: 'events', in: 'body', type: 'string', required: false, description: 'Comma-separated event names', example: 'collection.success,collection.failed' },
    //   ],
    //   responseExample: {
    //     status: 201,
    //     body: {
    //       success: true,
    //       message: 'Webhook subscription registered successfully',
    //       data: {
    //         clientId: 'acme-merchant',
    //         callbackUrl: 'https://acme.example.com/hooks/moola',
    //         events: 'collection.success,collection.failed',
    //         secret: '9f2c1e...64 hex chars (shown once)',
    //         note: "Store this secret securely. Use it to verify the X-Moola-Signature header on incoming webhooks.",
    //       },
    //     },
    //   },
    //   errorExample: { status: 400, body: { success: false, message: 'clientId and callbackUrl are required' } },
    // },
    // {
    //   id: 'collection-webhooks-list',
    //   method: 'GET',
    //   path: '/webhooks/subscriptions',
    //   title: 'List Webhook Subscriptions',
    //   description: 'List your active webhook subscriptions.',
    //   auth: 'bearer',
    //   mutating: false,
    //   params: [
    //     { name: 'clientId', in: 'query', type: 'string', required: false, description: 'Filter to one clientId', example: 'acme-merchant' },
    //   ],
    //   responseExample: {
    //     status: 200,
    //     body: { success: true, count: 1, data: [{ clientId: 'acme-merchant', callbackUrl: 'https://acme.example.com/hooks/moola', events: 'collection.success,collection.failed', active: 1 }] },
    //   },
    // },
    // {
    //   id: 'collection-webhooks-delete',
    //   method: 'DELETE',
    //   path: '/webhooks/subscriptions/:clientId',
    //   title: 'Remove a Webhook Subscription',
    //   description: 'Deactivates a subscription — the callback URL stops receiving events immediately.',
    //   auth: 'bearer',
    //   mutating: true,
    //   dangerNote: 'This immediately stops event delivery to this clientId.',
    //   params: [
    //     { name: 'clientId', in: 'path', type: 'string', required: true, description: 'The clientId to deactivate', example: 'acme-merchant' },
    //   ],
    //   responseExample: { status: 200, body: { success: true, message: 'Webhook subscription deactivated' } },
    // },
    // {
    //   id: 'collection-webhooks-logs',
    //   method: 'GET',
    //   path: '/webhooks/delivery-logs',
    //   title: 'Webhook Delivery Logs',
    //   description: 'Inspect every outbound webhook delivery attempt — HTTP status, retry count, and response body. Invaluable when a callback URL isn’t receiving events.',
    //   auth: 'bearer',
    //   mutating: false,
    //   params: [
    //     { name: 'referenceId', in: 'query', type: 'string', required: false, description: 'Filter to one transaction', example: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30' },
    //     { name: 'limit', in: 'query', type: 'number', required: false, description: 'Default 50', example: 20 },
    //     { name: 'offset', in: 'query', type: 'number', required: false, description: 'Default 0', example: 0 },
    //   ],
    //   responseExample: {
    //     status: 200,
    //     body: { success: true, count: 1, data: [{ referenceId: '4a29f6d1-8b3c-4e97-a615-7d2c9f4e8b30', callbackUrl: 'https://acme.example.com/hooks/moola', event: 'collection.success', httpStatus: 200, deliveryStatus: 'delivered', attemptCount: 1 }] },
    //   },
    // },
  ],
};

export const DISBURSEMENT_SECTION: ApiSection = {
  id: 'disbursement',
  title: 'Disbursement API',
  icon: 'bx bx-send',
  externalPrefix: '/v1/disbursement',
  intro:
    'Pay money out to a bank account or mobile wallet: register and verify a payout destination, send the payout, and get notified when it settles.',
  endpoints: [
    {
      id: 'disb-bank-accounts-create',
      method: 'POST',
      path: '/bank-accounts',
      title: 'Register a Bank Account',
      description: 'Registers a payout destination (bank or mobile wallet) for the authenticated agent.',
      auth: 'bearer',
      mutating: true,
      params: [
        { name: 'bankName', in: 'body', type: 'string', required: true, description: 'Provider code', example: 'MTN' },
        { name: 'accountNumber', in: 'body', type: 'string', required: true, description: 'MSISDN or account number', example: '0788123456' },
        { name: 'accountHolderName', in: 'body', type: 'string', required: true, description: 'Name on the account', example: 'Jean Mugisha' },
        { name: 'branchCode', in: 'body', type: 'string', required: false, description: 'Bank branch code (banks only)', example: '' },
        { name: 'swiftBic', in: 'body', type: 'string', required: false, description: 'SWIFT/BIC (banks only)', example: '' },
        { name: 'country', in: 'body', type: 'string', required: false, description: 'Defaults to RW', example: 'RW' },
        { name: 'currency', in: 'body', type: 'string', required: false, description: 'Defaults to RWF', example: 'RWF' },
      ],
      responseExample: {
        status: 201,
        body: { success: true, message: 'Bank account registered successfully', data: { id: 14, bankName: 'MTN', accountNumber: '0788123456', accountHolderName: 'Jean Mugisha', isVerified: 0, isPrimary: 1, isActive: 1 } },
      },
      errorExample: { status: 409, body: { success: false, message: 'This bank account is already registered for your profile' } },
    },
    {
      id: 'disb-bank-accounts-list',
      method: 'GET',
      path: '/bank-accounts',
      title: 'List Bank Accounts',
      description: "List the authenticated agent's registered payout destinations.",
      auth: 'bearer',
      mutating: false,
      params: [],
      responseExample: {
        status: 200,
        body: { success: true, count: 1, data: [{ id: 14, bankName: 'MTN', accountNumber: '0788123456', accountHolderName: 'Jean Mugisha', isVerified: 1, isPrimary: 1 }] },
      },
    },
    {
      id: 'disb-bank-accounts-get',
      method: 'GET',
      path: '/bank-accounts/:id',
      title: 'Get a Bank Account',
      description: 'Fetch a single registered payout destination by id.',
      auth: 'bearer',
      mutating: false,
      params: [{ name: 'id', in: 'path', type: 'number', required: true, description: 'Bank account id', example: 14 }],
      responseExample: { status: 200, body: { success: true, data: { id: 14, bankName: 'MTN', accountNumber: '0788123456', accountHolderName: 'Jean Mugisha', isVerified: 1 } } },
      errorExample: { status: 404, body: { success: false, message: 'Bank account not found' } },
    },
    {
      id: 'disb-bank-accounts-update',
      method: 'PATCH',
      path: '/bank-accounts/:id',
      title: 'Update a Bank Account',
      description: 'Updates the holder name / branch / SWIFT on a payout destination. Resets its verification status.',
      auth: 'bearer',
      mutating: true,
      params: [
        { name: 'id', in: 'path', type: 'number', required: true, description: 'Bank account id', example: 14 },
        { name: 'accountHolderName', in: 'body', type: 'string', required: false, description: 'New holder name', example: 'J. Mugisha' },
        { name: 'branchCode', in: 'body', type: 'string', required: false, description: 'New branch code', example: '' },
        { name: 'swiftBic', in: 'body', type: 'string', required: false, description: 'New SWIFT/BIC', example: '' },
      ],
      responseExample: { status: 200, body: { success: true, message: 'Bank account updated (verification reset)', data: { id: 14, isVerified: 0 } } },
    },
    {
      id: 'disb-bank-accounts-delete',
      method: 'DELETE',
      path: '/bank-accounts/:id',
      title: 'Remove a Bank Account',
      description: 'Deactivates a payout destination. Fails if it is currently the primary account.',
      auth: 'bearer',
      mutating: true,
      dangerNote: 'This deactivates the account — make sure it is not your primary payout destination.',
      params: [{ name: 'id', in: 'path', type: 'number', required: true, description: 'Bank account id', example: 14 }],
      responseExample: { status: 200, body: { success: true, message: 'Bank account deactivated' } },
      errorExample: { status: 409, body: { success: false, message: 'Cannot remove the primary bank account. Set another as primary first.' } },
    },
    {
      id: 'disb-bank-accounts-verify',
      method: 'POST',
      path: '/bank-accounts/:id/verify',
      title: 'Verify a Bank Account',
      description: 'Confirms the account holder name with the provider via NameLookup before it can receive a disbursement.',
      auth: 'bearer',
      mutating: true,
      params: [{ name: 'id', in: 'path', type: 'number', required: true, description: 'Bank account id', example: 14 }],
      responseExample: { status: 200, body: { success: true, message: 'Bank account verified successfully', data: { id: 14, isVerified: 1, verifiedName: 'JEAN MUGISHA', provider: 'MTN' } } },
      errorExample: { status: 422, body: { success: false, message: 'Recipient could not be verified. Please check the account number and try again.' } },
    },
    {
      id: 'disb-bank-accounts-primary',
      method: 'POST',
      path: '/bank-accounts/:id/primary',
      title: 'Set Primary Bank Account',
      description: 'Marks a bank account as the default payout destination.',
      auth: 'bearer',
      mutating: true,
      params: [{ name: 'id', in: 'path', type: 'number', required: true, description: 'Bank account id', example: 14 }],
      responseExample: { status: 200, body: { success: true, message: 'Primary bank account updated' } },
    },
    {
      id: 'disb-initiate',
      method: 'POST',
      path: '/disbursements/initiate',
      title: 'Initiate a Disbursement',
      description: 'Pays out real money to a verified bank account. Debits your balance immediately and sends the payout to the mobile network for settlement.',
      auth: 'bearer',
      mutating: true,
      dangerNote: 'This sends a real payout and debits your account — minimum 500 RWF.',
      params: [
        { name: 'bankAccountId', in: 'body', type: 'number', required: true, description: 'A verified bank account id', example: 14 },
        { name: 'amount', in: 'body', type: 'number', required: true, description: 'Minimum 500 RWF', example: 25000 },
        { name: 'description', in: 'body', type: 'string', required: false, description: 'Payout narration', example: 'Agent commission payout' },
        { name: 'callbackUrl', in: 'body', type: 'string', required: false, description: 'Per-transaction webhook URL', example: 'https://acme.example.com/hooks/moola' },
      ],
      responseExample: {
        status: 202,
        body: {
          success: true,
          message: 'Disbursement initiated — awaiting settlement from mobile network',
          data: { referenceId: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90', externalReferenceId: 'DSB-LX9K3F2-A1B2', pgReferenceId: 'PG-REF-77213', status: 'PROCESSING', amount: 25000, bankName: 'MTN', accountNumber: '0788123456', accountHolderName: 'JEAN MUGISHA' },
        },
      },
      errorExample: { status: 422, body: { success: false, message: 'Bank account must be verified before disbursement. Please verify it first.' } },
    },
    {
      id: 'disb-get',
      method: 'GET',
      path: '/disbursements/:id',
      title: 'Get a Disbursement',
      description: 'Fetch a single disbursement by id.',
      auth: 'bearer',
      mutating: false,
      params: [{ name: 'id', in: 'path', type: 'string', required: true, description: 'Disbursement id (UUID)', example: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90' }],
      responseExample: {
        status: 200,
        body: { success: true, data: { id: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90', bankName: 'MTN', accountNumber: '0788123456', amount: 25000, status: 'COMPLETED', externalReferenceId: 'DSB-LX9K3F2-A1B2' } },
      },
      errorExample: { status: 404, body: { success: false, message: 'Disbursement not found' } },
    },
    {
      id: 'disb-agent-list',
      method: 'GET',
      path: '/disbursements/agent',
      title: 'List Your Disbursements',
      description: 'List the authenticated agent’s disbursements, with filters and pagination.',
      auth: 'bearer',
      mutating: false,
      params: [
        { name: 'status', in: 'query', type: 'string', required: false, description: 'PROCESSING | COMPLETED | FAILED', example: 'COMPLETED' },
        { name: 'startDate', in: 'query', type: 'string', required: false, description: 'ISO date, inclusive', example: '2026-07-01' },
        { name: 'endDate', in: 'query', type: 'string', required: false, description: 'ISO date, inclusive', example: '2026-07-11' },
        { name: 'limit', in: 'query', type: 'number', required: false, description: 'Default 50', example: 20 },
        { name: 'offset', in: 'query', type: 'number', required: false, description: 'Default 0', example: 0 },
      ],
      responseExample: {
        status: 200,
        body: { success: true, count: 1, data: [{ id: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90', amount: 25000, status: 'COMPLETED', bankName: 'MTN' }] },
      },
    },
    {
      id: 'disb-logs',
      method: 'GET',
      path: '/disbursements/:id/logs',
      title: 'Get Disbursement Timeline',
      description: 'Full stage-by-stage audit trail for a disbursement.',
      auth: 'bearer',
      mutating: false,
      params: [{ name: 'id', in: 'path', type: 'string', required: true, description: 'Disbursement id', example: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90' }],
      responseExample: {
        status: 200,
        body: { success: true, count: 2, data: [{ stage: 'INITIATED', message: 'Disbursement initiated — 25000 RWF' }, { stage: 'RESOLVED_SUCCESS', message: 'Disbursement COMPLETED' }] },
      },
    },
    {
      id: 'disb-status-stream',
      method: 'GET',
      path: '/disbursements/:id/status-stream',
      title: 'Real-Time Status Stream (SSE)',
      description: 'Server-Sent Events stream for live disbursement status — PROCESSING, COMPLETED, or FAILED.',
      auth: 'bearer',
      mutating: false,
      isSSE: true,
      params: [{ name: 'id', in: 'path', type: 'string', required: true, description: 'Disbursement id', example: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90' }],
      responseExample: { status: 200, body: { type: 'status', referenceId: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90', status: 'COMPLETED' } },
    },
    {
      id: 'disb-name-lookup',
      method: 'POST',
      path: '/disbursements/name-lookup',
      title: 'Name Lookup',
      description: 'Resolves the account holder name for a phone/account number before you register or pay it — no money moves.',
      auth: 'bearer',
      mutating: false,
      params: [{ name: 'accountNumber', in: 'body', type: 'string', required: true, description: 'MSISDN or account number', example: '0788123456' }],
      responseExample: { status: 200, body: { success: true, data: { accountName: 'JEAN MUGISHA', provider: 'MTN', accountNumber: '0788123456', message: 'Lookup successful' } } },
      errorExample: { status: 422, body: { success: false, message: 'Recipient could not be verified. Please check the account number and try again.' } },
    },
    {
      id: 'disb-balance',
      method: 'GET',
      path: '/disbursements/balance',
      title: 'Check Disbursement Balance',
      description: 'Reads your live disbursement wallet balance with the provider.',
      auth: 'bearer',
      mutating: false,
      params: [],
      responseExample: { status: 200, body: { success: true, data: { balance: 1250000, message: 'Balance retrieved' } } },
      errorExample: { status: 503, body: { success: false, message: 'Disbursement balance is temporarily unavailable. Please try again later.' } },
    },
    {
      id: 'disb-webhooks-register',
      method: 'POST',
      path: '/webhooks/subscriptions',
      title: 'Register a Webhook Subscription',
      description: 'Registers a callback URL to receive disbursement.completed / disbursement.failed events for every future payout.',
      auth: 'bearer',
      mutating: true,
      dangerNote: 'This creates a real, active subscription tied to your account.',
      params: [
        { name: 'clientId', in: 'body', type: 'string', required: true, description: 'A stable identifier for you, the subscriber', example: 'acme-merchant' },
        { name: 'clientName', in: 'body', type: 'string', required: false, description: 'Human-readable label', example: 'Acme Ltd' },
        { name: 'callbackUrl', in: 'body', type: 'string', required: true, description: 'Your HTTPS endpoint to receive events', example: 'https://acme.example.com/hooks/moola-payouts' },
        { name: 'events', in: 'body', type: 'string', required: false, description: 'Comma-separated event names', example: 'disbursement.completed,disbursement.failed' },
      ],
      responseExample: {
        status: 201,
        body: {
          success: true,
          message: 'Webhook subscription registered successfully',
          data: { clientId: 'acme-merchant', callbackUrl: 'https://acme.example.com/hooks/moola-payouts', events: 'disbursement.completed,disbursement.failed', secret: '9f2c1e...64 hex chars (shown once)' },
        },
      },
      errorExample: { status: 400, body: { success: false, message: 'clientId and callbackUrl are required' } },
    },
    {
      id: 'disb-webhooks-list',
      method: 'GET',
      path: '/webhooks/subscriptions',
      title: 'List Webhook Subscriptions',
      description: 'List your active disbursement webhook subscriptions.',
      auth: 'bearer',
      mutating: false,
      params: [{ name: 'clientId', in: 'query', type: 'string', required: false, description: 'Filter to one clientId', example: 'acme-merchant' }],
      responseExample: { status: 200, body: { success: true, count: 1, data: [{ clientId: 'acme-merchant', events: 'disbursement.completed,disbursement.failed', active: 1 }] } },
    },
    {
      id: 'disb-webhooks-delete',
      method: 'DELETE',
      path: '/webhooks/subscriptions/:clientId',
      title: 'Remove a Webhook Subscription',
      description: 'Deactivates a subscription immediately.',
      auth: 'bearer',
      mutating: true,
      dangerNote: 'This immediately stops event delivery to this clientId.',
      params: [{ name: 'clientId', in: 'path', type: 'string', required: true, description: 'The clientId to deactivate', example: 'acme-merchant' }],
      responseExample: { status: 200, body: { success: true, message: 'Webhook subscription deactivated' } },
    },
    {
      id: 'disb-webhooks-logs',
      method: 'GET',
      path: '/webhooks/delivery-logs',
      title: 'Webhook Delivery Logs',
      description: 'Inspect every outbound disbursement webhook delivery attempt.',
      auth: 'bearer',
      mutating: false,
      params: [
        { name: 'referenceId', in: 'query', type: 'string', required: false, description: 'Filter to one disbursement', example: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90' },
        { name: 'limit', in: 'query', type: 'number', required: false, description: 'Default 50', example: 20 },
        { name: 'offset', in: 'query', type: 'number', required: false, description: 'Default 0', example: 0 },
      ],
      responseExample: {
        status: 200,
        body: { success: true, count: 1, data: [{ referenceId: '3fa1b2c4-5e6d-4a8b-9c1f-8e2d6a4b7c90', event: 'disbursement.completed', httpStatus: 200, deliveryStatus: 'delivered' }] },
      },
    },
  ],
};

export const API_SECTIONS: ApiSection[] = [AUTH_SECTION, COLLECTION_SECTION, DISBURSEMENT_SECTION];
