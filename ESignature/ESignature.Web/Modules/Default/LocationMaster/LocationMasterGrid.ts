
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class LocationMasterGrid extends Serenity.EntityGrid<LocationMasterRow, any> {
        protected getColumnsKey() { return 'Default.LocationMaster'; }
        protected getDialogType() { return LocationMasterDialog; }
        protected getIdProperty() { return LocationMasterRow.idProperty; }
        protected getLocalTextPrefix() { return LocationMasterRow.localTextPrefix; }
        protected getService() { return LocationMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/LocationMaster/ListExcel',
                separator: true
            }));

            buttons.push(ESignature.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}