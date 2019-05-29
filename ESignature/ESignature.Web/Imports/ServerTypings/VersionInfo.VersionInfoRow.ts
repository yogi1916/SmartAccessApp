
namespace ESignature.VersionInfo {
    export interface VersionInfoRow {
        Version?: number;
        AppliedOn?: string;
        Description?: string;
    }

    export namespace VersionInfoRow {
        export const idProperty = 'Version';
        export const nameProperty = 'Description';
        export const localTextPrefix = 'VersionInfo.VersionInfo';

        export namespace Fields {
            export declare const Version;
            export declare const AppliedOn;
            export declare const Description;
        }

        [
            'Version',
            'AppliedOn',
            'Description'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}