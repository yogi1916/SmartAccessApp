
namespace ESignature.Default {
    export class AuditForm extends Serenity.PrefixedContext {
        static formKey = 'Default.Audit';
    }

    export interface AuditForm {
        Module: Serenity.StringEditor;
        EmployeeCode: Serenity.StringEditor;
        Description: Serenity.StringEditor;
        DateTime: Serenity.DateEditor;
        IpAddress: Serenity.StringEditor;
        ChangedBy: Serenity.IntegerEditor;
        Extra1: Serenity.StringEditor;
        Extra2: Serenity.StringEditor;
        Extra3: Serenity.StringEditor;
        Extra4: Serenity.StringEditor;
    }

    [,
        ['Module', () => Serenity.StringEditor],
        ['EmployeeCode', () => Serenity.StringEditor],
        ['Description', () => Serenity.StringEditor],
        ['DateTime', () => Serenity.DateEditor],
        ['IpAddress', () => Serenity.StringEditor],
        ['ChangedBy', () => Serenity.IntegerEditor],
        ['Extra1', () => Serenity.StringEditor],
        ['Extra2', () => Serenity.StringEditor],
        ['Extra3', () => Serenity.StringEditor],
        ['Extra4', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AuditForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}