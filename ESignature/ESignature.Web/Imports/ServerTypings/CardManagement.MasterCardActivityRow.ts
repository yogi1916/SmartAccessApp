
namespace ESignature.CardManagement {
    export interface MasterCardActivityRow {
        CardActivityiD?: number;
        Activity?: string;
    }

    export namespace MasterCardActivityRow {
        export const idProperty = 'CardActivityiD';
        export const nameProperty = 'Activity';
        export const localTextPrefix = 'CardManagement.MasterCardActivity';

        export namespace Fields {
            export declare const CardActivityiD;
            export declare const Activity;
        }

        [
            'CardActivityiD',
            'Activity'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}