# Autocomplete

Types:

- <code><a href="./src/resources/autocomplete.ts">AutocompleteBill</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListAccountsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListBillsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListBudgetsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListCategoriesResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListCurrenciesResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListCurrenciesWithCodeResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListObjectGroupsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListPiggyBanksResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListPiggyBanksWithBalanceResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListRecurringTransactionsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListRuleGroupsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListRulesResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListSubscriptionsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListTagsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListTransactionTypesResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListTransactionsResponse</a></code>
- <code><a href="./src/resources/autocomplete.ts">AutocompleteListTransactionsWithIDResponse</a></code>

Methods:

- <code title="get /v1/autocomplete/accounts">client.autocomplete.<a href="./src/resources/autocomplete.ts">listAccounts</a>({ ...params }) -> AutocompleteListAccountsResponse</code>
- <code title="get /v1/autocomplete/bills">client.autocomplete.<a href="./src/resources/autocomplete.ts">listBills</a>({ ...params }) -> AutocompleteListBillsResponse</code>
- <code title="get /v1/autocomplete/budgets">client.autocomplete.<a href="./src/resources/autocomplete.ts">listBudgets</a>({ ...params }) -> AutocompleteListBudgetsResponse</code>
- <code title="get /v1/autocomplete/categories">client.autocomplete.<a href="./src/resources/autocomplete.ts">listCategories</a>({ ...params }) -> AutocompleteListCategoriesResponse</code>
- <code title="get /v1/autocomplete/currencies">client.autocomplete.<a href="./src/resources/autocomplete.ts">listCurrencies</a>({ ...params }) -> AutocompleteListCurrenciesResponse</code>
- <code title="get /v1/autocomplete/currencies-with-code">client.autocomplete.<a href="./src/resources/autocomplete.ts">listCurrenciesWithCode</a>({ ...params }) -> AutocompleteListCurrenciesWithCodeResponse</code>
- <code title="get /v1/autocomplete/object-groups">client.autocomplete.<a href="./src/resources/autocomplete.ts">listObjectGroups</a>({ ...params }) -> AutocompleteListObjectGroupsResponse</code>
- <code title="get /v1/autocomplete/piggy-banks">client.autocomplete.<a href="./src/resources/autocomplete.ts">listPiggyBanks</a>({ ...params }) -> AutocompleteListPiggyBanksResponse</code>
- <code title="get /v1/autocomplete/piggy-banks-with-balance">client.autocomplete.<a href="./src/resources/autocomplete.ts">listPiggyBanksWithBalance</a>({ ...params }) -> AutocompleteListPiggyBanksWithBalanceResponse</code>
- <code title="get /v1/autocomplete/recurring">client.autocomplete.<a href="./src/resources/autocomplete.ts">listRecurringTransactions</a>({ ...params }) -> AutocompleteListRecurringTransactionsResponse</code>
- <code title="get /v1/autocomplete/rule-groups">client.autocomplete.<a href="./src/resources/autocomplete.ts">listRuleGroups</a>({ ...params }) -> AutocompleteListRuleGroupsResponse</code>
- <code title="get /v1/autocomplete/rules">client.autocomplete.<a href="./src/resources/autocomplete.ts">listRules</a>({ ...params }) -> AutocompleteListRulesResponse</code>
- <code title="get /v1/autocomplete/subscriptions">client.autocomplete.<a href="./src/resources/autocomplete.ts">listSubscriptions</a>({ ...params }) -> AutocompleteListSubscriptionsResponse</code>
- <code title="get /v1/autocomplete/tags">client.autocomplete.<a href="./src/resources/autocomplete.ts">listTags</a>({ ...params }) -> AutocompleteListTagsResponse</code>
- <code title="get /v1/autocomplete/transaction-types">client.autocomplete.<a href="./src/resources/autocomplete.ts">listTransactionTypes</a>({ ...params }) -> AutocompleteListTransactionTypesResponse</code>
- <code title="get /v1/autocomplete/transactions">client.autocomplete.<a href="./src/resources/autocomplete.ts">listTransactions</a>({ ...params }) -> AutocompleteListTransactionsResponse</code>
- <code title="get /v1/autocomplete/transactions-with-id">client.autocomplete.<a href="./src/resources/autocomplete.ts">listTransactionsWithID</a>({ ...params }) -> AutocompleteListTransactionsWithIDResponse</code>

# Chart

## Account

Types:

- <code><a href="./src/resources/chart/account.ts">ChartDataPoint</a></code>
- <code><a href="./src/resources/chart/account.ts">ChartDataSet</a></code>
- <code><a href="./src/resources/chart/account.ts">AccountRetrieveOverviewResponse</a></code>

Methods:

- <code title="get /v1/chart/account/overview">client.chart.account.<a href="./src/resources/chart/account.ts">retrieveOverview</a>({ ...params }) -> AccountRetrieveOverviewResponse</code>

## Balance

Types:

- <code><a href="./src/resources/chart/balance.ts">BalanceRetrieveBalanceResponse</a></code>

Methods:

- <code title="get /v1/chart/balance/balance">client.chart.balance.<a href="./src/resources/chart/balance.ts">retrieveBalance</a>({ ...params }) -> BalanceRetrieveBalanceResponse</code>

## Budget

Types:

- <code><a href="./src/resources/chart/budget.ts">BudgetRetrieveOverviewResponse</a></code>

Methods:

- <code title="get /v1/chart/budget/overview">client.chart.budget.<a href="./src/resources/chart/budget.ts">retrieveOverview</a>({ ...params }) -> BudgetRetrieveOverviewResponse</code>

## Category

Types:

- <code><a href="./src/resources/chart/category.ts">CategoryRetrieveOverviewResponse</a></code>

Methods:

- <code title="get /v1/chart/category/overview">client.chart.category.<a href="./src/resources/chart/category.ts">retrieveOverview</a>({ ...params }) -> CategoryRetrieveOverviewResponse</code>

# Data

Methods:

- <code title="delete /v1/data/destroy">client.data.<a href="./src/resources/data/data.ts">destroy</a>({ ...params }) -> void</code>
- <code title="delete /v1/data/purge">client.data.<a href="./src/resources/data/data.ts">purge</a>({ ...params }) -> void</code>

## Bulk

Methods:

- <code title="post /v1/data/bulk/transactions">client.data.bulk.<a href="./src/resources/data/bulk.ts">updateTransactions</a>({ ...params }) -> void</code>

