
namespace ESignature.Admin {

    @Serenity.Decorators.registerClass()
    export class CompanyGroupGrid extends Serenity.EntityGrid<CompanyGroupRow, any> {
        protected getColumnsKey() { return 'Admin.CompanyGroup'; }
        protected getDialogType() { return CompanyGroupDialog; }
        protected getIdProperty() { return CompanyGroupRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyGroupRow.localTextPrefix; }
        protected getService() { return CompanyGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}