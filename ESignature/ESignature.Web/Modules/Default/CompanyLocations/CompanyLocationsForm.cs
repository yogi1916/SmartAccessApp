
namespace ESignature.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ESignature.Admin.Entities;
    using ESignature.Default.Entities;

    [FormScript("Default.CompanyLocations")]
    [BasedOnRow(typeof(Entities.CompanyLocationsRow), CheckNames = true)]
    public class CompanyLocationsForm
    {
        [LookupEditor(typeof(CompanyMasterRow))]
        [DisplayName("Company")]
        public Int32 CompanyMasterId { get; set; }
        [LookupEditor(typeof(LocationMasterRow))]
        [DisplayName("Location")]
        public Int32 LocationMasterId { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor]
        [ReadOnly(true)]
        [DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}