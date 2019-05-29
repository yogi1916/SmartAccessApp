
namespace ESignature.Admin {

    @Serenity.Decorators.registerClass()
    export class FinancialYearMasterGrid extends Serenity.EntityGrid<FinancialYearMasterRow, any> {
        protected getColumnsKey() { return 'Admin.FinancialYearMaster'; }
        protected getDialogType() { return FinancialYearMasterDialog; }
        protected getIdProperty() { return FinancialYearMasterRow.idProperty; }
        protected getLocalTextPrefix() { return FinancialYearMasterRow.localTextPrefix; }
        protected getService() { return FinancialYearMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}