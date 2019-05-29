
namespace ESignature.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.DivisionMaster")]
    [BasedOnRow(typeof(Entities.DivisionMasterRow), CheckNames = true)]
    public class DivisionMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 DivisionId { get; set; }
        [EditLink]
        public String DivisionName { get; set; }
        public String DivisionCode { get; set; }
        [Visible(false)]
        public String CompanyMasterCompanyName { get; set; }
        [Width(150)]
        public String Details { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor]
        [ReadOnly(true)]
        [DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}