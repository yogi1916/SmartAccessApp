
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class EmploymentTypesDialog extends Serenity.EntityDialog<EmploymentTypesRow, any> {
        protected getFormKey() { return EmploymentTypesForm.formKey; }
        protected getIdProperty() { return EmploymentTypesRow.idProperty; }
        protected getLocalTextPrefix() { return EmploymentTypesRow.localTextPrefix; }
        protected getNameProperty() { return EmploymentTypesRow.nameProperty; }
        protected getService() { return EmploymentTypesService.baseUrl; }

        protected form = new EmploymentTypesForm(this.idPrefix);

    }
}