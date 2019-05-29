
namespace ESignature.CardManagement {

    @Serenity.Decorators.registerClass()
    export class MasterCardActivityDialog extends Serenity.EntityDialog<MasterCardActivityRow, any> {
        protected getFormKey() { return MasterCardActivityForm.formKey; }
        protected getIdProperty() { return MasterCardActivityRow.idProperty; }
        protected getLocalTextPrefix() { return MasterCardActivityRow.localTextPrefix; }
        protected getNameProperty() { return MasterCardActivityRow.nameProperty; }
        protected getService() { return MasterCardActivityService.baseUrl; }

        protected form = new MasterCardActivityForm(this.idPrefix);

    }
}