
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class DepartmentsDialog extends Serenity.EntityDialog<DepartmentsRow, any> {
        protected getFormKey() { return DepartmentsForm.formKey; }
        protected getIdProperty() { return DepartmentsRow.idProperty; }
        protected getLocalTextPrefix() { return DepartmentsRow.localTextPrefix; }
        protected getNameProperty() { return DepartmentsRow.nameProperty; }
        protected getService() { return DepartmentsService.baseUrl; }

        protected form = new DepartmentsForm(this.idPrefix);        
    }
}