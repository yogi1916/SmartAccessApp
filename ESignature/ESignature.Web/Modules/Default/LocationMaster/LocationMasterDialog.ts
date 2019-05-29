
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class LocationMasterDialog extends Serenity.EntityDialog<LocationMasterRow, any> {
        protected getFormKey() { return LocationMasterForm.formKey; }
        protected getIdProperty() { return LocationMasterRow.idProperty; }
        protected getLocalTextPrefix() { return LocationMasterRow.localTextPrefix; }
        protected getNameProperty() { return LocationMasterRow.nameProperty; }
        protected getService() { return LocationMasterService.baseUrl; }

        protected form = new LocationMasterForm(this.idPrefix);

    }
}