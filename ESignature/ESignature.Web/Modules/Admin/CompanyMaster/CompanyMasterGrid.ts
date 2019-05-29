
namespace ESignature.Admin {

    @Serenity.Decorators.registerClass()
    export class CompanyMasterGrid extends Serenity.EntityGrid<CompanyMasterRow, any> {
        protected getColumnsKey() { return 'Admin.CompanyMaster'; }
        protected getDialogType() { return CompanyMasterDialog; }
        protected getIdProperty() { return CompanyMasterRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyMasterRow.localTextPrefix; }
        protected getService() { return CompanyMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}