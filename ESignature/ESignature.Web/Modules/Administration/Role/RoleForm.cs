
namespace ESignature.Administration.Forms
{
    using ESignature.Admin.Entities;
    using ESignature.Default.Entities;
    using Serenity.ComponentModel;
    using SmartCommandControl.Northwind.Lookups;
    using System;
    using System.ComponentModel;

    [FormScript("Administration.Role")]
    [BasedOnRow(typeof(Entities.RoleRow), CheckNames = true)]
    public class RoleForm
    {             
        public String RoleName { get; set; }
        [LookupEditor(typeof(CompanyMasterRow))]
        [DisplayName("Company")]        
        public Int32 CompnayMasterID { get; set; }        
        // [LookupEditor(typeof(CompanyLocationsRow), Multiple = true, Delimited = true, OpenDialogAsPanel = true)]        
        public String Locations { get; set; }
    }
}