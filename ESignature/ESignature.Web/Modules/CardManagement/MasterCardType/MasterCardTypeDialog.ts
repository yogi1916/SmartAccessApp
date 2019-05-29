
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardTypeDialog extends Serenity.EntityDialog<MasterCardTypeRow, any> {
        protected getFormKey() { return MasterCardTypeForm.formKey; }
        protected getIdProperty() { return MasterCardTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardTypeRow.localTextPrefix; }
        protected getNameProperty() { return MasterCardTypeRow.nameProperty; }
        protected getService() { return MasterCardTypeService.baseUrl; }

        protected form = new MasterCardTypeForm(this.idPrefix);

    }
}