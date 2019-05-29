
namespace ESignature.Default {
    export class DepartmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Departments';
    }

    export interface DepartmentsForm {
        DepartmentName: Serenity.StringEditor;
        DepartmentCode: Serenity.StringEditor;
        CompanyLocationId: Serenity.IntegerEditor;
        DivisionId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }

    [,
        ['DepartmentName', () => Serenity.StringEditor],
        ['DepartmentCode', () => Serenity.StringEditor],
        ['CompanyLocationId', () => Serenity.IntegerEditor],
        ['DivisionId', () => Serenity.IntegerEditor],
        ['Details', () => Serenity.StringEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(DepartmentsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}