
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class CompanyLocationsDialog extends Serenity.EntityDialog<CompanyLocationsRow, any> {
        protected getFormKey() { return CompanyLocationsForm.formKey; }
        protected getIdProperty() { return CompanyLocationsRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyLocationsRow.localTextPrefix; }
        protected getService() { return CompanyLocationsService.baseUrl; }

        protected form = new CompanyLocationsForm(this.idPrefix);

    }
}