## Export

Types:

- <code><a href="./src/resources/data/export.ts">ExportFileFilter</a></code>

Methods:

- <code title="get /v1/data/export/accounts">client.data.export.<a href="./src/resources/data/export.ts">exportAccounts</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/bills">client.data.export.<a href="./src/resources/data/export.ts">exportBills</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/budgets">client.data.export.<a href="./src/resources/data/export.ts">exportBudgets</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/categories">client.data.export.<a href="./src/resources/data/export.ts">exportCategories</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/piggy-banks">client.data.export.<a href="./src/resources/data/export.ts">exportPiggyBanks</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/recurring">client.data.export.<a href="./src/resources/data/export.ts">exportRecurring</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/rules">client.data.export.<a href="./src/resources/data/export.ts">exportRules</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/tags">client.data.export.<a href="./src/resources/data/export.ts">exportTags</a>({ ...params }) -> Response</code>
- <code title="get /v1/data/export/transactions">client.data.export.<a href="./src/resources/data/export.ts">exportTransactions</a>({ ...params }) -> Response</code>

# Insight

## Expense

Types:

- <code><a href="./src/resources/insight/expense.ts">InsightGroupEntry</a></code>
- <code><a href="./src/resources/insight/expense.ts">InsightTotalEntry</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseGetTotalResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListByAssetAccountResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListByBillResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListByBudgetResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListByCategoryResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListByExpenseAccountResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListByTagResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListWithoutBillResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListWithoutBudgetResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListWithoutCategoryResponse</a></code>
- <code><a href="./src/resources/insight/expense.ts">ExpenseListWithoutTagResponse</a></code>

Methods:

- <code title="get /v1/insight/expense/total">client.insight.expense.<a href="./src/resources/insight/expense.ts">getTotal</a>({ ...params }) -> ExpenseGetTotalResponse</code>
- <code title="get /v1/insight/expense/asset">client.insight.expense.<a href="./src/resources/insight/expense.ts">listByAssetAccount</a>({ ...params }) -> ExpenseListByAssetAccountResponse</code>
- <code title="get /v1/insight/expense/bill">client.insight.expense.<a href="./src/resources/insight/expense.ts">listByBill</a>({ ...params }) -> ExpenseListByBillResponse</code>
- <code title="get /v1/insight/expense/budget">client.insight.expense.<a href="./src/resources/insight/expense.ts">listByBudget</a>({ ...params }) -> ExpenseListByBudgetResponse</code>
- <code title="get /v1/insight/expense/category">client.insight.expense.<a href="./src/resources/insight/expense.ts">listByCategory</a>({ ...params }) -> ExpenseListByCategoryResponse</code>
- <code title="get /v1/insight/expense/expense">client.insight.expense.<a href="./src/resources/insight/expense.ts">listByExpenseAccount</a>({ ...params }) -> ExpenseListByExpenseAccountResponse</code>
- <code title="get /v1/insight/expense/tag">client.insight.expense.<a href="./src/resources/insight/expense.ts">listByTag</a>({ ...params }) -> ExpenseListByTagResponse</code>
- <code title="get /v1/insight/expense/no-bill">client.insight.expense.<a href="./src/resources/insight/expense.ts">listWithoutBill</a>({ ...params }) -> ExpenseListWithoutBillResponse</code>
- <code title="get /v1/insight/expense/no-budget">client.insight.expense.<a href="./src/resources/insight/expense.ts">listWithoutBudget</a>({ ...params }) -> ExpenseListWithoutBudgetResponse</code>
- <code title="get /v1/insight/expense/no-category">client.insight.expense.<a href="./src/resources/insight/expense.ts">listWithoutCategory</a>({ ...params }) -> ExpenseListWithoutCategoryResponse</code>
- <code title="get /v1/insight/expense/no-tag">client.insight.expense.<a href="./src/resources/insight/expense.ts">listWithoutTag</a>({ ...params }) -> ExpenseListWithoutTagResponse</code>

## Income

Types:

- <code><a href="./src/resources/insight/income.ts">IncomeGetTotalResponse</a></code>
- <code><a href="./src/resources/insight/income.ts">IncomeListByAssetAccountResponse</a></code>
- <code><a href="./src/resources/insight/income.ts">IncomeListByCategoryResponse</a></code>
- <code><a href="./src/resources/insight/income.ts">IncomeListByRevenueAccountResponse</a></code>
- <code><a href="./src/resources/insight/income.ts">IncomeListByTagResponse</a></code>
- <code><a href="./src/resources/insight/income.ts">IncomeListWithoutCategoryResponse</a></code>
- <code><a href="./src/resources/insight/income.ts">IncomeListWithoutTagResponse</a></code>

Methods:

- <code title="get /v1/insight/income/total">client.insight.income.<a href="./src/resources/insight/income.ts">getTotal</a>({ ...params }) -> IncomeGetTotalResponse</code>
- <code title="get /v1/insight/income/asset">client.insight.income.<a href="./src/resources/insight/income.ts">listByAssetAccount</a>({ ...params }) -> IncomeListByAssetAccountResponse</code>
- <code title="get /v1/insight/income/category">client.insight.income.<a href="./src/resources/insight/income.ts">listByCategory</a>({ ...params }) -> IncomeListByCategoryResponse</code>
- <code title="get /v1/insight/income/revenue">client.insight.income.<a href="./src/resources/insight/income.ts">listByRevenueAccount</a>({ ...params }) -> IncomeListByRevenueAccountResponse</code>
- <code title="get /v1/insight/income/tag">client.insight.income.<a href="./src/resources/insight/income.ts">listByTag</a>({ ...params }) -> IncomeListByTagResponse</code>
- <code title="get /v1/insight/income/no-category">client.insight.income.<a href="./src/resources/insight/income.ts">listWithoutCategory</a>({ ...params }) -> IncomeListWithoutCategoryResponse</code>
- <code title="get /v1/insight/income/no-tag">client.insight.income.<a href="./src/resources/insight/income.ts">listWithoutTag</a>({ ...params }) -> IncomeListWithoutTagResponse</code>

## Transfer

Types:

- <code><a href="./src/resources/insight/transfer.ts">TransferGetTotalResponse</a></code>
- <code><a href="./src/resources/insight/transfer.ts">TransferListByAssetAccountResponse</a></code>
- <code><a href="./src/resources/insight/transfer.ts">TransferListByCategoryResponse</a></code>
- <code><a href="./src/resources/insight/transfer.ts">TransferListByTagResponse</a></code>
- <code><a href="./src/resources/insight/transfer.ts">TransferListWithoutCategoryResponse</a></code>
- <code><a href="./src/resources/insight/transfer.ts">TransferListWithoutTagResponse</a></code>

