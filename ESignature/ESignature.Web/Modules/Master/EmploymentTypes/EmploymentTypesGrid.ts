
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class EmploymentTypesGrid extends Serenity.EntityGrid<EmploymentTypesRow, any> {
        protected getColumnsKey() { return 'Master.EmploymentTypes'; }
        protected getDialogType() { return EmploymentTypesDialog; }
        protected getIdProperty() { return EmploymentTypesRow.idProperty; }
        protected getLocalTextPrefix() { return EmploymentTypesRow.localTextPrefix; }
        protected getService() { return EmploymentTypesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}