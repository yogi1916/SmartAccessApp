
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

    [FormScript("Admin.FinancialYearMaster")]
    [BasedOnRow(typeof(Entities.FinancialYearMasterRow), CheckNames = true)]
    public class FinancialYearMasterForm
    {
        [LookupEditor(typeof(CompanyGroupRow))]
        [DisplayName("Company Group")]
        public Int32 CompanyGroupId { get; set; }
        [DateTimeEditor]       
        [DisplayFormat("dd-MM-yyyy")]
        public DateTime StartDate { get; set; }
        [DateTimeEditor]
        [DisplayFormat("dd-MM-yyyy")]
        public DateTime EndDate { get; set; }
        [DateTimeEditor]
        [DefaultValue("now")]
        [DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDeteTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }        
    }
}