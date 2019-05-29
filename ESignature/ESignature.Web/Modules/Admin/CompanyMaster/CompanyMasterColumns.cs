
namespace ESignature.Admin.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Admin.CompanyMaster")]
    [BasedOnRow(typeof(Entities.CompanyMasterRow), CheckNames = true)]
    public class CompanyMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 CompanyMasterId { get; set; }
        [EditLink]
        [Width(220)]
        public String CompanyName { get; set; }
        [Width(200)]
        [Visible(false)]
        public String CompanyGroupGroupName { get; set; }
        [Visible(false)]
        public String CompanyDetails { get; set; }
        [Visible(false)]
        public String EmailId { get; set; }
        [Visible(false)]
        public String OffNo { get; set; }
        [Visible(false)]
        public Int32 FinancialYearMasterId { get; set; }       
        [Width(220)]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
        [Visible(false)]
        public String SmtpServerName { get; set; }
        [Visible(false)]
        public String SmtpPortNo { get; set; }
        [Visible(false)]
        public String SmtpUserName { get; set; }
        [Visible(false)]
        public String SmtpPassword { get; set; }
        [Visible(false)]
        public Boolean IsAuditTrail { get; set; }
        [Visible(false)]
        public Boolean Isenablessl { get; set; }
    }
}