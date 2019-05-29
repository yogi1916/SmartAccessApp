
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class CardPoolGrid extends Serenity.EntityGrid<CardPoolRow, any> {
        protected getColumnsKey() { return 'CardManagement.CardPool'; }
        protected getDialogType() { return CardPoolDialog; }
        protected getIdProperty() { return CardPoolRow.idProperty; }
        protected getLocalTextPrefix() { return CardPoolRow.localTextPrefix; }
        protected getService() { return CardPoolService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}