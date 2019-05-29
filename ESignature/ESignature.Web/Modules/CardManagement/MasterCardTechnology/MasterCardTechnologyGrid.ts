
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardTechnologyGrid extends Serenity.EntityGrid<MasterCardTechnologyRow, any> {
        protected getColumnsKey() { return 'CardManagement.MasterCardTechnology'; }
        protected getDialogType() { return MasterCardTechnologyDialog; }
        protected getIdProperty() { return MasterCardTechnologyRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardTechnologyRow.localTextPrefix; }
        protected getService() { return MasterCardTechnologyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}