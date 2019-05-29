
namespace ESignature.AccessEmployee {

    @Serenity.Decorators.registerClass()
    export class EmployeeFunctionCardsGrid extends Serenity.EntityGrid<EmployeeFunctionCardsRow, any> {
        protected getColumnsKey() { return 'AccessEmployee.EmployeeFunctionCards'; }
        protected getDialogType() { return EmployeeFunctionCardsDialog; }
        protected getIdProperty() { return EmployeeFunctionCardsRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeFunctionCardsRow.localTextPrefix; }
        protected getService() { return EmployeeFunctionCardsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}