
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class SubDepartmentsDialog extends Serenity.EntityDialog<SubDepartmentsRow, any> {
        protected getFormKey() { return SubDepartmentsForm.formKey; }
        protected getIdProperty() { return SubDepartmentsRow.idProperty; }
        protected getLocalTextPrefix() { return SubDepartmentsRow.localTextPrefix; }
        protected getNameProperty() { return SubDepartmentsRow.nameProperty; }
        protected getService() { return SubDepartmentsService.baseUrl; }

        protected form = new SubDepartmentsForm(this.idPrefix);

    }
}