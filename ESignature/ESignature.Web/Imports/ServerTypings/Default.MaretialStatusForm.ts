
namespace ESignature.Default {
    export class MaretialStatusForm extends Serenity.PrefixedContext {
        static formKey = 'Default.MaretialStatus';
    }

    export interface MaretialStatusForm {
        MaretialStatus: Serenity.StringEditor;
    }

    [,
        ['MaretialStatus', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MaretialStatusForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}