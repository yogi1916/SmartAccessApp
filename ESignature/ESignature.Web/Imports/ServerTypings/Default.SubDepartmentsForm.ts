
namespace ESignature.Default {
    export class SubDepartmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.SubDepartments';
    }

    export interface SubDepartmentsForm {
        SubDepartmentName: Serenity.StringEditor;
        SubDepartmentCode: Serenity.StringEditor;
        DepartmentId: Serenity.IntegerEditor;
        Details: Serenity.StringEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }

    [,
        ['SubDepartmentName', () => Serenity.StringEditor],
        ['SubDepartmentCode', () => Serenity.StringEditor],
        ['DepartmentId', () => Serenity.IntegerEditor],
        ['Details', () => Serenity.StringEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(SubDepartmentsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}