Methods:

- <code title="get /v1/insight/transfer/total">client.insight.transfer.<a href="./src/resources/insight/transfer.ts">getTotal</a>({ ...params }) -> TransferGetTotalResponse</code>
- <code title="get /v1/insight/transfer/asset">client.insight.transfer.<a href="./src/resources/insight/transfer.ts">listByAssetAccount</a>({ ...params }) -> TransferListByAssetAccountResponse</code>
- <code title="get /v1/insight/transfer/category">client.insight.transfer.<a href="./src/resources/insight/transfer.ts">listByCategory</a>({ ...params }) -> TransferListByCategoryResponse</code>
- <code title="get /v1/insight/transfer/tag">client.insight.transfer.<a href="./src/resources/insight/transfer.ts">listByTag</a>({ ...params }) -> TransferListByTagResponse</code>
- <code title="get /v1/insight/transfer/no-category">client.insight.transfer.<a href="./src/resources/insight/transfer.ts">listWithoutCategory</a>({ ...params }) -> TransferListWithoutCategoryResponse</code>
- <code title="get /v1/insight/transfer/no-tag">client.insight.transfer.<a href="./src/resources/insight/transfer.ts">listWithoutTag</a>({ ...params }) -> TransferListWithoutTagResponse</code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountArray</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRead</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRoleProperty</a></code>
- <code><a href="./src/resources/accounts.ts">AccountSingle</a></code>
- <code><a href="./src/resources/accounts.ts">AccountTypeFilter</a></code>
- <code><a href="./src/resources/accounts.ts">AttachmentArray</a></code>
- <code><a href="./src/resources/accounts.ts">CreditCardTypeProperty</a></code>
- <code><a href="./src/resources/accounts.ts">InterestPeriodProperty</a></code>
- <code><a href="./src/resources/accounts.ts">LiabilityDirectionProperty</a></code>
- <code><a href="./src/resources/accounts.ts">LiabilityTypeProperty</a></code>
- <code><a href="./src/resources/accounts.ts">Meta</a></code>
- <code><a href="./src/resources/accounts.ts">PageLink</a></code>
- <code><a href="./src/resources/accounts.ts">PiggyBankArray</a></code>
- <code><a href="./src/resources/accounts.ts">ShortAccountTypeProperty</a></code>
- <code><a href="./src/resources/accounts.ts">TransactionArray</a></code>
- <code><a href="./src/resources/accounts.ts">TransactionTypeFilter</a></code>

Methods:

- <code title="post /v1/accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> AccountSingle</code>
- <code title="get /v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(id, { ...params }) -> AccountSingle</code>
- <code title="put /v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(id, { ...params }) -> AccountSingle</code>
- <code title="get /v1/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountArray</code>
- <code title="delete /v1/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/accounts/{id}/attachments">client.accounts.<a href="./src/resources/accounts.ts">listAttachments</a>(id, { ...params }) -> AttachmentArray</code>
- <code title="get /v1/accounts/{id}/piggy-banks">client.accounts.<a href="./src/resources/accounts.ts">listPiggyBanks</a>(id, { ...params }) -> PiggyBankArray</code>
- <code title="get /v1/accounts/{id}/transactions">client.accounts.<a href="./src/resources/accounts.ts">listTransactions</a>(id, { ...params }) -> TransactionArray</code>

# Attachments

Types:

- <code><a href="./src/resources/attachments.ts">AttachableType</a></code>
- <code><a href="./src/resources/attachments.ts">AttachmentRead</a></code>
- <code><a href="./src/resources/attachments.ts">AttachmentSingle</a></code>
- <code><a href="./src/resources/attachments.ts">ObjectLink</a></code>

Methods:

- <code title="post /v1/attachments">client.attachments.<a href="./src/resources/attachments.ts">create</a>({ ...params }) -> AttachmentSingle</code>
- <code title="get /v1/attachments/{id}">client.attachments.<a href="./src/resources/attachments.ts">retrieve</a>(id, { ...params }) -> AttachmentSingle</code>
- <code title="put /v1/attachments/{id}">client.attachments.<a href="./src/resources/attachments.ts">update</a>(id, { ...params }) -> AttachmentSingle</code>
- <code title="get /v1/attachments">client.attachments.<a href="./src/resources/attachments.ts">list</a>({ ...params }) -> AttachmentArray</code>
- <code title="delete /v1/attachments/{id}">client.attachments.<a href="./src/resources/attachments.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/attachments/{id}/download">client.attachments.<a href="./src/resources/attachments.ts">download</a>(id, { ...params }) -> Response</code>
- <code title="post /v1/attachments/{id}/upload">client.attachments.<a href="./src/resources/attachments.ts">upload</a>(id, body, { ...params }) -> void</code>

# AvailableBudgets

Types:

- <code><a href="./src/resources/available-budgets.ts">ArrayEntryWithCurrencyAndSum</a></code>
- <code><a href="./src/resources/available-budgets.ts">AvailableBudgetArray</a></code>
- <code><a href="./src/resources/available-budgets.ts">AvailableBudgetRead</a></code>
- <code><a href="./src/resources/available-budgets.ts">AvailableBudgetRetrieveResponse</a></code>

Methods:

- <code title="get /v1/available-budgets/{id}">client.availableBudgets.<a href="./src/resources/available-budgets.ts">retrieve</a>(id, { ...params }) -> AvailableBudgetRetrieveResponse</code>
- <code title="get /v1/available-budgets">client.availableBudgets.<a href="./src/resources/available-budgets.ts">list</a>({ ...params }) -> AvailableBudgetArray</code>

# Bills

Types:

- <code><a href="./src/resources/bills.ts">BillArray</a></code>
- <code><a href="./src/resources/bills.ts">BillRead</a></code>
- <code><a href="./src/resources/bills.ts">BillRepeatFrequency</a></code>
- <code><a href="./src/resources/bills.ts">BillSingle</a></code>
- <code><a href="./src/resources/bills.ts">RuleArray</a></code>

Methods:

