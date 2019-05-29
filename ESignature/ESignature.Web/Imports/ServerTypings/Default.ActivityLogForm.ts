
namespace ESignature.Default {
    export class ActivityLogForm extends Serenity.PrefixedContext {
        static formKey = 'Default.ActivityLog';
    }

    export interface ActivityLogForm {
        EmployeeCode: Serenity.StringEditor;
        JsonDateTime: Serenity.StringEditor;
        GmtDateTime: Serenity.DateEditor;
        UtcDateTime: Serenity.DateEditor;
        ImeiNo: Serenity.StringEditor;
        MobileNo: Serenity.StringEditor;
        OrgId: Serenity.StringEditor;
        RawString: Serenity.StringEditor;
        CardNo: Serenity.StringEditor;
        AccessPointString: Serenity.StringEditor;
        Info: Serenity.StringEditor;
        Info2: Serenity.StringEditor;
    }

    [,
        ['EmployeeCode', () => Serenity.StringEditor],
        ['JsonDateTime', () => Serenity.StringEditor],
        ['GmtDateTime', () => Serenity.DateEditor],
        ['UtcDateTime', () => Serenity.DateEditor],
        ['ImeiNo', () => Serenity.StringEditor],
        ['MobileNo', () => Serenity.StringEditor],
        ['OrgId', () => Serenity.StringEditor],
        ['RawString', () => Serenity.StringEditor],
        ['CardNo', () => Serenity.StringEditor],
        ['AccessPointString', () => Serenity.StringEditor],
        ['Info', () => Serenity.StringEditor],
        ['Info2', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ActivityLogForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}