
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class DepartmentsGrid extends Serenity.EntityGrid<DepartmentsRow, any> {
        protected getColumnsKey() { return 'Default.Departments'; }
        protected getDialogType() { return DepartmentsDialog; }
        protected getIdProperty() { return DepartmentsRow.idProperty; }
        protected getLocalTextPrefix() { return DepartmentsRow.localTextPrefix; }
        protected getService() { return DepartmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/Departments/ListExcel',
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