- <code title="post /v1/bills">client.bills.<a href="./src/resources/bills.ts">create</a>({ ...params }) -> BillSingle</code>
- <code title="get /v1/bills/{id}">client.bills.<a href="./src/resources/bills.ts">retrieve</a>(id, { ...params }) -> BillSingle</code>
- <code title="put /v1/bills/{id}">client.bills.<a href="./src/resources/bills.ts">update</a>(id, { ...params }) -> BillSingle</code>
- <code title="get /v1/bills">client.bills.<a href="./src/resources/bills.ts">list</a>({ ...params }) -> BillArray</code>
- <code title="delete /v1/bills/{id}">client.bills.<a href="./src/resources/bills.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/bills/{id}/attachments">client.bills.<a href="./src/resources/bills.ts">listAttachments</a>(id, { ...params }) -> AttachmentArray</code>
- <code title="get /v1/bills/{id}/rules">client.bills.<a href="./src/resources/bills.ts">listRules</a>(id, { ...params }) -> RuleArray</code>
- <code title="get /v1/bills/{id}/transactions">client.bills.<a href="./src/resources/bills.ts">listTransactions</a>(id, { ...params }) -> TransactionArray</code>

# Budgets

Types:

- <code><a href="./src/resources/budgets/budgets.ts">AutoBudgetPeriod</a></code>
- <code><a href="./src/resources/budgets/budgets.ts">AutoBudgetType</a></code>
- <code><a href="./src/resources/budgets/budgets.ts">BudgetRead</a></code>
- <code><a href="./src/resources/budgets/budgets.ts">BudgetSingle</a></code>
- <code><a href="./src/resources/budgets/budgets.ts">BudgetListResponse</a></code>

Methods:

- <code title="post /v1/budgets">client.budgets.<a href="./src/resources/budgets/budgets.ts">create</a>({ ...params }) -> BudgetSingle</code>
- <code title="get /v1/budgets/{id}">client.budgets.<a href="./src/resources/budgets/budgets.ts">retrieve</a>(id, { ...params }) -> BudgetSingle</code>
- <code title="put /v1/budgets/{id}">client.budgets.<a href="./src/resources/budgets/budgets.ts">update</a>(id, { ...params }) -> BudgetSingle</code>
- <code title="get /v1/budgets">client.budgets.<a href="./src/resources/budgets/budgets.ts">list</a>({ ...params }) -> BudgetListResponse</code>
- <code title="delete /v1/budgets/{id}">client.budgets.<a href="./src/resources/budgets/budgets.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/budgets/{id}/attachments">client.budgets.<a href="./src/resources/budgets/budgets.ts">listAttachments</a>(id, { ...params }) -> AttachmentArray</code>
- <code title="get /v1/budgets/{id}/transactions">client.budgets.<a href="./src/resources/budgets/budgets.ts">listTransactions</a>(id, { ...params }) -> TransactionArray</code>
- <code title="get /v1/budgets/transactions-without-budget">client.budgets.<a href="./src/resources/budgets/budgets.ts">listTransactionsWithoutBudget</a>({ ...params }) -> TransactionArray</code>

## Limits

Types:

- <code><a href="./src/resources/budgets/limits.ts">BudgetLimitArray</a></code>
- <code><a href="./src/resources/budgets/limits.ts">BudgetLimitRead</a></code>
- <code><a href="./src/resources/budgets/limits.ts">BudgetLimitSingle</a></code>

Methods:

- <code title="post /v1/budgets/{id}/limits">client.budgets.limits.<a href="./src/resources/budgets/limits.ts">create</a>(id, { ...params }) -> BudgetLimitSingle</code>
- <code title="get /v1/budgets/{id}/limits/{limitId}">client.budgets.limits.<a href="./src/resources/budgets/limits.ts">retrieve</a>(limitID, { ...params }) -> BudgetLimitSingle</code>
- <code title="put /v1/budgets/{id}/limits/{limitId}">client.budgets.limits.<a href="./src/resources/budgets/limits.ts">update</a>(limitID, { ...params }) -> BudgetLimitSingle</code>
- <code title="delete /v1/budgets/{id}/limits/{limitId}">client.budgets.limits.<a href="./src/resources/budgets/limits.ts">delete</a>(limitID, { ...params }) -> void</code>
- <code title="get /v1/budgets/{id}/limits">client.budgets.limits.<a href="./src/resources/budgets/limits.ts">list0</a>(id, { ...params }) -> BudgetLimitArray</code>
- <code title="get /v1/budget-limits">client.budgets.limits.<a href="./src/resources/budgets/limits.ts">list1</a>({ ...params }) -> BudgetLimitArray</code>
- <code title="get /v1/budgets/{id}/limits/{limitId}/transactions">client.budgets.limits.<a href="./src/resources/budgets/limits.ts">listTransactions</a>(limitID, { ...params }) -> TransactionArray</code>

# Categories

Types:

- <code><a href="./src/resources/categories.ts">CategoryRead</a></code>
- <code><a href="./src/resources/categories.ts">CategorySingle</a></code>
- <code><a href="./src/resources/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="post /v1/categories">client.categories.<a href="./src/resources/categories.ts">create</a>({ ...params }) -> CategorySingle</code>
- <code title="get /v1/categories/{id}">client.categories.<a href="./src/resources/categories.ts">retrieve</a>(id, { ...params }) -> CategorySingle</code>
- <code title="put /v1/categories/{id}">client.categories.<a href="./src/resources/categories.ts">update</a>(id, { ...params }) -> CategorySingle</code>
- <code title="get /v1/categories">client.categories.<a href="./src/resources/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>
- <code title="delete /v1/categories/{id}">client.categories.<a href="./src/resources/categories.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/categories/{id}/attachments">client.categories.<a href="./src/resources/categories.ts">listAttachments</a>(id, { ...params }) -> AttachmentArray</code>
- <code title="get /v1/categories/{id}/transactions">client.categories.<a href="./src/resources/categories.ts">listTransactions</a>(id, { ...params }) -> TransactionArray</code>

# ExchangeRates

Types:

- <code><a href="./src/resources/exchange-rates.ts">CurrencyExchangeRateArray</a></code>
- <code><a href="./src/resources/exchange-rates.ts">CurrencyExchangeRateRead</a></code>
- <code><a href="./src/resources/exchange-rates.ts">CurrencyExchangeRateSingle</a></code>

Methods:

