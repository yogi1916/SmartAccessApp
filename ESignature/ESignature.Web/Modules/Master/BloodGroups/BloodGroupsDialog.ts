
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class BloodGroupsDialog extends Serenity.EntityDialog<BloodGroupsRow, any> {
        protected getFormKey() { return BloodGroupsForm.formKey; }
        protected getIdProperty() { return BloodGroupsRow.idProperty; }
        protected getLocalTextPrefix() { return BloodGroupsRow.localTextPrefix; }
        protected getNameProperty() { return BloodGroupsRow.nameProperty; }
        protected getService() { return BloodGroupsService.baseUrl; }

        protected form = new BloodGroupsForm(this.idPrefix);

    }
}