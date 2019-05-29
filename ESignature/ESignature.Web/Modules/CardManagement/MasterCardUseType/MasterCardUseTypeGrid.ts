
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardUseTypeGrid extends Serenity.EntityGrid<MasterCardUseTypeRow, any> {
        protected getColumnsKey() { return 'CardManagement.MasterCardUseType'; }
        protected getDialogType() { return MasterCardUseTypeDialog; }
        protected getIdProperty() { return MasterCardUseTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardUseTypeRow.localTextPrefix; }
        protected getService() { return MasterCardUseTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}