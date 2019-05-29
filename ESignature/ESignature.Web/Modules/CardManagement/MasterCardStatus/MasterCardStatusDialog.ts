
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardStatusDialog extends Serenity.EntityDialog<MasterCardStatusRow, any> {
        protected getFormKey() { return MasterCardStatusForm.formKey; }
        protected getIdProperty() { return MasterCardStatusRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardStatusRow.localTextPrefix; }
        protected getNameProperty() { return MasterCardStatusRow.nameProperty; }
        protected getService() { return MasterCardStatusService.baseUrl; }

        protected form = new MasterCardStatusForm(this.idPrefix);

    }
}