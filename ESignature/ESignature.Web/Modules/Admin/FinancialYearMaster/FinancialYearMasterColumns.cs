
namespace ESignature.Admin.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Admin.FinancialYearMaster")]
    [BasedOnRow(typeof(Entities.FinancialYearMasterRow), CheckNames = true)]
    public class FinancialYearMasterColumns
    {
        [EditLink, AlignRight]
        [DisplayName("Group Name")]
        [Width(200)]
        public String CompanyGroupGroupName { get; set; }
        [Visible(false)]
        public Int32 FinancialYearMasterId { get; set; }
        [Width(200)]
        public DateTime StartDate { get; set; }
        [Width(200)]
        public DateTime EndDate { get; set; }
        [Width(200)]
        public DateTime CreatedDeteTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
       
    }
}