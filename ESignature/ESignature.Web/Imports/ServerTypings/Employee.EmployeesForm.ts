﻿
namespace ESignature.Employee {
    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'Employee.Employees';
    }

    export interface EmployeesForm {
        LastName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        Title: Serenity.StringEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        HomePhone: Serenity.StringEditor;
        Extension: Serenity.StringEditor;
        Photo: Serenity.StringEditor;
        Notes: Serenity.StringEditor;
        ReportsTo: Serenity.IntegerEditor;
        PhotoPath: Serenity.StringEditor;
    }

    [,
        ['LastName', () => Serenity.StringEditor],
        ['FirstName', () => Serenity.StringEditor],
        ['Title', () => Serenity.StringEditor],
        ['TitleOfCourtesy', () => Serenity.StringEditor],
        ['BirthDate', () => Serenity.DateEditor],
        ['HireDate', () => Serenity.DateEditor],
        ['Address', () => Serenity.StringEditor],
        ['City', () => Serenity.StringEditor],
        ['Region', () => Serenity.StringEditor],
        ['PostalCode', () => Serenity.StringEditor],
        ['Country', () => Serenity.StringEditor],
        ['HomePhone', () => Serenity.StringEditor],
        ['Extension', () => Serenity.StringEditor],
        ['Photo', () => Serenity.StringEditor],
        ['Notes', () => Serenity.StringEditor],
        ['ReportsTo', () => Serenity.IntegerEditor],
        ['PhotoPath', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmployeesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}