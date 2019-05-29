
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class DivisionMasterDialog extends Serenity.EntityDialog<DivisionMasterRow, any> {
        protected getFormKey() { return DivisionMasterForm.formKey; }
        protected getIdProperty() { return DivisionMasterRow.idProperty; }
        protected getLocalTextPrefix() { return DivisionMasterRow.localTextPrefix; }
        protected getNameProperty() { return DivisionMasterRow.nameProperty; }
        protected getService() { return DivisionMasterService.baseUrl; }

        protected form = new DivisionMasterForm(this.idPrefix);

    }
}