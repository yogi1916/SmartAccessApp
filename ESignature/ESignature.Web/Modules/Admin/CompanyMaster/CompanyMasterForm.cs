
namespace ESignature.Admin.Forms
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

    [FormScript("Admin.CompanyMaster")]
    [BasedOnRow(typeof(Entities.CompanyMasterRow), CheckNames = true)]
    public class CompanyMasterForm
    {
        [Category("Basic Info")]
        public String CompanyName { get; set; }
        [LookupEditor(typeof(CompanyGroupRow))]
        [Visible(false)]
        [DisplayName("Company Group")]
        public Int32 CompanyGroupId { get; set; }
        [LookupEditor(typeof(FinancialYearMasterRow))]
        [Visible(false)]
        public Int32 FinancialYearMasterId { get; set; }        

        [Visible(false)]
        [LookupEditor(typeof(LocationMasterRow), Multiple = true, Delimited = true, OpenDialogAsPanel = true)]
        public String Locations { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor]
        [ReadOnly(true)]
        [DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDateTime { get; set; }
        [Category("Address")]
        [HtmlNoteContentEditor]
        public String CompanyDetails { get; set; }
        [DisplayName("Email")]
        [EmailEditor]
        public String EmailId { get; set; }
        [DisplayName("Official No")]
        public String OffNo { get; set; }
      
        
        [Category("Configuration")]
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
        public String SmtpServerName { get; set; }
        public String SmtpPortNo { get; set; }
        public String SmtpUserName { get; set; }
        public String SmtpPassword { get; set; }
        public Boolean IsAuditTrail { get; set; }
        [DisplayName("Enable SSL??")]
        public Boolean Isenablessl { get; set; }
    }
}