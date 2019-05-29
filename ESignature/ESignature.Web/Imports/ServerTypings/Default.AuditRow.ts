
namespace ESignature.Default {
    export interface AuditRow {
        Id?: number;
        Module?: string;
        EmployeeCode?: string;
        Description?: string;
        DateTime?: string;
        IpAddress?: string;
        ChangedBy?: number;
        Extra1?: string;
        Extra2?: string;
        Extra3?: string;
        Extra4?: string;
    }

    export namespace AuditRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Module';
        export const localTextPrefix = 'Default.Audit';

        export namespace Fields {
            export declare const Id;
            export declare const Module;
            export declare const EmployeeCode;
            export declare const Description;
            export declare const DateTime;
            export declare const IpAddress;
            export declare const ChangedBy;
            export declare const Extra1;
            export declare const Extra2;
            export declare const Extra3;
            export declare const Extra4;
        }

        [
            'Id',
            'Module',
            'EmployeeCode',
            'Description',
            'DateTime',
            'IpAddress',
            'ChangedBy',
            'Extra1',
            'Extra2',
            'Extra3',
            'Extra4'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}