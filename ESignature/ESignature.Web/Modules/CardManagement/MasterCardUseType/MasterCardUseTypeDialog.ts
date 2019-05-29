
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardUseTypeDialog extends Serenity.EntityDialog<MasterCardUseTypeRow, any> {
        protected getFormKey() { return MasterCardUseTypeForm.formKey; }
        protected getIdProperty() { return MasterCardUseTypeRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardUseTypeRow.localTextPrefix; }
        protected getNameProperty() { return MasterCardUseTypeRow.nameProperty; }
        protected getService() { return MasterCardUseTypeService.baseUrl; }

        protected form = new MasterCardUseTypeForm(this.idPrefix);

    }
}