
namespace ESignature.AccessEmployee {

    @Serenity.Decorators.registerClass()
    export class EmployeeFunctionCardsDialog extends Serenity.EntityDialog<EmployeeFunctionCardsRow, any> {
        protected getFormKey() { return EmployeeFunctionCardsForm.formKey; }
        protected getIdProperty() { return EmployeeFunctionCardsRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeFunctionCardsRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeFunctionCardsRow.nameProperty; }
        protected getService() { return EmployeeFunctionCardsService.baseUrl; }

        protected form = new EmployeeFunctionCardsForm(this.idPrefix);

    }
}