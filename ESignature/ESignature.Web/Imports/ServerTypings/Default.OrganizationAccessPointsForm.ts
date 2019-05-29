
namespace ESignature.Default {
    export class OrganizationAccessPointsForm extends Serenity.PrefixedContext {
        static formKey = 'Default.OrganizationAccessPoints';
    }

    export interface OrganizationAccessPointsForm {
        OrganizationId: Serenity.IntegerEditor;
        AccessPointName: Serenity.StringEditor;
        AccessPointCode: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        LocationCoordinates: Serenity.StringEditor;
        Range: Serenity.StringEditor;
        DateTime: Serenity.DateEditor;
        IsDeleted: Serenity.BooleanEditor;
    }

    [,
        ['OrganizationId', () => Serenity.IntegerEditor],
        ['AccessPointName', () => Serenity.StringEditor],
        ['AccessPointCode', () => Serenity.StringEditor],
        ['Location', () => Serenity.StringEditor],
        ['LocationCoordinates', () => Serenity.StringEditor],
        ['Range', () => Serenity.StringEditor],
        ['DateTime', () => Serenity.DateEditor],
        ['IsDeleted', () => Serenity.BooleanEditor]
    ].forEach(x => Object.defineProperty(OrganizationAccessPointsForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}