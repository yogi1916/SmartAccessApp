
namespace ESignature.Employee {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class EmployeeMasterDialog extends Serenity.EntityDialog<EmployeeMasterRow, any> {
        protected getFormKey() { return EmployeeMasterForm.formKey; }
        protected getIdProperty() { return EmployeeMasterRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeMasterRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeMasterRow.nameProperty; }
        protected getService() { return EmployeeMasterService.baseUrl; }

        protected form = new EmployeeMasterForm(this.idPrefix);

    }
}