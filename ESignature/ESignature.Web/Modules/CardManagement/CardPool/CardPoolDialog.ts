
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CardPoolDialog extends Serenity.EntityDialog<CardPoolRow, any> {
        protected getFormKey() { return CardPoolForm.formKey; }
        protected getIdProperty() { return CardPoolRow.idProperty; }
        protected getLocalTextPrefix() { return CardPoolRow.localTextPrefix; }
        protected getNameProperty() { return CardPoolRow.nameProperty; }
        protected getService() { return CardPoolService.baseUrl; }

        protected form = new CardPoolForm(this.idPrefix);

    }
}