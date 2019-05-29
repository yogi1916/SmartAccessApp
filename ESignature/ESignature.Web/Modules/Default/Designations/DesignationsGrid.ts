
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class DesignationsGrid extends Serenity.EntityGrid<DesignationsRow, any> {
        protected getColumnsKey() { return 'Default.Designations'; }
        protected getDialogType() { return DesignationsDialog; }
        protected getIdProperty() { return DesignationsRow.idProperty; }
        protected getLocalTextPrefix() { return DesignationsRow.localTextPrefix; }
        protected getService() { return DesignationsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Designations/ListExcel',
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