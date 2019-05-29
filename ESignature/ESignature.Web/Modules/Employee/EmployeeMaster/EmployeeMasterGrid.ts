
namespace ESignature.Employee {

    @Serenity.Decorators.registerClass()
    export class EmployeeMasterGrid extends Serenity.EntityGrid<EmployeeMasterRow, any> {
        protected getColumnsKey() { return 'Employee.EmployeeMaster'; }
        protected getDialogType() { return EmployeeMasterDialog; }
        protected getIdProperty() { return EmployeeMasterRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeMasterRow.localTextPrefix; }
        protected getService() { return EmployeeMasterService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        getButtons() {
            var buttons = super.getButtons();

            buttons.push(ESignature.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Employee/EmployeeMaster/ListExcel',
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