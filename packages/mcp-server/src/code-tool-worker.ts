// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';
import Fuse from 'fuse.js';
import ts from 'typescript';
import { WorkerOutput } from './code-tool-types';
import { Firefly, ClientOptions } from 'firefly';

async function tseval(code: string) {
  return import('data:application/typescript;charset=utf-8;base64,' + Buffer.from(code).toString('base64'));
}

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { Firefly } from "firefly";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: Firefly)`
    : `const run: (${functionSource.client}: Firefly) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: lineNumber } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    const line = codeWithImport.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.autocomplete.listAccounts',
    'client.autocomplete.listBills',
    'client.autocomplete.listBudgets',
    'client.autocomplete.listCategories',
    'client.autocomplete.listCurrencies',
    'client.autocomplete.listCurrenciesWithCode',
    'client.autocomplete.listObjectGroups',
    'client.autocomplete.listPiggyBanks',
    'client.autocomplete.listPiggyBanksWithBalance',
    'client.autocomplete.listRecurringTransactions',
    'client.autocomplete.listRuleGroups',
    'client.autocomplete.listRules',
    'client.autocomplete.listSubscriptions',
    'client.autocomplete.listTags',
    'client.autocomplete.listTransactionTypes',
    'client.autocomplete.listTransactions',
    'client.autocomplete.listTransactionsWithID',
    'client.chart.account.retrieveOverview',
    'client.chart.balance.retrieveBalance',
    'client.chart.budget.retrieveOverview',
    'client.chart.category.retrieveOverview',
    'client.data.destroy',
    'client.data.purge',
    'client.data.bulk.updateTransactions',
    'client.data.export.exportAccounts',
    'client.data.export.exportBills',
    'client.data.export.exportBudgets',
    'client.data.export.exportCategories',
    'client.data.export.exportPiggyBanks',
    'client.data.export.exportRecurring',
    'client.data.export.exportRules',
    'client.data.export.exportTags',
    'client.data.export.exportTransactions',
    'client.insight.expense.getTotal',
    'client.insight.expense.listByAssetAccount',
    'client.insight.expense.listByBill',
    'client.insight.expense.listByBudget',
    'client.insight.expense.listByCategory',
    'client.insight.expense.listByExpenseAccount',
    'client.insight.expense.listByTag',
    'client.insight.expense.listWithoutBill',
    'client.insight.expense.listWithoutBudget',
    'client.insight.expense.listWithoutCategory',
    'client.insight.expense.listWithoutTag',
    'client.insight.income.getTotal',
    'client.insight.income.listByAssetAccount',
    'client.insight.income.listByCategory',
    'client.insight.income.listByRevenueAccount',
    'client.insight.income.listByTag',
    'client.insight.income.listWithoutCategory',
    'client.insight.income.listWithoutTag',
    'client.insight.transfer.getTotal',
    'client.insight.transfer.listByAssetAccount',
    'client.insight.transfer.listByCategory',
    'client.insight.transfer.listByTag',
    'client.insight.transfer.listWithoutCategory',
    'client.insight.transfer.listWithoutTag',
    'client.accounts.create',
    'client.accounts.delete',
    'client.accounts.list',
    'client.accounts.listAttachments',
    'client.accounts.listPiggyBanks',
    'client.accounts.listTransactions',
    'client.accounts.retrieve',
    'client.accounts.update',
    'client.attachments.create',
    'client.attachments.delete',
    'client.attachments.download',
    'client.attachments.list',
    'client.attachments.retrieve',
    'client.attachments.update',
    'client.attachments.upload',
    'client.availableBudgets.list',
    'client.availableBudgets.retrieve',
    'client.bills.create',
    'client.bills.delete',
    'client.bills.list',
    'client.bills.listAttachments',
    'client.bills.listRules',
    'client.bills.listTransactions',
    'client.bills.retrieve',
    'client.bills.update',
    'client.budgets.create',
    'client.budgets.delete',
    'client.budgets.list',
    'client.budgets.listAttachments',
    'client.budgets.listTransactions',
    'client.budgets.listTransactionsWithoutBudget',
    'client.budgets.retrieve',
    'client.budgets.update',
    'client.budgets.limits.create',
    'client.budgets.limits.delete',
    'client.budgets.limits.list0',
    'client.budgets.limits.list1',
    'client.budgets.limits.listTransactions',
    'client.budgets.limits.retrieve',
    'client.budgets.limits.update',
    'client.categories.create',
    'client.categories.delete',
    'client.categories.list',
    'client.categories.listAttachments',
    'client.categories.listTransactions',
    'client.categories.retrieve',
    'client.categories.update',
    'client.exchangeRates.create',
    'client.exchangeRates.createByCurrencies',
    'client.exchangeRates.createByDate',
    'client.exchangeRates.delete',
    'client.exchangeRates.deleteAllByCurrencies',
    'client.exchangeRates.deleteByDate',
    'client.exchangeRates.list',
    'client.exchangeRates.listByCurrencies',
    'client.exchangeRates.retrieve',
    'client.exchangeRates.retrieveByDate',
    'client.exchangeRates.update',
    'client.exchangeRates.updateByDate',
    'client.linkTypes.create',
    'client.linkTypes.delete',
    'client.linkTypes.list',
    'client.linkTypes.listTransactions',
    'client.linkTypes.retrieve',
    'client.linkTypes.update',
    'client.transactionLinks.create',
    'client.transactionLinks.delete',
    'client.transactionLinks.list',
    'client.transactionLinks.retrieve',
    'client.transactionLinks.update',
    'client.objectGroups.delete',
    'client.objectGroups.list',
    'client.objectGroups.listBills',
    'client.objectGroups.listPiggyBanks',
    'client.objectGroups.retrieve',
    'client.objectGroups.update',
    'client.piggyBanks.create',
    'client.piggyBanks.delete',
    'client.piggyBanks.list',
    'client.piggyBanks.listAttachments',
    'client.piggyBanks.listEvents',
    'client.piggyBanks.retrieve',
    'client.piggyBanks.update',
    'client.recurrences.create',
    'client.recurrences.delete',
    'client.recurrences.list',
    'client.recurrences.listTransactions',
    'client.recurrences.retrieve',
    'client.recurrences.triggerTransaction',
    'client.recurrences.update',
    'client.ruleGroups.create',
    'client.ruleGroups.delete',
    'client.ruleGroups.listAll',
    'client.ruleGroups.listRules',
    'client.ruleGroups.retrieve',
    'client.ruleGroups.testTransactions',
    'client.ruleGroups.triggerRules',
    'client.ruleGroups.update',
    'client.rules.create',
    'client.rules.delete',
    'client.rules.list',
    'client.rules.retrieve',
    'client.rules.test',
    'client.rules.trigger',
    'client.rules.update',
    'client.tags.create',
    'client.tags.delete',
    'client.tags.list',
    'client.tags.listAttachments',
    'client.tags.listTransactions',
    'client.tags.retrieve',
    'client.tags.update',
    'client.currencies.create',
    'client.currencies.delete',
    'client.currencies.disable',
    'client.currencies.enable',
    'client.currencies.list',
    'client.currencies.listAccounts',
    'client.currencies.listAvailableBudgets',
    'client.currencies.listBills',
    'client.currencies.listBudgetLimits',
    'client.currencies.listRecurrences',
    'client.currencies.listRules',
    'client.currencies.listTransactions',
    'client.currencies.retrieve',
    'client.currencies.update',
    'client.currencies.primary.makePrimary',
    'client.currencies.primary.retrieve',
    'client.transactionJournals.delete',
    'client.transactionJournals.listLinks',
    'client.transactionJournals.retrieve',
    'client.transactions.create',
    'client.transactions.delete',
    'client.transactions.list',
    'client.transactions.listAttachments',
    'client.transactions.listPiggyBankEvents',
    'client.transactions.retrieve',
    'client.transactions.update',
    'client.userGroups.list',
    'client.userGroups.retrieve',
    'client.userGroups.update',
    'client.search.accounts',
    'client.search.transactions',
    'client.summary.retrieveBasic',
    'client.about.retrieveInfo',
    'client.about.retrieveUser',
    'client.batch.finish',
    'client.configuration.retrieve',
    'client.configuration.retrieveValue',
    'client.configuration.updateValue',
    'client.cron.run',
    'client.users.create',
    'client.users.delete',
    'client.users.list',
    'client.users.retrieve',
    'client.users.update',
    'client.preferences.create',
    'client.preferences.list',
    'client.preferences.retrieve',
    'client.preferences.update',
    'client.webhooks.create',
    'client.webhooks.delete',
    'client.webhooks.list',
    'client.webhooks.retrieve',
    'client.webhooks.submit',
    'client.webhooks.triggerTransaction',
    'client.webhooks.update',
    'client.webhooks.messages.delete',
    'client.webhooks.messages.list',
    'client.webhooks.messages.retrieve',
    'client.webhooks.messages.attempts.delete',
    'client.webhooks.messages.attempts.list',
    'client.webhooks.messages.attempts.retrieve',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const cause = error.cause instanceof Error ? `: ${error.cause.message}` : '';
  const message = error.name ? `${error.name}: ${error.message}${cause}` : `${error.message}${cause}`;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as { opts: ClientOptions; code: string };

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        is_error: true,
        result: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        is_error: true,
        result: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        log_lines: [],
        err_lines: [],
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new Firefly({
    ...opts,
  });

  const log_lines: string[] = [];
  const err_lines: string[] = [];
  const originalConsole = globalThis.console;
  globalThis.console = {
    ...originalConsole,
    log: (...args: unknown[]) => {
      log_lines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      err_lines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    run_ = (await tseval(`${code}\nexport default run;`)).default;
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      is_error: false,
      result,
      log_lines,
      err_lines,
    } satisfies WorkerOutput);
  } catch (e) {
    return Response.json(
      {
        is_error: true,
        result: parseError(code, e),
        log_lines,
        err_lines,
      } satisfies WorkerOutput,
      { status: 400, statusText: 'Code execution error' },
    );
  } finally {
    globalThis.console = originalConsole;
  }
};

export default { fetch };
