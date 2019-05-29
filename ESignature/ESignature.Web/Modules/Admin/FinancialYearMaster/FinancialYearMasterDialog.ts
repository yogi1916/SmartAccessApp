
namespace ESignature.Admin {

    @Serenity.Decorators.registerClass()
    export class FinancialYearMasterDialog extends Serenity.EntityDialog<FinancialYearMasterRow, any> {
        protected getFormKey() { return FinancialYearMasterForm.formKey; }
        protected getIdProperty() { return FinancialYearMasterRow.idProperty; }
        protected getLocalTextPrefix() { return FinancialYearMasterRow.localTextPrefix; }
        protected getService() { return FinancialYearMasterService.baseUrl; }

        protected form = new FinancialYearMasterForm(this.idPrefix);

    }
}