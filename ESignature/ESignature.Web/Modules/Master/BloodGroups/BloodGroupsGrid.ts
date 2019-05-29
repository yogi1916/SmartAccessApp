
namespace ESignature.Master {

    @Serenity.Decorators.registerClass()
    export class BloodGroupsGrid extends Serenity.EntityGrid<BloodGroupsRow, any> {
        protected getColumnsKey() { return 'Master.BloodGroups'; }
        protected getDialogType() { return BloodGroupsDialog; }
        protected getIdProperty() { return BloodGroupsRow.idProperty; }
        protected getLocalTextPrefix() { return BloodGroupsRow.localTextPrefix; }
        protected getService() { return BloodGroupsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}