
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class CompanyLocationsGrid extends Serenity.EntityGrid<CompanyLocationsRow, any> {
        protected getColumnsKey() { return 'Default.CompanyLocations'; }
        protected getDialogType() { return CompanyLocationsDialog; }
        protected getIdProperty() { return CompanyLocationsRow.idProperty; }
        protected getLocalTextPrefix() { return CompanyLocationsRow.localTextPrefix; }
        protected getService() { return CompanyLocationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/CompanyLocations/ListExcel',
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