- <code title="post /v1/exchange-rates">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">create</a>({ ...params }) -> CurrencyExchangeRateSingle</code>
- <code title="get /v1/exchange-rates/{id}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">retrieve</a>(id, { ...params }) -> CurrencyExchangeRateSingle</code>
- <code title="put /v1/exchange-rates/{id}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">update</a>(id, { ...params }) -> CurrencyExchangeRateSingle</code>
- <code title="get /v1/exchange-rates">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">list</a>({ ...params }) -> CurrencyExchangeRateArray</code>
- <code title="delete /v1/exchange-rates/{id}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /v1/exchange-rates/by-currencies/{from}/{to}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">createByCurrencies</a>(to, { ...params }) -> CurrencyExchangeRateArray</code>
- <code title="post /v1/exchange-rates/by-date/{date}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">createByDate</a>(date, { ...params }) -> CurrencyExchangeRateArray</code>
- <code title="delete /v1/exchange-rates/{from}/{to}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">deleteAllByCurrencies</a>(to, { ...params }) -> void</code>
- <code title="delete /v1/exchange-rates/{from}/{to}/{date}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">deleteByDate</a>(date, { ...params }) -> void</code>
- <code title="get /v1/exchange-rates/{from}/{to}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">listByCurrencies</a>(to, { ...params }) -> CurrencyExchangeRateArray</code>
- <code title="get /v1/exchange-rates/{from}/{to}/{date}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">retrieveByDate</a>(date, { ...params }) -> CurrencyExchangeRateArray</code>
- <code title="put /v1/exchange-rates/{from}/{to}/{date}">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">updateByDate</a>(date, { ...params }) -> CurrencyExchangeRateSingle</code>

# LinkTypes

Types:

- <code><a href="./src/resources/link-types.ts">LinkType</a></code>
- <code><a href="./src/resources/link-types.ts">LinkTypeRead</a></code>
- <code><a href="./src/resources/link-types.ts">LinkTypeSingle</a></code>
- <code><a href="./src/resources/link-types.ts">LinkTypeListResponse</a></code>

Methods:

- <code title="post /v1/link-types">client.linkTypes.<a href="./src/resources/link-types.ts">create</a>({ ...params }) -> LinkTypeSingle</code>
- <code title="get /v1/link-types/{id}">client.linkTypes.<a href="./src/resources/link-types.ts">retrieve</a>(id, { ...params }) -> LinkTypeSingle</code>
- <code title="put /v1/link-types/{id}">client.linkTypes.<a href="./src/resources/link-types.ts">update</a>(id, { ...params }) -> LinkTypeSingle</code>
- <code title="get /v1/link-types">client.linkTypes.<a href="./src/resources/link-types.ts">list</a>({ ...params }) -> LinkTypeListResponse</code>
- <code title="delete /v1/link-types/{id}">client.linkTypes.<a href="./src/resources/link-types.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/link-types/{id}/transactions">client.linkTypes.<a href="./src/resources/link-types.ts">listTransactions</a>(id, { ...params }) -> TransactionArray</code>

# TransactionLinks

Types:

- <code><a href="./src/resources/transaction-links.ts">TransactionLinkArray</a></code>
- <code><a href="./src/resources/transaction-links.ts">TransactionLinkRead</a></code>
- <code><a href="./src/resources/transaction-links.ts">TransactionLinkSingle</a></code>

Methods:

- <code title="post /v1/transaction-links">client.transactionLinks.<a href="./src/resources/transaction-links.ts">create</a>({ ...params }) -> TransactionLinkSingle</code>
- <code title="get /v1/transaction-links/{id}">client.transactionLinks.<a href="./src/resources/transaction-links.ts">retrieve</a>(id, { ...params }) -> TransactionLinkSingle</code>
- <code title="put /v1/transaction-links/{id}">client.transactionLinks.<a href="./src/resources/transaction-links.ts">update</a>(id, { ...params }) -> TransactionLinkSingle</code>
- <code title="get /v1/transaction-links">client.transactionLinks.<a href="./src/resources/transaction-links.ts">list</a>({ ...params }) -> TransactionLinkArray</code>
- <code title="delete /v1/transaction-links/{id}">client.transactionLinks.<a href="./src/resources/transaction-links.ts">delete</a>(id, { ...params }) -> void</code>

# ObjectGroups

Types:

- <code><a href="./src/resources/object-groups.ts">ObjectGroupRead</a></code>
- <code><a href="./src/resources/object-groups.ts">ObjectGroupSingle</a></code>
- <code><a href="./src/resources/object-groups.ts">ObjectGroupListResponse</a></code>

Methods:

- <code title="get /v1/object-groups/{id}">client.objectGroups.<a href="./src/resources/object-groups.ts">retrieve</a>(id, { ...params }) -> ObjectGroupSingle</code>
- <code title="put /v1/object-groups/{id}">client.objectGroups.<a href="./src/resources/object-groups.ts">update</a>(id, { ...params }) -> ObjectGroupSingle</code>
- <code title="get /v1/object-groups">client.objectGroups.<a href="./src/resources/object-groups.ts">list</a>({ ...params }) -> ObjectGroupListResponse</code>
- <code title="delete /v1/object-groups/{id}">client.objectGroups.<a href="./src/resources/object-groups.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/object-groups/{id}/bills">client.objectGroups.<a href="./src/resources/object-groups.ts">listBills</a>(id, { ...params }) -> BillArray</code>
- <code title="get /v1/object-groups/{id}/piggy-banks">client.objectGroups.<a href="./src/resources/object-groups.ts">listPiggyBanks</a>(id, { ...params }) -> PiggyBankArray</code>

# PiggyBanks

Types:

- <code><a href="./src/resources/piggy-banks.ts">PiggyBankEventArray</a></code>
- <code><a href="./src/resources/piggy-banks.ts">PiggyBankRead</a></code>
- <code><a href="./src/resources/piggy-banks.ts">PiggyBankSingle</a></code>

Methods:

- <code title="post /v1/piggy-banks">client.piggyBanks.<a href="./src/resources/piggy-banks.ts">create</a>({ ...params }) -> PiggyBankSingle</code>
- <code title="get /v1/piggy-banks/{id}">client.piggyBanks.<a href="./src/resources/piggy-banks.ts">retrieve</a>(id, { ...params }) -> PiggyBankSingle</code>
- <code title="put /v1/piggy-banks/{id}">client.piggyBanks.<a href="./src/resources/piggy-banks.ts">update</a>(id, { ...params }) -> PiggyBankSingle</code>
- <code title="get /v1/piggy-banks">client.piggyBanks.<a href="./src/resources/piggy-banks.ts">list</a>({ ...params }) -> PiggyBankArray</code>
- <code title="delete /v1/piggy-banks/{id}">client.piggyBanks.<a href="./src/resources/piggy-banks.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/piggy-banks/{id}/attachments">client.piggyBanks.<a href="./src/resources/piggy-banks.ts">listAttachments</a>(id, { ...params }) -> AttachmentArray</code>
- <code title="get /v1/piggy-banks/{id}/events">client.piggyBanks.<a href="./src/resources/piggy-banks.ts">listEvents</a>(id, { ...params }) -> PiggyBankEventArray</code>

