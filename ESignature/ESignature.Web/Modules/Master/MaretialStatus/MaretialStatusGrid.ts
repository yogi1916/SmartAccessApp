
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class MaretialStatusGrid extends Serenity.EntityGrid<MaretialStatusRow, any> {
        protected getColumnsKey() { return 'Master.MaretialStatus'; }
        protected getDialogType() { return MaretialStatusDialog; }
        protected getIdProperty() { return MaretialStatusRow.idProperty; }
        protected getLocalTextPrefix() { return MaretialStatusRow.localTextPrefix; }
        protected getService() { return MaretialStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}