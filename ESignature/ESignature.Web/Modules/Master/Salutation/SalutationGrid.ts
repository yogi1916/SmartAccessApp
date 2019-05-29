
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class SalutationGrid extends Serenity.EntityGrid<SalutationRow, any> {
        protected getColumnsKey() { return 'Master.Salutation'; }
        protected getDialogType() { return SalutationDialog; }
        protected getIdProperty() { return SalutationRow.idProperty; }
        protected getLocalTextPrefix() { return SalutationRow.localTextPrefix; }
        protected getService() { return SalutationService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}