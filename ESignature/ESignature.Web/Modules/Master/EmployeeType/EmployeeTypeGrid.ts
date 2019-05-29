
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class EmployeeTypeGrid extends Serenity.EntityGrid<EmployeeTypeRow, any> {
        protected getColumnsKey() { return 'Master.EmployeeType'; }
        protected getDialogType() { return EmployeeTypeDialog; }
        protected getIdProperty() { return EmployeeTypeRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeTypeRow.localTextPrefix; }
        protected getService() { return EmployeeTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}