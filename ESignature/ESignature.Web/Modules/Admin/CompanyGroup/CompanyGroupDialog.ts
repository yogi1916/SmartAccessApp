
namespace ESignature.Admin {

    @Serenity.Decorators.registerClass()
    export class CompanyGroupDialog extends Serenity.EntityDialog<CompanyGroupRow, any> {
        protected getFormKey() { return CompanyGroupForm.formKey; }
        protected getIdProperty() { return CompanyGroupRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyGroupRow.localTextPrefix; }
        protected getNameProperty() { return CompanyGroupRow.nameProperty; }
        protected getService() { return CompanyGroupService.baseUrl; }

        protected form = new CompanyGroupForm(this.idPrefix);

    }
}