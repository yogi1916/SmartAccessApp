
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardActivityGrid extends Serenity.EntityGrid<MasterCardActivityRow, any> {
        protected getColumnsKey() { return 'CardManagement.MasterCardActivity'; }
        protected getDialogType() { return MasterCardActivityDialog; }
        protected getIdProperty() { return MasterCardActivityRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardActivityRow.localTextPrefix; }
        protected getService() { return MasterCardActivityService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}