
namespace ESignature.VersionInfo {
    export class VersionInfoForm extends Serenity.PrefixedContext {
        static formKey = 'VersionInfo.VersionInfo';
    }

    export interface VersionInfoForm {
        AppliedOn: Serenity.DateEditor;
        Description: Serenity.StringEditor;
    }

    [,
        ['AppliedOn', () => Serenity.DateEditor],
        ['Description', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(VersionInfoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}