
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class SalutationDialog extends Serenity.EntityDialog<SalutationRow, any> {
        protected getFormKey() { return SalutationForm.formKey; }
        protected getIdProperty() { return SalutationRow.idProperty; }
        protected getLocalTextPrefix() { return SalutationRow.localTextPrefix; }
        protected getNameProperty() { return SalutationRow.nameProperty; }
        protected getService() { return SalutationService.baseUrl; }

        protected form = new SalutationForm(this.idPrefix);

    }
}