# Recurrences

Types:

- <code><a href="./src/resources/recurrences.ts">AccountTypeProperty</a></code>
- <code><a href="./src/resources/recurrences.ts">RecurrenceArray</a></code>
- <code><a href="./src/resources/recurrences.ts">RecurrenceRead</a></code>
- <code><a href="./src/resources/recurrences.ts">RecurrenceRepetitionType</a></code>
- <code><a href="./src/resources/recurrences.ts">RecurrenceSingle</a></code>
- <code><a href="./src/resources/recurrences.ts">RecurrenceTransactionType</a></code>

Methods:

- <code title="post /v1/recurrences">client.recurrences.<a href="./src/resources/recurrences.ts">create</a>({ ...params }) -> RecurrenceSingle</code>
- <code title="get /v1/recurrences/{id}">client.recurrences.<a href="./src/resources/recurrences.ts">retrieve</a>(id, { ...params }) -> RecurrenceSingle</code>
- <code title="put /v1/recurrences/{id}">client.recurrences.<a href="./src/resources/recurrences.ts">update</a>(id, { ...params }) -> RecurrenceSingle</code>
- <code title="get /v1/recurrences">client.recurrences.<a href="./src/resources/recurrences.ts">list</a>({ ...params }) -> RecurrenceArray</code>
- <code title="delete /v1/recurrences/{id}">client.recurrences.<a href="./src/resources/recurrences.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/recurrences/{id}/transactions">client.recurrences.<a href="./src/resources/recurrences.ts">listTransactions</a>(id, { ...params }) -> TransactionArray</code>
- <code title="post /v1/recurrences/{id}/trigger">client.recurrences.<a href="./src/resources/recurrences.ts">triggerTransaction</a>(id, { ...params }) -> TransactionArray</code>

# RuleGroups

Types:

- <code><a href="./src/resources/rule-groups.ts">RuleGroupRead</a></code>
- <code><a href="./src/resources/rule-groups.ts">RuleGroupSingle</a></code>
- <code><a href="./src/resources/rule-groups.ts">RuleGroupListAllResponse</a></code>

Methods:

- <code title="post /v1/rule-groups">client.ruleGroups.<a href="./src/resources/rule-groups.ts">create</a>({ ...params }) -> RuleGroupSingle</code>
- <code title="get /v1/rule-groups/{id}">client.ruleGroups.<a href="./src/resources/rule-groups.ts">retrieve</a>(id, { ...params }) -> RuleGroupSingle</code>
- <code title="put /v1/rule-groups/{id}">client.ruleGroups.<a href="./src/resources/rule-groups.ts">update</a>(id, { ...params }) -> RuleGroupSingle</code>
- <code title="delete /v1/rule-groups/{id}">client.ruleGroups.<a href="./src/resources/rule-groups.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/rule-groups">client.ruleGroups.<a href="./src/resources/rule-groups.ts">listAll</a>({ ...params }) -> RuleGroupListAllResponse</code>
- <code title="get /v1/rule-groups/{id}/rules">client.ruleGroups.<a href="./src/resources/rule-groups.ts">listRules</a>(id, { ...params }) -> RuleArray</code>
- <code title="get /v1/rule-groups/{id}/test">client.ruleGroups.<a href="./src/resources/rule-groups.ts">testTransactions</a>(id, { ...params }) -> TransactionArray</code>
- <code title="post /v1/rule-groups/{id}/trigger">client.ruleGroups.<a href="./src/resources/rule-groups.ts">triggerRules</a>(id, { ...params }) -> void</code>

# Rules

Types:

- <code><a href="./src/resources/rules.ts">RuleActionKeyword</a></code>
- <code><a href="./src/resources/rules.ts">RuleRead</a></code>
- <code><a href="./src/resources/rules.ts">RuleSingle</a></code>
- <code><a href="./src/resources/rules.ts">RuleTriggerKeyword</a></code>
- <code><a href="./src/resources/rules.ts">RuleTriggerType</a></code>

Methods:

- <code title="post /v1/rules">client.rules.<a href="./src/resources/rules.ts">create</a>({ ...params }) -> RuleSingle</code>
- <code title="get /v1/rules/{id}">client.rules.<a href="./src/resources/rules.ts">retrieve</a>(id, { ...params }) -> RuleSingle</code>
- <code title="put /v1/rules/{id}">client.rules.<a href="./src/resources/rules.ts">update</a>(id, { ...params }) -> RuleSingle</code>
- <code title="get /v1/rules">client.rules.<a href="./src/resources/rules.ts">list</a>({ ...params }) -> RuleArray</code>
- <code title="delete /v1/rules/{id}">client.rules.<a href="./src/resources/rules.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/rules/{id}/test">client.rules.<a href="./src/resources/rules.ts">test</a>(id, { ...params }) -> TransactionArray</code>
- <code title="post /v1/rules/{id}/trigger">client.rules.<a href="./src/resources/rules.ts">trigger</a>(id, { ...params }) -> void</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">TagRead</a></code>
- <code><a href="./src/resources/tags.ts">TagSingle</a></code>
- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>

Methods:

- <code title="post /v1/tags">client.tags.<a href="./src/resources/tags.ts">create</a>({ ...params }) -> TagSingle</code>
- <code title="get /v1/tags/{tag}">client.tags.<a href="./src/resources/tags.ts">retrieve</a>(tag, { ...params }) -> TagSingle</code>
- <code title="put /v1/tags/{tag}">client.tags.<a href="./src/resources/tags.ts">update</a>(tag, { ...params }) -> TagSingle</code>
- <code title="get /v1/tags">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
- <code title="delete /v1/tags/{tag}">client.tags.<a href="./src/resources/tags.ts">delete</a>(tag, { ...params }) -> void</code>
- <code title="get /v1/tags/{tag}/attachments">client.tags.<a href="./src/resources/tags.ts">listAttachments</a>(tag, { ...params }) -> AttachmentArray</code>
- <code title="get /v1/tags/{tag}/transactions">client.tags.<a href="./src/resources/tags.ts">listTransactions</a>(tag, { ...params }) -> TransactionArray</code>

