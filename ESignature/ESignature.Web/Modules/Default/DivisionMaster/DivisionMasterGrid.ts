
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class DivisionMasterGrid extends Serenity.EntityGrid<DivisionMasterRow, any> {
        protected getColumnsKey() { return 'Default.DivisionMaster'; }
        protected getDialogType() { return DivisionMasterDialog; }
        protected getIdProperty() { return DivisionMasterRow.idProperty; }
        protected getLocalTextPrefix() { return DivisionMasterRow.localTextPrefix; }
        protected getService() { return DivisionMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}