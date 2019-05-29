
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardTypeGrid extends Serenity.EntityGrid<MasterCardTypeRow, any> {
        protected getColumnsKey() { return 'CardManagement.MasterCardType'; }
        protected getDialogType() { return MasterCardTypeDialog; }
        protected getIdProperty() { return MasterCardTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardTypeRow.localTextPrefix; }
        protected getService() { return MasterCardTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}