# Currencies

Types:

- <code><a href="./src/resources/currencies/currencies.ts">CurrencyRead</a></code>
- <code><a href="./src/resources/currencies/currencies.ts">CurrencySingle</a></code>
- <code><a href="./src/resources/currencies/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="post /v1/currencies">client.currencies.<a href="./src/resources/currencies/currencies.ts">create</a>({ ...params }) -> CurrencySingle</code>
- <code title="get /v1/currencies/{code}">client.currencies.<a href="./src/resources/currencies/currencies.ts">retrieve</a>(code, { ...params }) -> CurrencySingle</code>
- <code title="put /v1/currencies/{code}">client.currencies.<a href="./src/resources/currencies/currencies.ts">update</a>(code, { ...params }) -> CurrencySingle</code>
- <code title="get /v1/currencies">client.currencies.<a href="./src/resources/currencies/currencies.ts">list</a>({ ...params }) -> CurrencyListResponse</code>
- <code title="delete /v1/currencies/{code}">client.currencies.<a href="./src/resources/currencies/currencies.ts">delete</a>(code, { ...params }) -> void</code>
- <code title="post /v1/currencies/{code}/disable">client.currencies.<a href="./src/resources/currencies/currencies.ts">disable</a>(code, { ...params }) -> CurrencySingle</code>
- <code title="post /v1/currencies/{code}/enable">client.currencies.<a href="./src/resources/currencies/currencies.ts">enable</a>(code, { ...params }) -> CurrencySingle</code>
- <code title="get /v1/currencies/{code}/accounts">client.currencies.<a href="./src/resources/currencies/currencies.ts">listAccounts</a>(code, { ...params }) -> AccountArray</code>
- <code title="get /v1/currencies/{code}/available-budgets">client.currencies.<a href="./src/resources/currencies/currencies.ts">listAvailableBudgets</a>(code, { ...params }) -> AvailableBudgetArray</code>
- <code title="get /v1/currencies/{code}/bills">client.currencies.<a href="./src/resources/currencies/currencies.ts">listBills</a>(code, { ...params }) -> BillArray</code>
- <code title="get /v1/currencies/{code}/budget-limits">client.currencies.<a href="./src/resources/currencies/currencies.ts">listBudgetLimits</a>(code, { ...params }) -> BudgetLimitArray</code>
- <code title="get /v1/currencies/{code}/recurrences">client.currencies.<a href="./src/resources/currencies/currencies.ts">listRecurrences</a>(code, { ...params }) -> RecurrenceArray</code>
- <code title="get /v1/currencies/{code}/rules">client.currencies.<a href="./src/resources/currencies/currencies.ts">listRules</a>(code, { ...params }) -> RuleArray</code>
- <code title="get /v1/currencies/{code}/transactions">client.currencies.<a href="./src/resources/currencies/currencies.ts">listTransactions</a>(code, { ...params }) -> TransactionArray</code>

## Primary

Methods:

- <code title="get /v1/currencies/primary">client.currencies.primary.<a href="./src/resources/currencies/primary.ts">retrieve</a>({ ...params }) -> CurrencySingle</code>
- <code title="post /v1/currencies/{code}/primary">client.currencies.primary.<a href="./src/resources/currencies/primary.ts">makePrimary</a>(code, { ...params }) -> CurrencySingle</code>

# TransactionJournals

Types:

- <code><a href="./src/resources/transaction-journals.ts">TransactionRead</a></code>
- <code><a href="./src/resources/transaction-journals.ts">TransactionSingle</a></code>

Methods:

- <code title="get /v1/transaction-journals/{id}">client.transactionJournals.<a href="./src/resources/transaction-journals.ts">retrieve</a>(id, { ...params }) -> TransactionSingle</code>
- <code title="delete /v1/transaction-journals/{id}">client.transactionJournals.<a href="./src/resources/transaction-journals.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/transaction-journals/{id}/links">client.transactionJournals.<a href="./src/resources/transaction-journals.ts">listLinks</a>(id, { ...params }) -> TransactionLinkArray</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionTypeProperty</a></code>

Methods:

- <code title="post /v1/transactions">client.transactions.<a href="./src/resources/transactions.ts">create</a>({ ...params }) -> TransactionSingle</code>
- <code title="get /v1/transactions/{id}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(id, { ...params }) -> TransactionSingle</code>
- <code title="put /v1/transactions/{id}">client.transactions.<a href="./src/resources/transactions.ts">update</a>(id, { ...params }) -> TransactionSingle</code>
- <code title="get /v1/transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionArray</code>
- <code title="delete /v1/transactions/{id}">client.transactions.<a href="./src/resources/transactions.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="get /v1/transactions/{id}/attachments">client.transactions.<a href="./src/resources/transactions.ts">listAttachments</a>(id, { ...params }) -> AttachmentArray</code>
- <code title="get /v1/transactions/{id}/piggy-bank-events">client.transactions.<a href="./src/resources/transactions.ts">listPiggyBankEvents</a>(id, { ...params }) -> PiggyBankEventArray</code>

# UserGroups

Types:

- <code><a href="./src/resources/user-groups.ts">UserGroupRead</a></code>
- <code><a href="./src/resources/user-groups.ts">UserGroupSingle</a></code>
- <code><a href="./src/resources/user-groups.ts">UserGroupListResponse</a></code>

Methods:

- <code title="get /v1/user-groups/{id}">client.userGroups.<a href="./src/resources/user-groups.ts">retrieve</a>(id, { ...params }) -> UserGroupSingle</code>
- <code title="put /v1/user-groups/{id}">client.userGroups.<a href="./src/resources/user-groups.ts">update</a>(id, { ...params }) -> UserGroupSingle</code>
- <code title="get /v1/user-groups">client.userGroups.<a href="./src/resources/user-groups.ts">list</a>({ ...params }) -> UserGroupListResponse</code>

# Search

Methods:

- <code title="get /v1/search/accounts">client.search.<a href="./src/resources/search.ts">accounts</a>({ ...params }) -> AccountArray</code>
- <code title="get /v1/search/transactions">client.search.<a href="./src/resources/search.ts">transactions</a>({ ...params }) -> TransactionArray</code>

# Summary

Types:

- <code><a href="./src/resources/summary.ts">SummaryRetrieveBasicResponse</a></code>

Methods:

