
namespace ESignature.Master {
    export interface BloodGroupsRow {
        BloodGroupId?: number;
        BloodGroup?: string;
    }

    export namespace BloodGroupsRow {
        export const idProperty = 'BloodGroupId';
        export const nameProperty = 'BloodGroup';
        export const localTextPrefix = 'Master.BloodGroups';

        export namespace Fields {
            export declare const BloodGroupId;
            export declare const BloodGroup;
        }

        [
            'BloodGroupId',
            'BloodGroup'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}