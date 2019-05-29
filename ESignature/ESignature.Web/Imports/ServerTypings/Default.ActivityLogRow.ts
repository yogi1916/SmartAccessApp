
namespace ESignature.Default {
    export interface ActivityLogRow {
        Id?: number;
        EmployeeCode?: string;
        JsonDateTime?: string;
        GmtDateTime?: string;
        UtcDateTime?: string;
        ImeiNo?: string;
        MobileNo?: string;
        OrgId?: string;
        RawString?: string;
        CardNo?: string;
        AccessPointString?: string;
        Info?: string;
        Info2?: string;
    }

    export namespace ActivityLogRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EmployeeCode';
        export const localTextPrefix = 'Default.ActivityLog';

        export namespace Fields {
            export declare const Id;
            export declare const EmployeeCode;
            export declare const JsonDateTime;
            export declare const GmtDateTime;
            export declare const UtcDateTime;
            export declare const ImeiNo;
            export declare const MobileNo;
            export declare const OrgId;
            export declare const RawString;
            export declare const CardNo;
            export declare const AccessPointString;
            export declare const Info;
            export declare const Info2;
        }

        [
            'Id',
            'EmployeeCode',
            'JsonDateTime',
            'GmtDateTime',
            'UtcDateTime',
            'ImeiNo',
            'MobileNo',
            'OrgId',
            'RawString',
            'CardNo',
            'AccessPointString',
            'Info',
            'Info2'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}