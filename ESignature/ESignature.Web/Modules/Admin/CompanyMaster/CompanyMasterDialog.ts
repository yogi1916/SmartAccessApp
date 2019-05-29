
namespace ESignature.Admin {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CompanyMasterDialog extends Serenity.EntityDialog<CompanyMasterRow, any> {
        protected getFormKey() { return CompanyMasterForm.formKey; }
        protected getIdProperty() { return CompanyMasterRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyMasterRow.localTextPrefix; }
        protected getNameProperty() { return CompanyMasterRow.nameProperty; }
        protected getService() { return CompanyMasterService.baseUrl; }

        protected form = new CompanyMasterForm(this.idPrefix);

    }
}