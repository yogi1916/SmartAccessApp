
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardStatusGrid extends Serenity.EntityGrid<MasterCardStatusRow, any> {
        protected getColumnsKey() { return 'CardManagement.MasterCardStatus'; }
        protected getDialogType() { return MasterCardStatusDialog; }
        protected getIdProperty() { return MasterCardStatusRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardStatusRow.localTextPrefix; }
        protected getService() { return MasterCardStatusService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}