- <code title="get /v1/summary/basic">client.summary.<a href="./src/resources/summary.ts">retrieveBasic</a>({ ...params }) -> SummaryRetrieveBasicResponse</code>

# About

Types:

- <code><a href="./src/resources/about.ts">UserRead</a></code>
- <code><a href="./src/resources/about.ts">UserSingle</a></code>
- <code><a href="./src/resources/about.ts">AboutRetrieveInfoResponse</a></code>

Methods:

- <code title="get /v1/about">client.about.<a href="./src/resources/about.ts">retrieveInfo</a>({ ...params }) -> AboutRetrieveInfoResponse</code>
- <code title="get /v1/about/user">client.about.<a href="./src/resources/about.ts">retrieveUser</a>({ ...params }) -> UserSingle</code>

# Batch

Methods:

- <code title="post /v1/batch/finish">client.batch.<a href="./src/resources/batch.ts">finish</a>({ ...params }) -> void</code>

# Configuration

Types:

- <code><a href="./src/resources/configuration.ts">ConfigValueFilter</a></code>
- <code><a href="./src/resources/configuration.ts">Configuration</a></code>
- <code><a href="./src/resources/configuration.ts">ConfigurationSingle</a></code>
- <code><a href="./src/resources/configuration.ts">PolymorphicProperty</a></code>
- <code><a href="./src/resources/configuration.ts">ConfigurationRetrieveResponse</a></code>

Methods:

- <code title="get /v1/configuration">client.configuration.<a href="./src/resources/configuration.ts">retrieve</a>({ ...params }) -> ConfigurationRetrieveResponse</code>
- <code title="get /v1/configuration/{name}">client.configuration.<a href="./src/resources/configuration.ts">retrieveValue</a>(name, { ...params }) -> ConfigurationSingle</code>
- <code title="put /v1/configuration/{name}">client.configuration.<a href="./src/resources/configuration.ts">updateValue</a>(name, { ...params }) -> ConfigurationSingle</code>

# Cron

Types:

- <code><a href="./src/resources/cron.ts">CronResultRow</a></code>
- <code><a href="./src/resources/cron.ts">CronRunResponse</a></code>

Methods:

- <code title="get /v1/cron/{cliToken}">client.cron.<a href="./src/resources/cron.ts">run</a>(cliToken, { ...params }) -> CronRunResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /v1/users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserSingle</code>
- <code title="get /v1/users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id, { ...params }) -> UserSingle</code>
- <code title="put /v1/users/{id}">client.users.<a href="./src/resources/users.ts">update</a>(id, { ...params }) -> UserSingle</code>
- <code title="get /v1/users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /v1/users/{id}">client.users.<a href="./src/resources/users.ts">delete</a>(id, { ...params }) -> void</code>

# Preferences

Types:

- <code><a href="./src/resources/preferences.ts">Preference</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceRead</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceSingle</a></code>
- <code><a href="./src/resources/preferences.ts">PreferenceListResponse</a></code>

Methods:

- <code title="post /v1/preferences">client.preferences.<a href="./src/resources/preferences.ts">create</a>({ ...params }) -> PreferenceSingle</code>
- <code title="get /v1/preferences/{name}">client.preferences.<a href="./src/resources/preferences.ts">retrieve</a>(name, { ...params }) -> PreferenceSingle</code>
- <code title="put /v1/preferences/{name}">client.preferences.<a href="./src/resources/preferences.ts">update</a>(name, { ...params }) -> PreferenceSingle</code>
- <code title="get /v1/preferences">client.preferences.<a href="./src/resources/preferences.ts">list</a>({ ...params }) -> PreferenceListResponse</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks/webhooks.ts">Webhook</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookDelivery</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookResponse</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookSingle</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookTrigger</a></code>
- <code><a href="./src/resources/webhooks/webhooks.ts">WebhookListResponse</a></code>

Methods:

- <code title="post /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">create</a>({ ...params }) -> WebhookSingle</code>
- <code title="get /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">retrieve</a>(id, { ...params }) -> WebhookSingle</code>
- <code title="put /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">update</a>(id, { ...params }) -> WebhookSingle</code>
- <code title="get /v1/webhooks">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse</code>
- <code title="delete /v1/webhooks/{id}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /v1/webhooks/{id}/submit">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">submit</a>(id, { ...params }) -> void</code>
- <code title="post /v1/webhooks/{id}/trigger-transaction/{transactionId}">client.webhooks.<a href="./src/resources/webhooks/webhooks.ts">triggerTransaction</a>(transactionID, { ...params }) -> void</code>

## Messages

Types:

- <code><a href="./src/resources/webhooks/messages/messages.ts">WebhookMessage</a></code>
- <code><a href="./src/resources/webhooks/messages/messages.ts">MessageRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks/messages/messages.ts">MessageListResponse</a></code>

Methods:

- <code title="get /v1/webhooks/{id}/messages/{messageId}">client.webhooks.messages.<a href="./src/resources/webhooks/messages/messages.ts">retrieve</a>(messageID, { ...params }) -> MessageRetrieveResponse</code>
- <code title="get /v1/webhooks/{id}/messages">client.webhooks.messages.<a href="./src/resources/webhooks/messages/messages.ts">list</a>(id, { ...params }) -> MessageListResponse</code>
- <code title="delete /v1/webhooks/{id}/messages/{messageId}">client.webhooks.messages.<a href="./src/resources/webhooks/messages/messages.ts">delete</a>(messageID, { ...params }) -> void</code>

### Attempts

Types:

- <code><a href="./src/resources/webhooks/messages/attempts.ts">WebhookAttempt</a></code>
- <code><a href="./src/resources/webhooks/messages/attempts.ts">AttemptRetrieveResponse</a></code>
- <code><a href="./src/resources/webhooks/messages/attempts.ts">AttemptListResponse</a></code>

Methods:

- <code title="get /v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}">client.webhooks.messages.attempts.<a href="./src/resources/webhooks/messages/attempts.ts">retrieve</a>(attemptID, { ...params }) -> AttemptRetrieveResponse</code>
- <code title="get /v1/webhooks/{id}/messages/{messageId}/attempts">client.webhooks.messages.attempts.<a href="./src/resources/webhooks/messages/attempts.ts">list</a>(messageID, { ...params }) -> AttemptListResponse</code>
- <code title="delete /v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}">client.webhooks.messages.attempts.<a href="./src/resources/webhooks/messages/attempts.ts">delete</a>(attemptID, { ...params }) -> void</code>
