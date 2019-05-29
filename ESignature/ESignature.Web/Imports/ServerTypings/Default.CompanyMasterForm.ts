
namespace ESignature.Default {
    export class CompanyMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CompanyMaster';
    }

    export interface CompanyMasterForm {
        CompanyName: Serenity.StringEditor;
        CompanyGroupId: Serenity.IntegerEditor;
        CompanyDetails: Serenity.StringEditor;
        EmailId: Serenity.StringEditor;
        OffNo: Serenity.StringEditor;
        FinancialYearMasterId: Serenity.IntegerEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
        SmtpServerName: Serenity.StringEditor;
        SmtpPortNo: Serenity.StringEditor;
        SmtpUserName: Serenity.StringEditor;
        SmtpPassword: Serenity.StringEditor;
        IsAuditTrail: Serenity.BooleanEditor;
        Isenablessl: Serenity.BooleanEditor;
    }

    [,
        ['CompanyName', () => Serenity.StringEditor],
        ['CompanyGroupId', () => Serenity.IntegerEditor],
        ['CompanyDetails', () => Serenity.StringEditor],
        ['EmailId', () => Serenity.StringEditor],
        ['OffNo', () => Serenity.StringEditor],
        ['FinancialYearMasterId', () => Serenity.IntegerEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor],
        ['SmtpServerName', () => Serenity.StringEditor],
        ['SmtpPortNo', () => Serenity.StringEditor],
        ['SmtpUserName', () => Serenity.StringEditor],
        ['SmtpPassword', () => Serenity.StringEditor],
        ['IsAuditTrail', () => Serenity.BooleanEditor],
        ['Isenablessl', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CompanyMasterForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}