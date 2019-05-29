
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardTechnologyDialog extends Serenity.EntityDialog<MasterCardTechnologyRow, any> {
        protected getFormKey() { return MasterCardTechnologyForm.formKey; }
        protected getIdProperty() { return MasterCardTechnologyRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardTechnologyRow.localTextPrefix; }
        protected getNameProperty() { return MasterCardTechnologyRow.nameProperty; }
        protected getService() { return MasterCardTechnologyService.baseUrl; }

        protected form = new MasterCardTechnologyForm(this.idPrefix);

    }
}