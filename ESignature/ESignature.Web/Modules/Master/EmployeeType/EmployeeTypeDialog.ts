
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class EmployeeTypeDialog extends Serenity.EntityDialog<EmployeeTypeRow, any> {
        protected getFormKey() { return EmployeeTypeForm.formKey; }
        protected getIdProperty() { return EmployeeTypeRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeTypeRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeTypeRow.nameProperty; }
        protected getService() { return EmployeeTypeService.baseUrl; }

        protected form = new EmployeeTypeForm(this.idPrefix);

    }
}