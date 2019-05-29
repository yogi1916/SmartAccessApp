
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class DesignationsDialog extends Serenity.EntityDialog<DesignationsRow, any> {
        protected getFormKey() { return DesignationsForm.formKey; }
        protected getIdProperty() { return DesignationsRow.idProperty; }
        protected getLocalTextPrefix() { return DesignationsRow.localTextPrefix; }
        protected getNameProperty() { return DesignationsRow.nameProperty; }
        protected getService() { return DesignationsService.baseUrl; }

        protected form = new DesignationsForm(this.idPrefix);
        

    }
}