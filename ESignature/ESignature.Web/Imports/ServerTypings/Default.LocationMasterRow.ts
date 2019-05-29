
namespace ESignature.Default {
    export interface LocationMasterRow {
        LocationMasterId?: number;
        LocationName?: string;
        LocationCode?: string;
        CreatedDateTime?: string;
        MarkDeleted?: boolean;
        CompanyGroupId?: number;
        CompanyGroupGroupName?: string;
        CompanyGroupCreatedDeteTime?: string;
        CompanyGroupMarkDeleted?: boolean;
    }

    export namespace LocationMasterRow {
        export const idProperty = 'LocationMasterId';
        export const nameProperty = 'LocationName';
        export const localTextPrefix = 'Default.LocationMaster';

        export namespace Fields {
            export declare const LocationMasterId;
            export declare const LocationName;
            export declare const LocationCode;
            export declare const CreatedDateTime;
            export declare const MarkDeleted;
            export declare const CompanyGroupId;
            export declare const CompanyGroupGroupName;
            export declare const CompanyGroupCreatedDeteTime;
            export declare const CompanyGroupMarkDeleted;
        }

        [
            'LocationMasterId',
            'LocationName',
            'LocationCode',
            'CreatedDateTime',
            'MarkDeleted',
            'CompanyGroupId',
            'CompanyGroupGroupName',
            'CompanyGroupCreatedDeteTime',
            'CompanyGroupMarkDeleted'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}