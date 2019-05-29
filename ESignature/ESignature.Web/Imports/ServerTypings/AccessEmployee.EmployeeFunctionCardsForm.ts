
namespace ESignature.AccessEmployee {
    export class EmployeeFunctionCardsForm extends Serenity.PrefixedContext {
        static formKey = 'AccessEmployee.EmployeeFunctionCards';
    }

    export interface EmployeeFunctionCardsForm {
        CardType: Serenity.IntegerEditor;
        EmployeeMasterId: Serenity.IntegerEditor;
        CardNo: Serenity.StringEditor;
        CsnNo: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        FacilityCode: Serenity.StringEditor;
        TempFuncId: Serenity.IntegerEditor;
    }

    [,
        ['CardType', () => Serenity.IntegerEditor],
        ['EmployeeMasterId', () => Serenity.IntegerEditor],
        ['CardNo', () => Serenity.StringEditor],
        ['CsnNo', () => Serenity.StringEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor],
        ['FacilityCode', () => Serenity.StringEditor],
        ['TempFuncId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(EmployeeFunctionCardsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}