
namespace ESignature.Admin {
    export class FinancialYearMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Admin.FinancialYearMaster';
    }

    export interface FinancialYearMasterForm {
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.IntegerEditor;
        CreatedDeteTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        CompanyGroupId: Serenity.IntegerEditor;
    }

    [,
        ['StartDate', () => Serenity.DateEditor],
        ['EndDate', () => Serenity.IntegerEditor],
        ['CreatedDeteTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor],
        ['CompanyGroupId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(FinancialYearMasterForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}