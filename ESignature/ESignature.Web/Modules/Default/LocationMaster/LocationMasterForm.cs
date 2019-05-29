
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

    [FormScript("Default.LocationMaster")]
    [BasedOnRow(typeof(Entities.LocationMasterRow), CheckNames = true)]
    public class LocationMasterForm
    {
        [LookupEditor(typeof(CompanyGroupRow))]
        [DisplayName("Company Group")]
        [Visible(false)]
        public Int32 CompanyGroupId { get; set; }

        public String LocationName { get; set; }
        public String LocationCode { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor]
        [ReadOnly(true)]
        [DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }        
    }
}