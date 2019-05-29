
namespace ESignature.Admin.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Admin.CompanyGroup")]
    [BasedOnRow(typeof(Entities.CompanyGroupRow), CheckNames = true)]
    public class CompanyGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 CompanyGroupId { get; set; }
        [EditLink]
        [Width(200)]
        public String GroupName { get; set; }
        [Width(200)]
        public DateTime CreatedDeteTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}