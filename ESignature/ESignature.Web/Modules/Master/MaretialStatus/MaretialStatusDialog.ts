
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class MaretialStatusDialog extends Serenity.EntityDialog<MaretialStatusRow, any> {
        protected getFormKey() { return MaretialStatusForm.formKey; }
        protected getIdProperty() { return MaretialStatusRow.idProperty; }
        protected getLocalTextPrefix() { return MaretialStatusRow.localTextPrefix; }
        protected getNameProperty() { return MaretialStatusRow.nameProperty; }
        protected getService() { return MaretialStatusService.baseUrl; }

        protected form = new MaretialStatusForm(this.idPrefix);

    }
}