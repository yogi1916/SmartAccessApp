
namespace ESignature.Default {
    export class CompanyLocationsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.CompanyLocations';
    }

    export interface CompanyLocationsForm {
        CompanyMasterId: Serenity.IntegerEditor;
        LocationMasterId: Serenity.IntegerEditor;
        CreatedDateTime: Serenity.DateEditor;
        MarkDeleted: Serenity.BooleanEditor;
    }

    [,
        ['CompanyMasterId', () => Serenity.IntegerEditor],
        ['LocationMasterId', () => Serenity.IntegerEditor],
        ['CreatedDateTime', () => Serenity.DateEditor],
        ['MarkDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(CompanyLocationsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}