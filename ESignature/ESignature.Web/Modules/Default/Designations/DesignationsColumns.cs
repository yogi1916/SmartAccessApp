
namespace ESignature.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Designations")]
    [BasedOnRow(typeof(Entities.DesignationsRow), CheckNames = true)]
    public class DesignationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 DesignationId { get; set; }
        [EditLink]
        public String DesignationName { get; set; }

        [Visible(false)]
        public String DesignationCode { get; set; }
        public String CompanyMasterCompanyName { get; set; }
        public String Details { get; set; }
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}