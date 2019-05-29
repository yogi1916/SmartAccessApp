
namespace ESignature.Default {

    @Serenity.Decorators.registerClass()
    export class SubDepartmentsGrid extends Serenity.EntityGrid<SubDepartmentsRow, any> {
        protected getColumnsKey() { return 'Default.SubDepartments'; }
        protected getDialogType() { return SubDepartmentsDialog; }
        protected getIdProperty() { return SubDepartmentsRow.idProperty; }
        protected getLocalTextPrefix() { return SubDepartmentsRow.localTextPrefix; }
        protected getService() { return SubDepartmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Default/SubDepartments/ListExcel',
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